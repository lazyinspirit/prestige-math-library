---
id: lem-dyadic-cyclotomic-quadratic-norm-quotient-is-signatures
kind: lemma
title: Dyadic cyclotomic quadratic norm quotient is the real-signature module
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps:
  - lem-primary-brauer-classes-vanish-over-cyclotomic-zp-unions
  - thm-weak-approximation-for-global-fields
  - thm-global-brauer-hasse-noether-exact-sequence-number-field
  - lem-local-invariant-restriction-scaling
  - lem-finite-galois-obstruction-brauer-cohomology-comparison
  - lem-cyclic-group-cohomology-norm-and-inflation
  - thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
  - lem-continuous-profinite-cochains-commute-with-directed-colimits
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
axiom_use: AC, Countable Choice and DC are explicit. Finite-place obstruction killing uses the actual BHN/restriction construction and the finite quadratic splitting/norm criterion; no global H3 or class-formation theorem is used.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Class Field Theory, version4.03
      url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
      locator: ChapterVIII3 finite quadratic splitting/norm principle; the infinite dyadic norm/signature identification and continuous permutation-module calculation are supplied here
---

## Statement

Assume AC, Countable Choice and DC. Let $B$ be a number field with at least one real place. Use the real dyadic tower $Q_r=\mathbb Q(\mu_{2^{r+2}})^+$ and put $B_r=BQ_r$, $B_\infty=\bigcup_rB_r$ and $A_\infty=B_\infty(i)$. Write $\Gamma_0=\operatorname{Gal}(B_\infty/B)\cong\mathbb Z_2$. Let
$$S=\varinjlim_r\mathbb F_2^{\{\text{real places of }B_r\}},$$
where transition maps pull back signs to the real places above them and $\Gamma_0$ acts by permutation. Then signs induce a canonical $\Gamma_0$-equivariant isomorphism
$$B_\infty^\times/N_{A_\infty/B_\infty}A_\infty^\times\xrightarrow{\sim}S,$$
where a negative sign is1 and a positive sign is0. In particular the quotient has exponent2. The module $S$ is discrete with continuous action and
$$H^1_{\mathrm{cts}}(\Gamma_0,S)=0.$$
Moreover $\operatorname{Gal}(A_\infty/B)\cong C_2\times\Gamma_0$, with $C_2$ acting by $i\mapsto-i$. These assertions include mixed real/complex number fields, not only totally real fields.

## Facts & Assumptions

**Given:** Exactly the fields, real dyadic tower, sign systems and public choice assumptions in the Statement.

[F1] The fixed real cyclotomic $\mathbb Z_2$ tower has unbounded dyadic local degrees at every finite place of every number field, simultaneously on any finite set. Its real places stay real and its base-change Galois group is $\mathbb Z_2$. [[lem-primary-brauer-classes-vanish-over-cyclotomic-zp-unions]]

[F2] Finite weak approximation, under AC/CC, realizes arbitrary strict sign conditions at finitely many real places. [[thm-weak-approximation-for-global-fields]]

