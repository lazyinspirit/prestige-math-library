---
id: lem-bicosimplicial-derived-total-complex-agrees-with-diagonal-totalization
kind: lemma
title: "Bicosimplicial total complexes agree with diagonal totalization"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [lem-simplicial-normalization-prism-and-trivial-fibration-criterion, prop-sum-and-product-totalisations-agree-on-finite-diagonal-double-complexes, def-direct-sum-total-complex-of-a-double-complex, def-chain-complex-in-an-abelian-category]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "D. Dugger, S. Hollander, D. C. Isaksen, Hypercovers and simplicial presheaves, Mathematical Proceedings of the Cambridge Philosophical Society 136 (2004), complete arXiv full text; Appendix A read at the cited pages."
      url: "https://arxiv.org/pdf/math/0205027"
    - title: "The Stacks Project, Simplicial Methods (Chapter 0G6Z), complete PDF; normalization, simplex and prism identities are read at the cited sections."
      url: "https://stacks.math.columbia.edu/download/simplicial.pdf"
---


## Statement

For a bicosimplicial complex $K^{p,r,q}$ of modules over a commutative ring, with $p,r\geq0$ and one fixed lower bound $q\geq a$, the alternating-face total complex and the diagonal alternating-face total complex are naturally chain-homotopy equivalent:
$$\operatorname{Tot}_{p,r,q}K^{p,r,q}\simeq\operatorname{Tot}_{n,q}K^{n,n,q}.$$
On the left total degree is $p+r+q$ and differential is $\delta_h+(-1)^p\delta_v+(-1)^{p+r}d$; on the right total degree is $n+q$ and differential is $\delta_{\mathrm{diag}}+(-1)^nd$. These comparisons preserve augmentation and apply to coherent derived diagrams after a supplied functorial strict resolution. They require no dimensional finiteness of the coefficient modules and no choice principle. Normalization can be applied on either side without changing the conclusion.

## Facts & Assumptions

**Given:** $K^{p,r,q}=0$ unless $p,r\geq0$ and $q\geq a$. Horizontal cofaces $d_h^i:K^{p,r,q}\to K^{p+1,r,q}$ and codegeneracies $s_h^i:K^{p,r,q}\to K^{p-1,r,q}$, and the analogous vertical operators, satisfy the cosimplicial identities and commute between directions. The internal differential raises $q$ by one, squares to zero and commutes with these operators. The three $\delta$'s are the corresponding alternating coface sums. The auxiliary bisimplicial modules in steps 1.1–4.1 instead have faces lowering degree and degeneracies raising it; step 5.1 reverses their universal operator formulas.

[F1] [[lem-simplicial-normalization-prism-and-trivial-fibration-criterion]] proves the natural chain homotopy equivalence of normalized and unnormalized Moore complexes and constructs the prism chain homotopy induced by a simplicial-set homotopy.

[F2] [[prop-sum-and-product-totalisations-agree-on-finite-diagonal-double-complexes]] identifies the direct-sum and product totalisations of a double complex with finitely many nonzero objects on each diagonal.

[F3] [[def-direct-sum-total-complex-of-a-double-complex]] supplies the direct-sum total complex with its injection-indexed differential.

[F4] [[def-chain-complex-in-an-abelian-category]] fixes the chain-complex and differential conventions used below.

## Proof

**Proof technique:** direct.

1.1 Universal models and contractions. For a bisimplicial $R$-module $M$, let $Q_{p,r}$ have value $R[\Delta([u],[p])\times\Delta([v],[r])]$ at $(u,v)$. An element $x\in M_{p,r}$ determines the unique map $Q_{p,r}\to M$ sending the universal generator to $x$. The diagonal chain complex of $Q_{p,r}$ consists of pairs of monotone vertex strings; define $h$ on each basis string by prepending $(0,0)$. Deleting the first vertex gives the original string, and every other deletion commutes with prepending with its index reduced by one. Thus $\partial h+h\partial=1-e$, where $e$ sends every degree-zero vertex to $(0,0)$ and is zero in positive degrees. On the double total, identified with $C_*(\Delta[p];R)\otimes_R C_*(\Delta[r];R)$, use the separate prepend-zero contractions $h_p,h_r$ and projectors $e_p,e_r$. For homogeneous $x$, set $H(x\otimes y)=h_p(x)\otimes y+(-1)^{|x|}e_p(x)\otimes h_r(y)$. The Koszul differential gives $\partial H+H\partial=(1-e_p)\otimes1+e_p\otimes(1-e_r)=1-e_p\otimes e_r$. These contractions fill every positive-degree cycle and every augmentation-zero degree-zero cycle by specified finite chains. Unlike a constant simplicial map on unnormalized chains, $e$ is supported only in degree zero. [F3, F4, construct, algebra]

