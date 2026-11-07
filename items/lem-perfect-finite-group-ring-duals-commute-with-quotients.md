---
id: lem-perfect-finite-group-ring-duals-commute-with-quotients
kind: lemma
title: Perfect finite group-ring duals commute with quotient base change
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - thm-group-ring-is-a-unital-algebra-with-basis-g
  - def-projective-module
  - def-perfect-complex-over-a-ring
  - def-hom-complex-of-chain-complexes
  - def-derived-tensor-product-in-the-bounded-above-setting
  - thm-projective-complexes-model-the-bounded-above-derived-category
justified_by: []
proof_strategy: direct
axiom_use: AC is assumed for the projective derived-category models; all explicit module formulas use only finite sums.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: The Stacks Project, More on Algebra, Lemma 15.76.15
      url: https://stacks.math.columbia.edu/tag/0656
    - title: Burns, Daoud and Liang, On Non-Noetherian Iwasawa Theory, section 3.2.2
      url: https://arxiv.org/pdf/2401.02946
---

## Statement

Assume AC. Let $S$ be a commutative ring, $\Gamma$ a finite abelian group, $H\leq\Gamma$, $A=S[\Gamma]$, and $B=S[\Gamma/H]$ with quotient $q:A\to B$. Let $C$ be a perfect $A$-complex. Give $D_S(C)=R\operatorname{Hom}_S(C,S)$ the contragredient action $(g\phi)(x)=\phi(g^{-1}x)$. There is a natural isomorphism
$$B\otimes_A^L D_S(C)\ \cong\ D_S(B\otimes_A^L C)$$
in $D(B)$. It is compatible with successive quotient groups and with any change of coefficient ring $S\to T$. Neither $|H|$ nor $|\Gamma|$ need be invertible. The same assertion holds with both duals shifted by $[-2]$.

Consequently, supplied compatible descent isomorphisms $B\otimes_A^L C\cong C'$ between perfect complexes induce compatible descent for their shifted $S$-duals. If a supplied representative of $C$ has finite projective terms only in degrees 1 and 2, its shifted dual has finite projective terms only in degrees 0 and 1. If those two terms have equal ranks at every prime, so do the shifted dual terms. This does not assert perfectness, such a representative, descent, or a Weil–étale identification for any geometric complex.

## Facts & Assumptions

**Given:** AC and the rings, groups, quotient and perfect complex in the Statement. Complexes use cochain degrees, with $E[t]^i=E^{i+t}$.

[F1] The finite group ring has its group basis, multiplication and inverse basis units. [[thm-group-ring-is-a-unital-algebra-with-basis-g]]

[F2] A perfect complex has a bounded finite-projective representative. A projective module lifts maps across surjections. [[def-perfect-complex-over-a-ring]] [[def-projective-module]]

[F3] Bounded projective complexes compute derived tensor and derived Hom out of the complex, and derived morphisms between them have chain representatives up to homotopy under the stated model hypotheses. [[def-derived-tensor-product-in-the-bounded-above-setting]] [[thm-projective-complexes-model-the-bounded-above-derived-category]]

[F4] Hom differentials are $d(f)=d_{\mathrm{target}}f-(-1)^{\deg f}f d_{\mathrm{source}}$, in the cochain reindexing of the Hom-complex convention. [[def-hom-complex-of-chain-complexes]]

[A1] AC is assumed for [F3]. [[def-axiom-of-choice]]

## Proof

1.1 Write $\tau_A:A\to S$ for the coefficient of the identity and $\iota_A(g)=g^{-1}$. For any $A$-module $P$, the maps $f\mapsto\tau_A\circ f$ and $\phi\mapsto\bigl(x\mapsto\sum_{g\in\Gamma}\phi(g^{-1}x)g\bigr)$ are mutually inverse between $\operatorname{Hom}_A(P,A)$ and $\operatorname{Hom}_S(P,S)$. Indeed the latter formula is $A$-linear in $x$ by reindexing $g=ht$ for multiplication by $h$, and $\tau_A(g^{-1}f(x))$ is exactly the coefficient of $g$ in $f(x)$. Under this bijection the contragredient action corresponds to $a\cdot f=\iota_A(a)f$. Denote that twisted module by $\iota_A^*\operatorname{Hom}_A(P,A)$. All sums are finite, and no group order is inverted. [F1, given, construct, algebra]

