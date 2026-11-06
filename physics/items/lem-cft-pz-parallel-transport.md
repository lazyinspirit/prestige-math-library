---
id: lem-cft-pz-parallel-transport
kind: lemma
title: Logarithmic reconstruction and parallel transport of P(z)-products
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - thm-riemann-surface-of-the-logarithm
  - thm-path-lifting-for-covering-maps
  - cor-lifted-path-endpoints-depend-only-on-path-homotopy
  - def-cft-pz-tensor-product
  - def-cft-pz-intertwining-map
  - def-cft-logarithmic-intertwining-operator
  - def-cft-hlz-strongly-graded-generalized-module
dependency_roles:
  thm-riemann-surface-of-the-logarithm: mathematical-premise
  thm-path-lifting-for-covering-maps: mathematical-premise
  cor-lifted-path-endpoints-depend-only-on-path-homotopy: mathematical-premise
  def-cft-pz-tensor-product: mathematical-premise
  def-cft-pz-intertwining-map: mathematical-premise
  def-cft-logarithmic-intertwining-operator: mathematical-premise
  def-cft-hlz-strongly-graded-generalized-module: mathematical-premise
sources:
  references:
    - title: "Huang, Lepowsky and Zhang, Part VIII, §12.2, parallel transport; logarithmic reconstruction uses the L(0)-conjugation formula"
      url: https://arxiv.org/pdf/1110.1931v2
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 4
---

## Statement

Let $\mathcal C$ be a full category of strongly graded generalized modules over a strongly graded Möbius or conformal vertex algebra. Assume every object's nilpotent part of $L(0)$ has a finite nilpotence exponent. Fix $z\ne0$ and a logarithm $\ell$ of $z$. A $P(z)$-intertwining map $I:W_1\otimes W_2\to\overline{W_3}$ determines a unique logarithmic intertwining operator whose evaluation at $\log x=\ell$ is $I$. Its explicit formula, interpreted in each output generalized weight, is
$$\mathcal Y_I(w,x)v=e^{aL(0)}I(e^{-aL(0)}w\otimes e^{-aL(0)}v),\qquad a=\log x-\ell.$$
A $P(z_0)$-tensor product at one nonzero point gives a $P(z)$-tensor product at every nonzero point, using the same representing object and a reconstructed universal map. For every point $z$ under consideration, fix a logarithm $\ell_z$ and a chosen representing product $(W_1\boxtimes_zW_2,\iota_z)$. For a path $\gamma:z_1\to z_2$ in $\mathbb C^\times$, lift the reversed path $\gamma^{-1}$ through $\exp:\mathbb C\to\mathbb C^\times$ starting at $\ell_{z_2}$, and denote its terminal value by $\ell_\gamma(z_1)$. The natural module isomorphism $T_\gamma:W_1\boxtimes_{z_1}W_2\to W_1\boxtimes_{z_2}W_2$ is the unique map satisfying
$$\overline{T_\gamma}\,\iota_{z_1}=\mathcal Y_{\iota_{z_2}}\big|_{\log x=\ell_\gamma(z_1)}.$$
Transport depends only on endpoint-fixed homotopy with these endpoint logarithms fixed, has identity transport on constant paths, and satisfies $T_{\eta*\gamma}=T_\eta\circ T_\gamma$ and $T_{\gamma^{-1}}=T_\gamma^{-1}$. Here $\eta*\gamma$ means first traverse $\gamma:z_1\to z_2$, then $\eta:z_2\to z_3$. No products of two intertwiners or their convergence are asserted.

## Statement references

[[def-cft-pz-tensor-product]]

[[def-cft-pz-intertwining-map]]

[[def-cft-logarithmic-intertwining-operator]]

[[def-cft-hlz-strongly-graded-generalized-module]]

[[thm-riemann-surface-of-the-logarithm]]

[[thm-path-lifting-for-covering-maps]]

[[cor-lifted-path-endpoints-depend-only-on-path-homotopy]]

## Facts & Assumptions

**Given:** The objects, one fixed logarithm $\ell_z$ and tensor-product universal map $\iota_z$ for every point under consideration. Maps to completions and exponentials are interpreted componentwise.

[F1] [[def-cft-pz-intertwining-map]] gives truncation, $P(z)$-Jacobi and the three $L(j)$ identities, in particular $L(0)I-I(L(0)\otimes1)-I(1\otimes L(0))=zI(L(-1)\otimes1)$.

[F2] [[def-cft-hlz-strongly-graded-generalized-module]] gives $[L(0),L(j)]=-jL(j)$ and $[L(0),v_n]=(\mathrm{wt}(v)-n-1)v_n$. On a generalized weight $h$, $e^{aL(0)}=e^{ah}\sum_{r<K}a^r(L(0)-h)^r/r!$.

[F3] [[def-cft-logarithmic-intertwining-operator]] gives the logarithmic Jacobi, derivative and bracket axioms to check.

[F4] [[def-cft-pz-tensor-product]] gives the representing bijection from module maps out of $W_1\boxtimes_zW_2$ to $P(z)$-maps with those inputs.

[F5] [[thm-riemann-surface-of-the-logarithm]] identifies the complete logarithm germ surface with $\mathbb C$ and its projection with the covering $\exp:\mathbb C\to\mathbb C^\times$.

[F6] [[thm-path-lifting-for-covering-maps]] supplies a unique lift of a continuous path through a covering after its initial point is prescribed. Applied to a reversed path and the fixed logarithm $\ell_{z_2}$, this supplies its unique backwards logarithmic lift.

