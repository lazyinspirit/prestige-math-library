---
id: lem-cft-r5-gko-stress-tensor-coset-virasoro
kind: lemma
title: Sugawara embeddings give a Virasoro coset stress tensor
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps:
  - def-sugawara-modes
  - def-positive-energy-affine-module
  - def-untwisted-affine-central-extension
  - def-dual-coxeter-number-for-normalized-form
  - lem-sugawara-modes-act-on-currents
  - thm-sugawara-modes-satisfy-virasoro
dependency_roles:
  def-sugawara-modes: mathematical-premise
  def-positive-energy-affine-module: mathematical-premise
  def-untwisted-affine-central-extension: mathematical-premise
  def-dual-coxeter-number-for-normalized-form: mathematical-premise
  lem-sugawara-modes-act-on-currents: mathematical-premise
  thm-sugawara-modes-satisfy-virasoro: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Lorenz Eberhardt, Wess-Zumino-Witten Models, YRISW PhD School in Vienna (2019)
      url: https://conf.itp.phys.ethz.ch/esi-school/Lecture_notes/WZW%20models.pdf
      locator: "§4.1, printed pp. 31–33: the GKO stress tensor, its current commutant, and central-charge subtraction."
    - title: Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures (1988; published 1989), arXiv:hep-th/9108028v1
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: "§9.5, printed pp. 152–155, equations (9.39)–(9.43): the coset stress tensor and branching decomposition."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $r\ge1$ and let $\mathfrak g=\bigoplus_{i=1}^r\mathfrak g_i$ be a finite direct sum of finite-dimensional complex simple Lie algebras with invariant forms $B_i$ normalized so long roots have square $2$. Let $\mathfrak h$ be a finite-dimensional complex simple Lie algebra with the same normalization, and let $\iota:\mathfrak h\to\mathfrak g$ be an injective Lie algebra homomorphism with components $\iota_i:\mathfrak h\to\mathfrak g_i$. Supply scalars $I_i\in\mathbb C$ satisfying $B_i(\iota_i x,\iota_i y)=I_iB_{\mathfrak h}(x,y)$ for every $x,y\in\mathfrak h$, and levels $k_i\in\mathbb C$. Put $\ell=\sum_i I_i k_i$.

Suppose a common vector space $V$ carries mutually commuting restricted affine-current actions of the $\mathfrak g_i$ at levels $k_i$, and the induced $\mathfrak h$ current action $J^{\mathfrak h}_x(n)=\sum_iJ^{(i)}_{\iota_i x}(n)$ is restricted at level $\ell$. Assume $k_i+h_i^\vee\ne0$ for each $i$ and $\ell+h_{\mathfrak h}^\vee\ne0$. Use the Sugawara modes $L^{(i)}_n$ and $L^{\mathfrak h}_n$ of the cited definitions, and set $L^{\mathfrak g}_n=\sum_iL^{(i)}_n$. Then $L^{\mathfrak g/\mathfrak h}_n:=L^{\mathfrak g}_n-L^{\mathfrak h}_n$ is a Virasoro representation on $V$, commutes with every embedded $\mathfrak h$ current mode and every $L^{\mathfrak h}_n$, and has central charge
$$c_{\mathfrak g/\mathfrak h}=\sum_{i=1}^r\frac{k_i\dim\mathfrak g_i}{k_i+h_i^\vee}-\frac{\ell\dim\mathfrak h}{\ell+h_{\mathfrak h}^\vee}.$$

## Statement references

[[def-sugawara-modes]]

[[def-positive-energy-affine-module]]

[[def-untwisted-affine-central-extension]]

[[def-dual-coxeter-number-for-normalized-form]]

[[lem-sugawara-modes-act-on-currents]]

[[thm-sugawara-modes-satisfy-virasoro]]

## Facts & Assumptions

**Given:** The simple factors, invariant forms, embedding and indices, levels, and common restricted module in the Statement.

[A1] The affine actions of distinct $\mathfrak g_i$ factors commute, and each component $\iota_i$ preserves brackets.

[F1] [[def-sugawara-modes]]: with $q=k+h^\vee\ne0$, $L_n=(2q)^{-1}\sum_{a,r}:J_{e_a}(r)J_{e_a}(n-r):$, where the split is $r<0$ versus $r\ge0$ and each sum is locally finite on restricted modules.

[F2] [[def-positive-energy-affine-module]]: on a restricted affine-current module, for every vector and fixed current, all sufficiently large positive modes annihilate that vector.

[F3] [[def-untwisted-affine-central-extension]]: $[J_x(s),J_y(t)]=J_{[x,y]}(s+t)+skB(x,y)\delta_{s+t,0}I$.

[F4] [[def-dual-coxeter-number-for-normalized-form]]: $h^\vee=\gamma_B/2$, where the adjoint Casimir for the normalized form acts by $\gamma_B I$.

[F5] [[lem-sugawara-modes-act-on-currents]]: on every restricted module at noncritical level, $[L_m,J_x(n)]=-nJ_x(m+n)$.

[F6] [[thm-sugawara-modes-satisfy-virasoro]]: on every restricted affine-current module at noncritical level, the Sugawara modes satisfy the Virasoro relation with $c=k\dim\mathfrak g/(k+h^\vee)$.

## Proof

1.1 For $x,y\in\mathfrak h$, the induced current bracket is the sum of the brackets in each simple factor. Since each $\iota_i$ preserves brackets and distinct factors commute, $[J^{\mathfrak h}_x(s),J^{\mathfrak h}_y(t)]=J^{\mathfrak h}_{[x,y]}(s+t)+s(\sum_i I_i k_i)B_{\mathfrak h}(x,y)\delta_{s+t,0}I$. Thus the induced level is $\ell$. [A1, F3, given, algebra]

