import fs from 'node:fs';import crypto from 'node:crypto';import{itemHashGuard}from'../../tools/physics-support/item-hash.mjs';
const p='research/physics-non-fluid-129-2026-10-21-r2-batch-52.proof-contracts.json',d=JSON.parse(fs.readFileSync(p)),id='lem-nrqmx-finite-maslov-phase-parity',mid='thm-nrqmx-finite-metaplectic-construction';
const rows={
empty:['checked','Statement fixes r>=1 and supplies two normalized evolutions on compact intervals with the same endpoint. Step 7.1 compares their nonzero Gaussian scalar factors; the mode and comparison carriers are nonempty.'],
zero:['checked','Steps 3.1 and 6.1 include K=0: S=I, Z=iI and c=1. Every division in steps 4.1–7.1 uses F=A+iB or its nonzero determinant, proved invertible in step 4.1; hbar is strictly positive.'],
one:['checked','For r=1, steps 4.1–7.1 give the scalar identity c^2(A+iB)=1 and hence the same two possible phases; the determinant calculation does not require multiple modes.'],
degenerate:['checked','Although the Statement requests det B nonzero, step 4.1 proves A+iB invertible even when either real block is singular; the sign calculation therefore does not divide by a singular real generating block.'],
endpoints:['checked','Step 3.1 constructs continuous absolutely continuous paths from the identity, step 6.1 extends the determinant identity to every time by scalar FTC, and step 7.1 compares the common endpoint.'],
'nonempty-choice':['checked','Statement explicitly inherits AC from the finite-mode definition. Facts F4–F6 invoke the pinned Fourier and absolutely continuous calculus with their CC/DC hypotheses, consequences of that same AC; finite subdivision adds no stronger choice.'],
'iff-forward':['not_applicable','The claim gives a two-valued relative phase for supplied normalized propagators; it does not characterize which general unitaries arise from quadratic evolution.'],
'iff-reverse':['not_applicable','No converse asserting realization of arbitrary Weyl phases is made; steps 6.1 and 7.1 force only the two signs for normalized paths.']};
const rowsM={
zero:['checked','The zero Hamiltonian gives the identity lift in step 3.1; the one-mode full oscillator loop also reaches the same classical endpoint and gives the other lift -I.'],
one:['checked','Step 3.1 computes exp(-2 pi i(n+1/2))=-1 on every one-mode Hermite vector, and completeness proves the nontrivial lift of the full rotation.'],
degenerate:['checked','Step 2.3 invokes the globally invertible A+iB Gaussian matrix from the supplier, so endpoints with singular real generating blocks have the same two-element fiber.'],
endpoints:['checked','Steps 2.1 and 3.1 give every endpoint exactly two lifts, including I. Steps 4.1 and 5.1 construct the two local sheets and recover the endpoint continuously in the declared Schwartz topology.']};
for(const [tid,changes]of [[id,rows],[mid,rowsM]]){let c=d.contracts[tid];c.boundaries=c.boundaries.map(r=>{let v=changes[r.case];return v?{case:r.case,status:v[0],[v[0]==='checked'?'evidence':'reason']:v[1]}:r});
 for(const r of c.boundaries)if(r.template_review){r.template_review.item_sha256=itemHashGuard(fs.readFileSync('items/'+tid+'.md','utf8'));r.template_review.row_sha256=crypto.createHash('sha256').update(JSON.stringify({case:r.case,status:r.status,text:r.reason??r.evidence??''})).digest('hex');}
}
d.contracts[id].finite_checks=[{case:'same-endpoint Gaussian phase ratio',calculation:'c1^2 det(A+iB)=c2^2 det(A+iB)=1 implies (c2/c1)^2=1',evidence:'Steps 6.1 and 7.1'}];
d.contracts[mid].finite_checks=[{case:'one-mode 2pi loop',calculation:'exp(-2 pi i(n+1/2))=-1 for every n; completeness gives -I',evidence:'step 3.1'},{case:'local normalized lift',calculation:'C_Y E_A T_X has endpoint L_Y D_A U_X and its logarithmic derivative has only homogeneous Weyl-ordered quadratic terms',evidence:'step 4.1 invokes supplier F4 with its explicit local construction'}];
fs.writeFileSync(p,JSON.stringify(d,null,2)+'\n');