[F7] [[cor-lifted-path-endpoints-depend-only-on-path-homotopy]] says that endpoint-fixed homotopic base paths, lifted from the same point through a covering, have equal terminal lift points. Its proof uses the homotopy-lifting theorem already in its declared prerequisites.

## Proof

1.1 For homogeneous generalized-weight inputs, project the formula to output weight $h_3$. F2 expresses it as $x^{h_3-h_1-h_2}$ times a finite polynomial in $\log x$ with coefficients in $W_{3,[h_3]}$. Its logarithmic degree is at most $K_{W_1}+K_{W_2}+K_{W_3}-3$. For fixed input vectors the finitely many nilpotent powers appearing on the inputs permit a common truncation bound in each integer weight string by F1. Thus the formula has precisely the truncation and grading compatibility of F3. Its evaluation at $a=0$ is $I$. [given, F1, F2, F3, algebra]

2.1 The mode bracket in F2 gives $e^{aL(0)}Y(v,t)e^{-aL(0)}=Y(e^{aL(0)}v,e^at)$, coefficient by coefficient. Apply $P(z)$-Jacobi for $I$ to the inputs $e^{-aL(0)}w,e^{-aL(0)}v$, the algebra state $e^{-aL(0)}u$, and variables $e^{-a}x_0,e^{-a}x_1$, and conjugate the output by $e^{aL(0)}$. Cancelling the common scalar $e^a$ in the three delta prefactors changes the fixed insertion to $e^az=x$; for example the first delta becomes $x_0^{-1}\delta((x_1-x)/x_0)$. The algebra-state conjugation changes its inserted field into $Y(u,x_0)$. The other two deltas use the same substitution and unchanged binomial conventions. This is exactly logarithmic intertwiner Jacobi for the displayed formula. The substitutions are identities in formal powers and finite logarithmic polynomials; they do not use analytic convergence. [F1, F2, F3, step 1.1, algebra]

3.1 Differentiate the formula with respect to $a$. F1's $L(0)$ identity gives $\partial_a\mathcal Y_I(w,x)v=z e^{aL(0)}I(L(-1)e^{-aL(0)}w\otimes e^{-aL(0)}v)$. The commutator $[L(0),L(-1)]=L(-1)$ implies $L(-1)e^{-aL(0)}=e^a e^{-aL(0)}L(-1)$, so the right side is $ze^a\mathcal Y_I(L(-1)w,x)v=x\mathcal Y_I(L(-1)w,x)v$. As $\partial_x=x^{-1}\partial_a$ on every output monomial and logarithmic polynomial, this proves the derivative axiom. Similarly $L(j)e^{aL(0)}=e^{aj}e^{aL(0)}L(j)$; conjugating the three brackets of F1 multiplies their $z^i$ terms by $e^{ai}$, producing exactly the $x^i$ terms of F3. All required axioms hold. Conversely F3's $L(0)$ bracket is the same differential equation in $a$ with initial value $I$; on each generalized weight the integrating-factor identity forces the displayed formula. This proves uniqueness. [F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 Evaluation of $\mathcal Y_I$ at any chosen logarithm of $\zeta\ne0$ gives a $P(\zeta)$-map: substitute the logarithm in the identities proved above, keeping the other variables formal. The change $I\mapsto e^{aL(0)}I(e^{-aL(0)}\otimes e^{-aL(0)})$, $a=\ell(\zeta)-\ell(z_0)$, has inverse with $-a$ and commutes with postcomposition by module maps. Thus it is a natural bijection between the two spaces of intertwining maps. Applying that bijection to F4 shows that the same representing object at $z_0$, with the changed universal map, represents the $P(\zeta)$-maps. This proves existence at every nonzero point. For chosen products at $z_1,z_2$, apply F6 to the covering in F5 and the reversed path $\gamma^{-1}$ starting at the chosen logarithm of $z_2$; denote its terminal value by $\ell_\gamma(z_1)$. F4 gives a unique module map $T_\gamma$ with $\overline{T_\gamma}\iota_{z_1}=\mathcal Y_{\iota_{z_2}}|_{\log x=\ell_\gamma(z_1)}$. Because module maps commute with $L(0)$, reconstruction commutes with postcomposition. Thus this equation also proves naturality in both input objects, by applying F4 to the two compositions with the universal map. [F1, F4, F5, F6, step 3.1, construct, algebra]

5.1 To check composition without assuming an analytic connection, use the explicit formula. If $a_{12}=\ell_\gamma(z_1)-\ell_{z_2}$ and $a_{23}=\ell_\eta(z_2)-\ell_{z_3}$, then sequential conjugation by their exponentials equals conjugation by $a_{12}+a_{23}$. Uniqueness of path lifting in F6 identifies this sum with the logarithmic change obtained by lifting $\eta*\gamma$ backwards from $z_3$: lift $\eta$ backwards first, and then lift $\gamma$ with the resulting logarithm, shifting the previously chosen lift by $\ell_\eta(z_2)-\ell_{z_2}\in2\pi i\mathbb Z$. Consequently $\overline{T_\eta\circ T_\gamma}\iota_{z_1}=\overline{T_{\eta*\gamma}}\iota_{z_1}$, and F4 implies equality. The constant path has logarithmic change zero by F6, so its map is the identity; reversing a lifted path gives the unique reverse lift, with opposite change, so both transport compositions are identities. Finally F7 applied to F5's covering and the reversed endpoint-fixed homotopic paths gives equal backwards lift endpoints. The defining equality in step 4.1 and uniqueness in F4 give identical transports. This proves every asserted transport property. [F2, F4, F5, F6, F7, step 4.1, algebra] ∎