[F3] Number-field Brauer classes have finite local support and localization is injective. Local restriction scales normalized invariants by local degree, compatibly with finite algebraic comparison. [[thm-global-brauer-hasse-noether-exact-sequence-number-field]] [[lem-local-invariant-restriction-scaling]] [[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[F4] For a cyclic group the degree-two cohomology is the fixed module modulo the norm. Thus the carry class with parameter $b$ for a quadratic extension is zero precisely when $b$ is a norm, by the actual finite algebraic comparison. [[lem-cyclic-group-cohomology-norm-and-inflation]] [[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[F5] Continuous cohomology is the finite-quotient/fixed-coefficient direct limit and commutes with directed coefficient colimits. [[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]] [[lem-continuous-profinite-cochains-commute-with-directed-colimits]]

[A1] AC, Countable Choice and DC are explicit. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

1.1 Every real place of $B_r$ has only real prolongations in later $B_s$ by [F1]. Hence signs of an element at one level pull back to its signs at any later level, defining a map $B_\infty^\times\to S$. Norms from $A_\infty$ are positive at every real embedding, since their local expression is $z\bar z$. Conversely, every element of $S$ is a finite-level sign tuple, which [F2] realizes by some $b\in B_r^\times$ (approximate the targets $1$ or $-1$ within less than1). Therefore the sign map is onto and factors through the displayed norm quotient. It is equivariant because field automorphisms permute the embeddings. [F1, F2, given, construct, algebra]

1.2 Suppose $b\in B_r^\times$ has zero sign in $S$. All its signs at that level must already be positive: every real place has real prolongations, so a negative sign cannot disappear on pullback. Form the quadratic carry algebra for $B_r(i)/B_r$ with parameter $b$. The extension is quadratic, since $B_r$ has a real place. Its class has exponent dividing2 by [F4] and finite local support by [F3]. At real places it is split, since positive $b$ is the norm of its positive square root in $\mathbb C$; at complex places it is split as well. Choose a later $B_s/B_r$ with even local degrees at its finitely many nonsplit finite places, by [F1]. Restriction scaling makes its class zero at every finite completion of $B_s$. Its real local classes also stay zero, since $b$ stays positive, and complex local classes are zero. By [F3]'s injective global localization, the quadratic carry algebra over $B_s$ is split. Apply [F4] to the actual finite cyclic extension $B_s(i)/B_s$: zero carry class is exactly $b=N_{B_s(i)/B_s}(x)$ for some $x\in B_s(i)^\times$. The same equality in the union makes $b$ a norm from $A_\infty$. This proves injectivity of the sign quotient in step 1.1. No assertion that every real-place dyadic Brauer class vanishes was used. [F1, F2, F3, F4, step 1.1, construct, algebra]

2.1 Choose one real place of $B$. Its extensions to every $B_r$ are real, so $i\notin B_\infty$. The quadratic extension $B(i)/B$ therefore has trivial intersection with $B_\infty$ over $B$. At each finite level the two Galois extensions are linearly disjoint, and restriction gives the product $C_2\times\operatorname{Gal}(B_r/B)$. Passing to compatible automorphisms of the unions gives $\operatorname{Gal}(A_\infty/B)=C_2\times\Gamma_0$. This argument requires only one real place; complex places of $B$ cause no exception. [F1, step 1.1, construct, algebra]

2.2 After discarding finitely many initial levels, $\operatorname{Gal}(B_r/B)$ runs through the cyclic quotients $C_{2^n}$ of $\Gamma_0$. For each real place of $B$, its real prolongations at that level form a free transitive $C_{2^n}$-set: the extension is Galois, has the full number of embeddings, and the local real degree is1. Choose a compatible prolongation for each of the finitely many real base places under the public AC. Thus their permutation modules are regular $\mathbb F_2[C_{2^n}]$ and the transition maps pull a function back along $C_{2^{n+1}}\to C_{2^n}$, duplicating each value. Consequently $S$ is a finite direct sum of copies of the locally constant function module on $\Gamma_0$. It is discrete and continuous because every finite-level sign tuple has an open stabilizer. [A1, F1, step 1.1, construct, algebra]

3.1 Put $P_n=\mathbb F_2[C_{2^n}]$ with the regular permutation action. To compute $H^1(\Gamma_0,P_n)$ in [F5], use finite quotients $C_{2^m}$ with $m\ge n+1$. The one-cocycle formula gives
$$H^1(C_{2^m},P_n)=\ker(N_{2^m})/(\sigma-1)P_n.$$
Here $N_{2^m}=2^{m-n}N_{2^n}=0$ in characteristic2. The quotient by $\sigma-1$ is the augmentation coordinate $\mathbb F_2$, and inflation to a still larger quotient preserves that coordinate: a one-cocycle is determined by its value on the same generator. Hence $H^1(\Gamma_0,P_n)=\mathbb F_2$. Under coefficient pullback $P_n\to P_{n+1}$ every value is repeated twice, so its augmentation is0. The induced map on these $H^1$ groups is therefore zero. Taking the coefficient direct limit in [F5] yields zero $H^1$ for each locally constant function summand, and hence for the finite sum $S$ from step 2.2. This proves the final assertion together with steps 1.1–2.1. [F5, step 1.1, step 1.2, step 2.1, step 2.2, construct, algebra] ∎
