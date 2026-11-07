---
id: lem-smith-diagonal-spin-odd-unramified-local-calculation
kind: lemma
title: "Odd unramified local factors in the involution-spin calculation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 18
deps: [def-axiom-of-choice, def-dependent-choice, lem-tame-local-hilbert-symbol-residue-formula, lem-hensel-factor-lifting-over-a-complete-valued-field]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC and DC are inherited from the local tame Hilbert-symbol interface.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Morgan and A. Smith, Field change for the Cassels–Tate pairing and applications to class groups, Proposition 8.1"
      url: "https://arxiv.org/pdf/2206.13403"
      locator: "§8.1, local factors in the involution-spin argument"
verification: {}
---

## Statement

Assume AC and DC. Let $F$ be a finite extension of $\mathbb Q_p$ for an odd prime $p$, with valuation $v$, valuation ring $\mathcal O$, and residue field $k$. Write $H_2$ for its quadratic Hilbert symbol and $\chi_k:k^\times\to\{\pm1\}$ for the quadratic residue character.

First, let $\delta\in\mathcal O^\times$ have nonsquare residue, let $K=F(\sqrt\delta)$, and let $\alpha\in\mathcal O_K^\times$. Put $t=\operatorname{Tr}_{K/F}(\alpha)$ and $a=N_{K/F}(\alpha)$. If $t\ne0$, then
$$H_2(t,-\delta a)=1.$$

Second, let $x,y\in\mathcal O\setminus\{0\}$ with $\min(v(x),v(y))=0$ and $t=x+y\ne0$. Then
$$H_2(t,-xy)=\begin{cases}\chi_k(\overline y)^{v(x)},&v(x)>0,\\\chi_k(\overline x)^{v(y)},&v(y)>0,\\1,&v(x)=v(y)=0.\end{cases}$$
These are the inert and split odd unramified local calculations. They do not establish the ramified or dyadic factors or the global involution-spin identity.

## Statement references

[[lem-tame-local-hilbert-symbol-residue-formula]]

[[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[Morgan and Smith, *Field change for the Cassels–Tate pairing and applications to class groups*, Proposition 8.1](https://arxiv.org/pdf/2206.13403)

## Facts & Assumptions

**Given:** AC, DC, the odd-residue-characteristic local field and the inputs in the Statement.

[F1] For residue characteristic different from $2$, the quadratic Hilbert symbol is $1$ on two units and satisfies $H_2(u,b)=\chi_k(\overline u)^{v(b)}$ for a unit $u$. [[lem-tame-local-hilbert-symbol-residue-formula]]

[F2] A unit with nonzero square residue has a square root in the complete field. [[lem-hensel-factor-lifting-over-a-complete-valued-field]]

## Proof

1.1 In the first case write $\alpha=u+v_0\sqrt\delta$ with $u,v_0\in\mathcal O$. Since $K/F$ is unramified and $\alpha$ is a unit, $a$ is a unit and at least one of $u,v_0$ is a unit. If $t=2u$ is a unit, both inputs of $H_2(t,-\delta a)$ are units and [F1] gives $1$. If $t$ is not a unit, $u$ is nonunit and $v_0$ is a unit; then $$-\delta a=\delta^2v_0^2-\delta u^2$$ is a unit with nonzero square residue. It is a square by [F2], so its Hilbert symbol with $t$ is $1$. [F1, F2, given, algebra]

1.2 In the split case, if $v(x)>0$ then $y$ and $t=x+y$ are units, $\overline t=\overline y$, and $v(-xy)=v(x)$. The first line follows from [F1]. The second line follows by interchanging $x$ and $y$. [F1, given, algebra]

2.1 If $v(x)=v(y)=0$ and $t$ is a unit, [F1] makes the symbol $1$. If $t$ is nonunit, then $\overline y=-\overline x$, so $-xy$ is a unit with nonzero square residue; it is a square by [F2], and the symbol is again $1$. This proves the last line. [F1, F2, step 1.2, algebra] ∎