1.2 Apply [F6] to every $\mathfrak g_i$ action and to the restricted $\mathfrak h$ action, using the noncritical assumptions and the normalization [F4]. This gives each factor and denominator their Sugawara Virasoro brackets and central charges $c_i=k_i\dim\mathfrak g_i/(k_i+h_i^\vee)$ and $c_{\mathfrak h}=\ell\dim\mathfrak h/(\ell+h_{\mathfrak h}^\vee)$. [F2, F4, F6, given]

2.1 By [A1], modes from distinct numerator factors commute. Adding their Virasoro brackets from step 1.2 shows that $L^{\mathfrak g}=\sum_iL^{(i)}$ is Virasoro with $c_{\mathfrak g}=\sum_i c_i$. [A1, step 1.2, algebra]

2.2 Applying [F5] to each numerator action and to the induced restricted denominator action gives $[L^{\mathfrak g}_m,J^{\mathfrak h}_x(n)]=-nJ^{\mathfrak h}_x(m+n)$ and $[L^{\mathfrak h}_m,J^{\mathfrak h}_x(n)]=-nJ^{\mathfrak h}_x(m+n)$. The other-factor commutators vanish by [A1], so summing the component identities gives the numerator formula; the denominator identity uses its level $\ell$ from step 1.1. [A1, F2, F5, step 1.1, algebra]

3.1 Subtract the two current-action identities from step 2.2. For every $x\in\mathfrak h$ and $m,n\in\mathbb Z$, this gives $[L^{\mathfrak g/\mathfrak h}_m,J^{\mathfrak h}_x(n)]=0$. [step 2.2, algebra]

3.2 Put $q_{\mathfrak h}=\ell+h_{\mathfrak h}^\vee$, let $(e_a)$ be a $B_{\mathfrak h}$-orthonormal basis, and write $N_r(A,B)=AB$ for $r<0$ and $N_r(A,B)=BA$ for $r\ge0$. The product rule and the current action in step 2.2 give
$$2q_{\mathfrak h}[L^{\mathfrak g}_m,L^{\mathfrak h}_n]=\sum_{a,r}\left(-rN_r(J^{\mathfrak h}_{e_a}(m+r),J^{\mathfrak h}_{e_a}(n-r))-(n-r)N_r(J^{\mathfrak h}_{e_a}(r),J^{\mathfrak h}_{e_a}(m+n-r))\right).$$
This identity is valid on each vector: the original sums stabilize by [F1], and restrictedness [F2] kills both tails after the commutator expansion. [F1, F2, F5, step 2.2, algebra, choose]

4.1 Set $p=m+n$, reindex the first sum by $s=m+r$, and combine terms with the same normal order $N_s$. Their coefficient is $(m-s)-(n-s)=m-n$, giving $2q_{\mathfrak h}(m-n)L^{\mathfrak h}_p$. The only order correction is $\sum_s(m-s)f_m(s)\sum_a[J^{\mathfrak h}_{e_a}(s),J^{\mathfrak h}_{e_a}(p-s)]$, where $f_m(s)=\mathbf1_{s<m}-\mathbf1_{s<0}$. This sum is finite because $f_m$ is supported between $0$ and $m$. [F1, step 3.2, algebra]

5.1 By step 1.1 and orthonormality, $\sum_a[J^{\mathfrak h}_{e_a}(s),J^{\mathfrak h}_{e_a}(p-s)]=s\ell\,\dim(\mathfrak h)\delta_{p,0}I$, since $[e_a,e_a]=0$. For $m>0$, $\sum_s s(m-s)f_m(s)=\sum_{s=0}^{m-1}s(m-s)=(m^3-m)/6$. For $m=-u<0$, substituting $s=-t$ gives $-\sum_{t=1}^u t(u-t)=-(u^3-u)/6=(m^3-m)/6$; for $m=0$ the sum is zero. [A1, F3, step 1.1, step 4.1, algebra]

6.1 Substituting step 5.1 into step 4.1 and dividing by $2q_{\mathfrak h}\ne0$ yields $[L^{\mathfrak g}_m,L^{\mathfrak h}_n]=(m-n)L^{\mathfrak h}_{m+n}+\frac{c_{\mathfrak h}}{12}(m^3-m)\delta_{m+n,0}I$, using the value of $c_{\mathfrak h}$ from step 1.2. Antisymmetry gives the same mixed bracket for $[L^{\mathfrak h}_m,L^{\mathfrak g}_n]$. [given, step 1.2, step 4.1, step 5.1, algebra]

7.1 Step 6.1 is exactly the Virasoro bracket of $L^{\mathfrak h}$ from step 1.2, so subtraction gives $[L^{\mathfrak g/\mathfrak h}_m,L^{\mathfrak h}_n]=0$ for all $m,n$. [step 1.2, step 6.1, algebra]

8.1 Expand $[L^{\mathfrak g}_m-L^{\mathfrak h}_m,L^{\mathfrak g}_n-L^{\mathfrak h}_n]$. The two mixed brackets from step 6.1 subtract twice the $\mathfrak h$ bracket, while the separate $\mathfrak h$ Virasoro bracket from step 1.2 adds it once. The result is $(m-n)(L^{\mathfrak g}_{m+n}-L^{\mathfrak h}_{m+n})+\frac{c_{\mathfrak g}-c_{\mathfrak h}}{12}(m^3-m)\delta_{m+n,0}I$, which is the claimed Virasoro relation and central charge. [step 1.2, step 2.1, step 6.1, algebra] ∎

## Remarks

This is a conditional algebraic statement. Its application requires the exact restricted-module and noncritical-level hypotheses above; it proves no existence, positivity, full left–right pairing, modular invariance, or physical realization.
