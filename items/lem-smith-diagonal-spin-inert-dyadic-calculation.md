---
id: lem-smith-diagonal-spin-inert-dyadic-calculation
kind: lemma
title: "The inert dyadic local factor in the involution-spin calculation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps: [def-axiom-of-choice, def-countable-choice, def-dependent-choice, thm-local-hilbert-symbol-cup-product-norm-criterion, thm-local-artin-reciprocity-and-norm-index, thm-local-artin-unramified-frobenius-normalization, lem-canonical-local-reciprocity-is-compatible-with-field-norms, lem-unramified-local-unit-norms-and-cohomology, thm-finite-unramified-local-extensions-classified-by-residue-extensions, thm-two-adic-hilbert-symbol-formula]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are inherited from the local class-field,
  unramified-extension, and Hilbert-symbol interfaces.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Morgan and A. Smith, Field change for the Cassels–Tate pairing and applications to class groups, Proposition 8.1"
      url: "https://arxiv.org/pdf/2206.13403"
      locator: "§8.1, the inert dyadic condition in the involution-spin calculation"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. Let $F/\mathbb Q_2$ be finite and let $K=F(\sqrt\delta)$ be its unramified quadratic extension. Let $\alpha\in\mathcal O_K^\times$ and suppose that $K(\sqrt\alpha)/K$ is unramified, allowing the trivial extension. Put $t=\operatorname{Tr}_{K/F}(\alpha)$ and $a=N_{K/F}(\alpha)$, and assume $t\ne0$. Then the quadratic Hilbert symbol satisfies
$$H_{F,2}(t,-\delta a)=H_{F,2}(2,-\delta).$$
This proves the inert dyadic local correction under the displayed hypothesis. It does not assert the global involution-spin identity.

## Statement references

[[thm-local-hilbert-symbol-cup-product-norm-criterion]]

[[lem-canonical-local-reciprocity-is-compatible-with-field-norms]]

[[thm-two-adic-hilbert-symbol-formula]]

[Morgan and Smith, *Field change for the Cassels–Tate pairing and applications to class groups*, Proposition 8.1](https://arxiv.org/pdf/2206.13403)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, the finite dyadic field, its unramified quadratic extension, and $\alpha,t,a$ in the Statement.

[F1] The quadratic Hilbert symbol is symmetric and bilinear on square classes, with its norm criterion under local Artin reciprocity. [[thm-local-hilbert-symbol-cup-product-norm-criterion]] [[thm-local-artin-reciprocity-and-norm-index]]

[F2] Local reciprocity is compatible with field norms, a uniformizer maps to arithmetic Frobenius in the unramified quotient, and units are norms from finite unramified extensions. [[lem-canonical-local-reciprocity-is-compatible-with-field-norms]] [[thm-local-artin-unramified-frobenius-normalization]] [[lem-unramified-local-unit-norms-and-cohomology]]

[F3] Finite residue-field extensions lift uniquely to unramified local extensions. [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[F4] For an odd $z\in\mathbb Z_2^\times$, the $\mathbb Q_2$ quadratic Hilbert formula gives $H_{\mathbb Q_2,2}(z,-1)=(-1)^{(z-1)/2}$. [[thm-two-adic-hilbert-symbol-formula]]

## Proof

1.1 If $\alpha=\gamma^2$ in $K$, write $\gamma=u+v\sqrt\delta$. Then $a$ is a square and $t=2(u^2+\delta v^2)$. The second factor is a norm from the quadratic étale algebra $F(\sqrt{-\delta})$, so [F1] gives $H_{F,2}(t,-\delta a)=H_{F,2}(2,-\delta)$. Hence suppose $K(\sqrt\alpha)/K$ is the nontrivial unramified quadratic extension. [F1, given, algebra]

1.2 Choose $u\in\mathcal O_K$ whose residue has absolute trace $1$ to $\mathbb F_2$. The polynomial $X^2-X-\bar u$ is irreducible over the residue field: the image of $z\mapsto z^2-z$ is the trace-zero subgroup. Hence $\alpha_0=1+4u$ generates the unramified quadratic extension of $K$, because $(1+\sqrt{\alpha_0})/2$ satisfies $X^2-X-u=0$. By uniqueness in [F3], $\alpha=\gamma^2\alpha_0$ for some $\gamma\in K^\times$. Put $s=\operatorname{Tr}_{K/F}(u)$ and $t_0=\operatorname{Tr}_{K/F}(\alpha_0)=2(1+2s)$. The residue of $s$ has trace $1$ from $k_F$ to $\mathbb F_2$. [F3, given, choose, algebra]

2.1 Its quadratic character is unramified. For $b\in F^\times$, symmetry, the Kummer pairing, and [F2] give $$H_{F,2}(N_{K/F}\alpha,b)=H_{K,2}(\alpha,b)=(-1)^{v_K(b)}=(-1)^{v_F(b)}.$$ The last equality uses that $K/F$ is unramified. Thus $N_{K/F}\alpha$ represents the unique nontrivial unramified quadratic square class of $F$, namely $\delta$. In particular $a=\delta c^2$ for some $c\in F^\times$. [F1, F2, F3, step 1.1, given, algebra]

2.2 Let $d=v_F(2)$, the ramification index of $F/\mathbb Q_2$. Norm compatibility in [F2] and [F4] give $$H_{F,2}(1+2s,-1)=H_{\mathbb Q_2,2}(N_{F/\mathbb Q_2}(1+2s),-1)=(-1)^{\operatorname{Tr}_{F/\mathbb Q_2}(s)}.$$ Here the exponent is read modulo $2$, since $N(1+2s)\equiv1+2\operatorname{Tr}(s)\pmod4$. The $\mathbb F_2$-trace of multiplication by $s$ on $\mathcal O_F/2$ is $d\operatorname{Tr}_{k_F/\mathbb F_2}(\bar s)$: its filtration by powers of the maximal ideal has $d$ successive quotients isomorphic to $k_F$. Step 1.2 makes this parity $d$. Also $H_{F,2}(2,-1)=1$ because $-1=N_{F(\sqrt2)/F}(1+\sqrt2)$ when $2$ is nonsquare, and the square case is immediate. Therefore $H_{F,2}(t_0,-1)=(-1)^d$. [F1, F2, F4, step 1.2, algebra]

3.1 Write $\alpha_0=A+B\sqrt\delta$ and $\gamma=r+s'\sqrt\delta$, with $A=t_0/2\ne0$. Applying step 2.1 to $\alpha_0$ gives $N\alpha_0=\delta c_0^2$. Direct expansion then yields $$\frac{t}{t_0}=\left(r+\delta\frac BA s'\right)^2+\left(\frac{\delta c_0}{A}s'\right)^2.$$ Thus $t/t_0$ is a norm from $F(i)$ when that is a field; if $i\in F$ the relevant symbol is already trivial. In either case [F1] gives $H_{F,2}(t,-1)=H_{F,2}(t_0,-1)$. [F1, step 2.1, step 1.2, algebra]

4.1 The unramified quadratic character of $K/F$ evaluates on $2$ as $(-1)^d$ by [F2]. Thus $H_{F,2}(2,-\delta)=H_{F,2}(2,-1)H_{F,2}(2,\delta)=(-1)^d$. By step 2.1, $-\delta a$ and $-1$ have the same square class, and steps 2.2 and 3.1 give $H_{F,2}(t,-\delta a)=(-1)^d$. This proves the displayed equality. [F1, F2, step 2.1, step 3.1, step 2.2, algebra] ∎