2.1 A finite projective $P$ is a summand of a finite free module: choose a finite generating surjection $A^m\to P$ and split it by [F2]. Thus $P$ is also projective over $S$, since $A$ is finite free over $S$. Its $A$-linear dual is a summand of $(A^m)^\vee$, hence finite projective over $A$, and twisting by the automorphism $\iota_A$ preserves that property. The natural map $B\otimes_A\operatorname{Hom}_A(P,A)\to\operatorname{Hom}_B(B\otimes_A P,B)$ sends $b\otimes f$ to $(b'\otimes x\mapsto bb'q(f(x)))$. For $P=A^m$ it is an isomorphism by the finite basis calculation; its naturality restricts that isomorphism to the split summand $P$. Since $q\iota_A=\iota_B q$, twisting commutes with scalar extension by the explicit isomorphism $B\otimes_A\iota_A^*N\to\iota_B^*(B\otimes_A N)$, $b\otimes n\mapsto\iota_B(b)\otimes n$. Combining this with step 1.1 gives the desired module comparison for finite projective $P$. [F1, F2, step 1.1, construct, algebra]

3.1 Choose a bounded finite-projective representative $P^\bullet$ for $C$. Its terms are $S$-projective by step 2.1, so $D_S(C)$ is represented by $\operatorname{Hom}_S^\bullet(P^\bullet,S)$ by [F3]. The latter is bounded finite projective over $A$ by steps 1.1–2.1. Likewise $B\otimes_A P^\bullet$ and its $S$-dual compute the derived objects on the right. Apply the module comparison degreewise, in degree $i$ to $P^{-i}$. It commutes with precomposition by the differentials, and hence with the sign $-(-1)^i$ in [F4]. It is therefore an isomorphism of the representing complexes. Naturality for chain maps and homotopies, and [F3], make it independent of the chosen representative and natural in the perfect derived category. This proves the claimed derived isomorphism without assuming $B$ flat over $A$. [F2, F3, F4, A1, step 1.1, step 2.1, construct, algebra]

4.1 For a further quotient $B\to E$, the untwisted map of step 2.1 simply applies the ring homomorphism to the values of $f$. Applying two such maps equals applying their composite. The twisting maps also compose because inversion commutes with each quotient. Thus step 3.1 is compatible with successive quotients. For $S\to T$, split summands of finite free modules and all finite-basis maps in steps 1.1–2.1 commute with coefficient extension; the complex representatives therefore give $T\otimes_S^L D_S(C)\cong D_T(T\otimes_S^L C)$ and commute with the quotient comparison. On the rank-one test $P=A$, a functional with values $c_g=\phi(g)$ is sent under the quotient comparison to the functional on $B$ with values $c'_{\bar g}=\sum_{q(g)=\bar g}c_g$. This follows by applying $q$ to $\sum_g c_{g^{-1}}g$. It records the coset-sum normalization even when $|H|$ is not a unit. [F1, F3, step 1.1, step 2.1, step 3.1, algebra]

5.1 Given $u:B\otimes_A^L C\cong C'$, compose step 3.1 with $D_S(u^{-1})$ to obtain descent for the duals; the inverse is necessary because dualization is contravariant. The compatibility just proved and functoriality of dualization give compatible descent through a tower. Shifting commutes with scalar extension. If $P^\bullet$ is concentrated in degrees 1 and 2, its dual shifted by $[-2]$ has term $\operatorname{Hom}_S(P^{2-i},S)$ in degree $i$, so it is concentrated in degrees 0 and 1. At a prime $\mathfrak p$, its rank equals the rank of the corresponding original term at $\iota_A(\mathfrak p)$, since untwisted finite-projective duality preserves rank. Equal ranks of the two original terms therefore give equal ranks of the two shifted dual terms. These are conditional algebraic conclusions; none constructs the geometric inputs. [F2, F3, step 2.1, step 3.1, step 4.1, algebra] ∎

## Source and authoring record

The perfect-dual calculation is reconstructed locally, following the finite-projective argument in Stacks, Lemma 15.76.15; the trace and inversion formulas above specify the additional group-ring conventions. BDL §3.2.2, equation (10) and the paragraph preceding (11), motivate the application but do not supply a local proof of its geometric hypotheses. In particular, the sheaf-level finite-cover projection formula alone is not the required derived global-sections comparison. Applying this draft to BDL requires the actual compact-support complexes, perfectness over the group rings, compatible global descent, and verification of the contragredient action and corestriction normalization against the Weil–étale duality identification.
