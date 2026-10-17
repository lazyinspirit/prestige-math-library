import json,pathlib,copy,hashlib
base=pathlib.Path(__file__).parent
# Each disposition below was read against the current item, not inferred from its ID.
R={
'lem-qsm-dt-finite-trace-pairing-cyclicity':{
'empty':('checked','Statement requires d,e≥1; step 1.1 therefore sums nonempty matrix-index ranges, and step 2.1 has matrix units in a positive dimension.'),
'degenerate':('checked','Steps 1.1 and 2.1 do not assume either rectangular factor or C invertible: zero and singular matrices retain the same finite entry calculations.'),
'endpoints':('not_applicable','The diagonal-sum trace identity is algebraic in rectangular matrix entries; it has no time interval, limiting parameter, or boundary evaluation.'),
'iff-forward':('not_applicable','The public pairing conclusion is the implication from Tr(XC)=0 for every X to C=0, discharged by testing E_ij in step 2.1; no equivalence is stated.'),
'iff-reverse':('not_applicable','No reverse implication is part of the stated nondegeneracy assertion; C=0 is its conclusion, rather than a separate premise for reconstruction.'),
'nonempty-choice':('checked','Step 2.1 tests the already specified finite standard matrix units E_ij, rather than selecting elements from an arbitrary family of nonempty sets.')},
'def-qsm-dt-channel-definition':{
'empty':('checked','Definition fixes input and output spaces C^d,C^e with d,e≥1, and ancilla dimensions r≥1; no zero-dimensional matrix algebra is admitted.'),
'zero':('checked','Definition includes the zero positive semidefinite input. The zero map is positive and completely positive but fails trace preservation on I_d because d≥1.'),
'one':('checked','Definition admits d=e=1 and r=1: scalar positivity and trace equality make the scalar channel the identity; the r=1 amplification is ordinary positivity.'),
'degenerate':('checked','Definition uses positive semidefinite matrices, allowing zero eigenvalues; it imposes no faithfulness or invertibility on inputs.'),
'endpoints':('not_applicable','Channels here are linear maps between fixed matrix spaces; the definition assigns neither a time parameter nor an interval of evolution.'),
'iff-forward':('not_applicable','CPTP is the defining conjunction of complete positivity and trace preservation; this vocabulary declaration asserts no forward implication of an independent characterization theorem.'),
'iff-reverse':('not_applicable','No converse classification is proved in this definition: unitality is explicitly a separate condition, while CPTP supplies the stipulated meaning of channel.'),
'nonempty-choice':('checked','Definition specifies standard inner products and ordered product bases for each finite r; its quantifier over amplifications demands no simultaneous choice of witnesses.')},
'def-qsm-dt-gksl-definition':{
'empty':('checked','Definition explicitly permits m=0 and sets the empty dissipative sum to zero; the resulting generator is the Hamiltonian commutator alone.'),
'degenerate':('checked','Definition permits vanishing jump matrices and repeated eigenvalues of H; its polynomial commutator and anticommutator formula uses no spectral denominators.'),
'endpoints':('checked','Definition imposes Lambda(s,s)=id on the compact time interval and only defines the differential equation; it deliberately asserts no existence or uniqueness, including on a singleton interval.'),
'iff-forward':('not_applicable','The displayed generator formula defines finite GKSL form; the subsequent propagator clause specifies an initial-value equation rather than a characterization implication.'),
'iff-reverse':('not_applicable','Whether an arbitrary channel semigroup has this form is outside this definition; no reconstruction of H or jump matrices is claimed here.'),
'nonempty-choice':('checked','Definition takes H and the finite list L_1,...,L_m as supplied data, including m=0; it does not require choosing a representation from unspecified sets.')},
 'thm-qsm-dt-choi-kraus':{
'empty':('checked','Statement allows the empty Kraus sum for Phi=0; step 1.2 takes q=0 exactly when J(Phi)=0, and steps 2.1–3.1 still give the zero completely positive map. It cannot be trace-preserving for d≥1.'),
'endpoints':('not_applicable','The rank bound q≤de and the positive-Choi/Kraus equivalences concern fixed finite matrices; there is no continuous parameter approaching an interval endpoint.')},
 'thm-qsm-dt-channel-duality':{
'empty':('checked','Statement inherits d,e≥1 from the channel definition. Step 1.2 requires convex weights summing to one, excluding an empty convex combination; a channel also cannot have an empty Kraus family by its identity adjoint-square sum.'),
'degenerate':('checked','Step 1.2 permits zero convex weights through sqrt(p_r)K_r,a; step 3.1 proves closure with nonstrict quadratic-form inequalities, so a singular Choi limit remains admissible.'),
'iff-forward':('not_applicable','The assertion constructs the trace dual of an already given channel and establishes closure; it does not state equivalence between channelhood and an independent property.'),
'iff-reverse':('not_applicable','Uniqueness in step 2.1 compares maps satisfying the pairing identity; it is not a converse claiming that any unital map is the dual of a channel.'),
'nonempty-choice':('checked','Step 1.1 uses a finite Kraus family from F2, and step 2.1 tests specified matrix units for uniqueness; no choice over an infinite family of representations is used.')},
 'thm-qsm-dt-gksl-sufficient':{
'empty':('checked','The GKSL data allow m=0. Then step 1.1 has D=0 and J=0, the completely positive jump exponential in step 2.1 is the identity, and the product-limit proof still applies.'),
'degenerate':('checked','Steps 1.1–4.1 work when all jumps vanish or H has repeated eigenvalues: matrix exponentials and trace cancellation use no inverse generator or positive spectral gap.'),
'iff-forward':('not_applicable','The theorem proves that a supplied GKSL generator yields channels for t≥0; it does not claim that this implication alone characterizes all channel families.'),
'iff-reverse':('not_applicable','Recovering GKSL form from a norm-continuous channel semigroup belongs to the separate necessity theorem; this statement assumes the generator formula at the outset.'),
'nonempty-choice':('checked','Step 3.1 uses the explicit sequence of products with h=t/n, and step 4.1 the exponential power series; the limiting channels are not obtained by selecting arbitrary witnesses.')},
 'thm-qsm-dt-reduced-unitary':{
'empty':('checked','Statement imposes d,m≥1 and Tr(sigma_E)=1; step 1.1 has a finite environment eigenbasis with weights summing to one, so neither the environment nor all its weights can be empty.'),
'iff-forward':('not_applicable','The assertion sends a fixed product preparation through a fixed unitary and proves that its reduced map is a channel; it is not an equivalence characterizing all channels.'),
'iff-reverse':('not_applicable','No dilation converse is stated. In particular the explicit scope sentence declines a marginal-only assertion for correlated joint preparations.')},
 'thm-qsm-dt-trace-contraction':{
'empty':('checked','Given requires d,e≥1. In step 1.2 an empty list of positive singular values means X=0, and step 2.2 explicitly includes that case in the trace-dual norm formula.'),
'degenerate':('checked','Step 1.2 divides only by s_j>0; zero singular values are omitted. Step 2.2 extends the resulting finite orthonormal lists, so rank-deficient X is covered.'),
'endpoints':('not_applicable','The operator-norm and trace-norm inequalities quantify arbitrary finite matrices without a time variable or limiting endpoint; the unit ball in step 2.2 includes its boundary by ≤1.'),
'iff-forward':('not_applicable','Channelhood is a premise for the two contraction inequalities; the statement supplies no equivalence between contraction and complete positivity.'),
'iff-reverse':('not_applicable','The proof concludes norm contraction by trace duality in step 3.1, without claiming that a trace-norm contraction must be a channel.'),
'nonempty-choice':('checked','Step 2.2 completes two finite orthonormal lists and chooses one unitary between finite bases; this finite basis construction requires no arbitrary-index choice axiom.')},
 'thm-qsm-dt-gksl-necessary':{
'empty':('checked','Statement requires d≥1 but allows zero jumps: in step 4.1 the positive matrix M may have rank q=0, making the dissipative family empty without affecting step 5.1.'),
'degenerate':('checked','Step 4.1 uses rank(M)≤d²−1 and only positive spectral terms; zero eigenvalues contribute no jump matrices. Steps 1.1–2.1 also admit the identity semigroup with generator zero.'),
'iff-forward':('checked','Steps 1.1–2.2 construct the unique generator of the norm-continuous channel semigroup; steps 3.1–5.1 use conditional Choi positivity and trace preservation to obtain its GKSL form.'),
'iff-reverse':('checked','Step 6.1 explicitly invokes the sufficient theorem to send every finite GKSL generator back to a norm-continuous channel semigroup, proving the stated converse.'),
'nonempty-choice':('checked','Step 1.1 selects one sufficiently small positive h using norm continuity and a Neumann inverse; step 4.1 uses a finite spectral factorization, not a family of arbitrary set selections.')},
 'thm-qsm-dt-pinching-entropy':{
'empty':('checked','Statement has d,r≥1 and sum_j P_j=I, so the projection family is nonempty and cannot consist entirely of zero projections. Individual zero projections leave steps 1.1–1.2 unchanged.'),
'endpoints':('checked','Statement defines 0 log 0=0 and admits rank-deficient rho. Step 2.1 uses the finite-mixture supplier F4 explicitly including these densities; no time endpoint is involved.'),
'iff-forward':('not_applicable','The stated entropy conclusion is a one-way inequality for the specified pinching map; it does not characterize all entropy-increasing channels.'),
'iff-reverse':('not_applicable','No converse or equality characterization for pinching is asserted; step 2.1 only combines unitary spectral invariance with finite-mixture concavity.')},
 'thm-qsm-dt-time-dependent-gksl':{
'empty':('checked','Statement uses I=[s_0,s_1] and d≥1. An empty jump list is allowed by the referenced GKSL definition, and steps 1.1–3.1 require only continuity of the resulting finite generator.'),
'degenerate':('checked','Step 1.1 permits M=sup||L_u||=0: all D_n with n≥1 vanish and Lambda=I. Step 2.1 proves uniqueness without dividing by M or t−s.'),
'iff-forward':('not_applicable','The assertion constructs the unique propagator for supplied continuous GKSL data; it states no equivalence characterizing arbitrary two-time channel families.'),
'iff-reverse':('not_applicable','No inference from a channel propagator to continuous jump matrices is claimed; the final scope sentence expressly refrains from a semigroup law for varying generators.'),
'nonempty-choice':('checked','Step 1.1 recursively defines D_n by integrals, and step 1.2 uses the explicit uniform partition t_j=s+j(t−s)/n; no arbitrary choice of partitions or generators occurs.')},
 'cex-qsm-dt-damping-entropy':{
'empty':('checked','Step 1.1 exhibits two specified 2×2 Kraus matrices with adjoint-square sum I_2, and step 2.1 uses rho_0=I_2/2; this witness has neither an empty matrix space nor an empty Kraus family.'),
'one':('checked','The counterexample uses dimension two in step 1.1. In dimension one a trace-one density is the scalar 1 and its entropy is zero, so strict entropy decrease cannot supply this witness.'),
'degenerate':('checked','Step 1.1 requires gamma,t>0, yielding 0<e^(−gamma t)<1; step 2.1 then has p in (0,1/2) and P≠Q. At zero damping or zero elapsed time that strict KL comparison would vanish.'),
'endpoints':('checked','The witness in step 1.1 is at finite t>0, excluding the identity endpoint t=0. Step 2.1 never needs the t→infinity limit or a logarithm of a zero output eigenvalue.'),
'iff-forward':('not_applicable','Statement refuted is universal entropy monotonicity for channels, rather than a biconditional; step 2.1 disproves it with one strict reverse entropy inequality.'),
'iff-reverse':('not_applicable','The exhibited amplitude-damping channel refutes the universal assertion; it does not classify channels from their entropy behavior in a converse direction.'),
'nonempty-choice':('checked','Given and A1 explicitly retain full AC for the KL nonnegativity/equality supplier F5 used in step 2.1; the two Kraus matrices themselves are explicitly constructed.')},
 'cex-qsm-dt-transpose-not-cp':{
'empty':('checked','Given fixes C² and step 2.1 uses its four matrix units to form the Choi swap; no empty space or missing tensor factor is used.'),
'one':('checked','Step 2.1 needs the nonzero antisymmetric vector (|01>−|10>)/sqrt(2) in two qubits. Scalar transpose is the identity, so dimension one is not this counterexample.'),
'degenerate':('checked','Step 1.1 factors every positive semidefinite X as YY*, including singular X; step 2.1 finds the explicit negative Choi eigenvalue −1, rather than relying on strict input positivity.'),
'endpoints':('not_applicable','Transpose and its swap Choi matrix are fixed linear operators; the negative eigenvector test in step 2.1 involves no evolving or limiting parameter.'),
'iff-forward':('not_applicable','The refuted assertion is the implication positive and trace-preserving implies completely positive; positivity is verified and its purported consequence fails.'),
'iff-reverse':('not_applicable','No converse to that implication is challenged: complete positivity implies ordinary positivity by r=1, while the constructed transpose fails the forward implication.'),
'nonempty-choice':('checked','Step 2.1 supplies eta explicitly and step 1.1 uses a finite positive square root; neither construction invokes an arbitrary family of nonempty sets.')},
 'cex-qsm-dt-correlated-marginal':{
'empty':('checked','Given supplies two qubit factors; step 1.1 explicitly normalizes two Bell vectors and obtains the trace-one marginal I_2/2, ruling out an empty or unnormalized witness.'),
'one':('checked','The distinct outputs in step 2.1 require the two system basis labels and a two-level environment. A one-dimensional system has only one density, so these two output coherences would not exist.'),
'degenerate':('checked','Step 1.1 uses rank-one joint densities with the same full-rank marginal; their singularity is allowed. Step 2.1 gives unequal output entries +1/2 and −1/2 under the same basis permutation.'),
'endpoints':('not_applicable','The example fixes a single CNOT unitary and two joint preparations; no duration, endpoint, or limiting bath parameter enters the witness.'),
'iff-forward':('not_applicable','The universal assertion concerns determination of the final marginal from the initial marginal; two explicit inputs disprove determination, without an equivalence to test.'),
'iff-reverse':('not_applicable','No reconstruction of a joint preparation from its output marginal is asserted; step 2.1 distinguishes outputs for equal initial marginals only.'),
'nonempty-choice':('checked','Steps 1.1–2.1 explicitly specify both Bell vectors, the CNOT basis permutation, and both output coherences; the witness requires no selection principle.')},
 'cex-qsm-dt-finite-bath-memory':{
'empty':('checked','Step 1.1 fixes both factors as C² and sigma_E=I_2/2, with two environment eigenstates of weights 1/2; the finite bath is normalized and nonempty.'),
'one':('checked','Step 2.1 distinguishes |+> and |−> in a two-level system. A one-dimensional bath would leave a unitary system group and could not realize this two-sector dephasing witness.'),
'degenerate':('checked','Step 1.1 takes g>0 so tau=pi/(4g) in step 2.1 is defined. At g=0 the interaction vanishes and the reduced identity family would satisfy the semigroup law.'),
'endpoints':('checked','Step 2.1 compares the finite positive times tau and 2tau, where c(tau)=0 and c(2tau)=−1. It refutes the law away from t=0 and uses no long-time limit.'),
'iff-forward':('not_applicable','The statement refuted is universal semigroup composition for reduced-unitary families; the single unequal composition at tau supplies its negation, not an equivalence.'),
'iff-reverse':('not_applicable','The witness does not claim that all semigroups admit this finite-bath construction; only the proposed implication from such a construction to a semigroup is disproved.'),
'nonempty-choice':('checked','The Hamiltonian hbar*g*Z⊗Z, mixed bath, test density and time tau are explicitly fixed in steps 1.1–2.1; no unspecified family of witnesses is selected.')},
 'thm-qsm-dt-detailed-balance-gap':{
'empty':('checked','Step 1.1 separates d=1, when M_0={0} and no gamma is defined. Step 3.1 uses d>1 to ensure the centered eigenvalue list defining gamma is finite and nonempty.'),
'iff-forward':('not_applicable','The kernel assumption ker D=C I implies the stated relaxation and resolvent conclusions; the theorem does not state equivalence between a gap and detailed balance.'),
'iff-reverse':('not_applicable','No converse derives dissipative GNS symmetry or the kernel hypothesis from exponential decay; steps 3.1–7.1 use those assumptions in the forward estimates.'),
'nonempty-choice':('checked','Step 3.1 takes a minimum of a finite nonempty eigenvalue list for d>1; step 1.1 treats d=1 separately, so no choice from an empty spectral set is needed.')},
 'thm-qsm-dt-gibbs-jump':{
'empty':('checked','Statement fixes E={1,...,d} with d≥2; step 1.1 sums strictly positive Gibbs weights, and step 3.1 obtains r_a>0 from connectivity, excluding an edgeless graph.'),
'endpoints':('checked','Statement assumes finite energies and beta>0, with no zero-temperature beta→infinity limit. Step 1.1 obtains strictly positive finite Gibbs weights; its finite semigroup includes time zero through F2.'),
'iff-forward':('not_applicable','Connected Gibbs rates are sufficient hypotheses for the GNS symmetry and gap conclusions; the statement does not characterize all detailed-balance generators by rank-one Gibbs jumps.'),
'iff-reverse':('not_applicable','Step 4.1 applies the generic gap theorem after checking its premises; it asserts no converse that an arbitrary gapped generator has this particular energy-resolved form.')},
 'thm-qsm-dt-commuting-kl':{
'empty':('checked','The inherited Gibbs set has d≥2 and all pi_a>0. Step 1.1 chooses an initially positive component because the finite probability vector sums to one; its support cannot be empty.'),
'nonempty-choice':('checked','Step 1.1 selects one positive component of a finite probability vector and finite positive-rate paths in a finite connected graph; these finite selections introduce no full AC premise.')},
 'thm-qsm-dt-open-correlation-integral':{
'empty':('checked','Statement imposes d>1, so the centered matrix space has positive dimension. In step 2.1 polarization on an empty finite list yields the empty matrix with vacuous positive-semidefinite condition, while no spectral minimum over an empty list is taken.'),
'iff-forward':('not_applicable','The correlation and resolvent identities follow from the assumed gap; the statement does not assert an equivalence between absolute integrability and a positive dissipator gap.'),
'iff-reverse':('not_applicable','Step 2.1 proves nonnegativity of Gamma using −D≥gamma I, without inferring that hypothesis from a nonnegative correlation coefficient.'),
'nonempty-choice':('checked','Steps 1.1–1.2 define Y by a convergent finite-dimensional integral and uniquely invert −G on M_0; no independent selection of inverse images or spectral representatives is needed.')},
 'thm-qsm-dt-open-kubo':{
'empty':('checked','Statement assumes d>1 and a finite interval [0,T]. Step 1.1 has zero integrals at t=0, giving zero first-order response; it never presumes a positive integration length.'),
'iff-forward':('not_applicable','The response formula follows from a fixed dissipator and a Hamiltonian perturbation of a stationary preparation; it is not a characterization of all response kernels.'),
'iff-reverse':('not_applicable','The exponential kernel bound in step 3.1 does not reconstruct GKSL dynamics or a bath from a kernel; the gap and faithful state remain given hypotheses.'),
'nonempty-choice':('checked','Step 1.1 uses the unique propagator from F2, and step 3.1 uses the smallest eigenvalue of a specified finite faithful density; no arbitrary selection of states or solutions is involved.')},
 'thm-qsm-dt-monitored-transport':{
'empty':('checked','The connected Gibbs supplier has at least two labels and positive pi. Step 2.1 integrates over [0,T]², which has zero area when T=0, giving Y_0=0 and zero variance; the asymptotic ratio is used only as T→infinity.'),
'iff-forward':('not_applicable','The statement derives a selected record model variance coefficient from its Markov path law; it does not characterize all quantum records by that coefficient.'),
'iff-reverse':('not_applicable','Step 3.1 identifies the limit by dominated convergence and a finite resolvent, without inferring a Markov path law or a central-limit theorem from existence of the limit.')},
 'def-qsm-dt-gns-detailed-balance':{
'empty':('checked','Definition fixes d≥1 and a faithful trace-one sigma, while permitting m=0 jumps. Step 3.1 cancels the dissipator term by term; for an empty list D=0 and D(I)=0 still holds.')},
 'def-qsm-dt-monitored-chain':{
'empty':('checked','The inherited connected Gibbs data have d≥2 and r_a>0. Steps 1.1–1.2 thus give nonzero total waiting rate at each label; absent individual edges contribute zero jump probability rather than an empty state set.')}
}
seed=json.loads((base/'boundary-qsm.json').read_text())
selected=[i for i in seed['items'] if i['batch'] in (48,49)]
assert {i['id'] for i in selected}==set(R)
for item in selected:assert set(item['cases'])==set(R[item['id']]),item['id']
report=[]
for batch in (48,49):
 p=pathlib.Path(f'research/physics-remaining-80-2026-10-17-batch-{batch}.proof-contracts.json');raw=p.read_bytes();d=json.loads(raw);old=copy.deepcopy(d)
 dest=base/'boundary-format-48-49-before'/p;dest.parent.mkdir(parents=True,exist_ok=True);assert not dest.exists();dest.write_bytes(raw)
 for item in selected:
  if item['batch']!=batch:continue
  id=item['id'];by={v['case']:v for v in d['contracts'][id]['boundaries']}
  source=pathlib.Path(f'items/{id}.md');sp=base/'boundary-format-48-49-before'/source;sp.parent.mkdir(parents=True,exist_ok=True);sp.write_bytes(source.read_bytes())
  for case,(status,text) in R[id].items():
   row=by[case];before=copy.deepcopy(row);row.clear();row.update({'case':case,'status':status,'evidence' if status=='checked' else 'reason':text})
   report.append({'id':id,'batch':batch,'case':case,'before':before,'after':copy.deepcopy(row),'source_sha256':hashlib.sha256(source.read_bytes()).hexdigest()})
 # Guard every unrelated field and contract entry.
 for id in old['contracts']:
  a=copy.deepcopy(old['contracts'][id]);n=copy.deepcopy(d['contracts'][id]);a.pop('boundaries',None);n.pop('boundaries',None);assert a==n
  if id not in R:assert old['contracts'][id]==d['contracts'][id]
 assert json.loads(p.read_bytes())==old
 p.write_text(json.dumps(d,indent=2)+'\n')
(base/'boundary-format-48-49-report.json').write_text(json.dumps(report,indent=2)+'\n')
print(f'Reviewed and repaired {len(report)} named rows across {len(selected)} items; only boundaries changed.')