2.1 Diagonal-to-total comparison. Put $\operatorname{Diag}_m(M)=M_{m,m}$ and $\operatorname{Tot}_m(M)=\bigoplus_{p+r=m}M_{p,r}$ with the Koszul boundary. Set $\varphi_0=1$. Inductively evaluate $\varphi_{m-1}\partial z$ on the universal generator $z$ of $Q_{m,m}$, and fill it using the total contraction of step 1.1. It is a cycle because $\partial\varphi_{m-1}=\varphi_{m-2}\partial$; when $m=1$, it is the difference of the two endpoint vertices and has augmentation zero. Evaluate that specified filling under the representing map for each $x\in M_{m,m}$ to define $\varphi_m(x)$. This is linear and natural, and its boundary is $\varphi_{m-1}\partial x$. Thus $\varphi$ is a natural chain map, given degreewise by finite linear combinations of structure operators. [step 1.1, construct]

3.1 Total-to-diagonal comparison. Set $\psi_0=1$. For each summand $M_{p,r}$ in total degree $m=p+r>0$, evaluate $\psi_{m-1}\partial z$ on the universal generator of $Q_{p,r}$ and fill it with the diagonal contraction of step 1.1. The induction hypothesis makes it a cycle; in degree $m=1$ its two endpoint coefficients cancel. Evaluate the filling under the representing map of each element of $M_{p,r}$ and sum over $p+r=m$. This defines a linear natural chain map $\psi$, again by specified finite operator formulas. [step 1.1, step 2.1, construct]

4.1 Homotopy inverses. Let $C,C'$ each be the diagonal or total chain functor, and let $f,g:C\to C'$ be natural chain maps with $f_0=g_0$. Set $h_0=0$. For $m\geq1$, on a universal generator $z$ of a representing summand of $C_m$, put $\beta_m=(f_m-g_m)(z)-h_{m-1}(\partial z)$. The previously established equation $\partial h_{m-1}+h_{m-2}\partial=f_{m-1}-g_{m-1}$ makes $\partial\beta_m=0$. This cycle has positive degree, so its specified model contraction gives $h_m(z)$ with $\partial h_m(z)=\beta_m$. Extend by representing maps. Then $\partial h+h\partial=f-g$. Apply this to $\psi\varphi$ and $1$ on the diagonal, and to $\varphi\psi$ and $1$ on the total; both composites are the identity in degree zero. The resulting natural homotopies have finite operator formulas. [step 1.1, step 2.1, step 3.1, construct]

5.1 Cosimplicial variance and the internal differential. The maps and homotopies of steps 2.1–4.1 are finite linear combinations of morphisms in the simplex categories. Their identities can be tested on the free representables of step 1.1, so they are universal additive operator identities. Reverse every operator and every composition to obtain cochain maps in the opposite directions and cochain homotopies lowering simplicial total degree by one. This reverses the two homotopy-inverse identities, without taking algebraic duals. Apply these formulas in each internal degree $q$. Naturality makes them commute with $d$. A comparison preserves simplicial total degree $t=p+r=n$, so it commutes with the signed internal differential $(-1)^td$. For a homotopy $H$ lowering $t$ by one, the internal terms in $DH+HD$ are $(-1)^{t-1}dH+(-1)^tHd=0$. Hence the comparisons and homotopies apply to precisely the two cochain differentials in the Statement. [step 2.1, step 3.1, step 4.1, algebra]

6.1 Finiteness, normalization, augmentation and derived presentations. In total degree $m$ the indices satisfy $p+r\leq m-a$ on the full total and $n\leq m-a$ on the diagonal. Thus only finitely many coefficient terms occur, and [F2] permits sum or product notation without dimensional hypotheses. All fillings above are specified finite formulas, so no choice principle is used. The degree-zero comparisons are identities and the homotopies have zero augmentation component, so they preserve augmentation. The natural normalization equivalence and homotopy of [F1] are also finite operator identities; reversing them gives the cosimplicial normalization equivalence. Applying these equivalences in either direction or on the diagonal permits normalization on either side. Finally, a supplied functorial strict resolution presents the coherent derived diagram. Naturality makes the comparisons compatible with quasi-isomorphisms between such presentations, hence gives the same derived comparison under the canonical presentation identifications. [F1, F2, step 2.1, step 3.1, step 4.1, step 5.1] ∎
