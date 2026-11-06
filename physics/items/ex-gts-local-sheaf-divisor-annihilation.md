---
id: ex-gts-local-sheaf-divisor-annihilation
kind: example
title: "Gts local sheaf divisor annihilation"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: algebraic-geometry
page: gts-weak-stability-framed-cy4-moduli-examples
dependency_level: 1
deps:
  - def-gts-weak-phase-framing-moduli-datum
dependency_roles:
  def-gts-weak-phase-framing-moduli-datum: mathematical-premise
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Arkadij Bojko, Wall-crossing for Calabi–Yau fourfolds: framework, tools, and applications"
      url: https://arxiv.org/pdf/2507.05922v3
      locator: "Assumptions 5.1 and 5.10; Definitions 5.3 and 5.4; §6.3; §7.2. Diagnostic examples do not claim the full hypotheses."
    - title: "Bojko, Kuhn, Liu, and Thimm, Wall-crossing for equivariant DT4 invariants"
      url: https://arxiv.org/html/2608.23515v1
      locator: "§§3.2 and 4.2; exact conditional hypotheses and scope limits."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
aliases: []
---

## Example

In the category of zero-dimensional coherent sheaves on $X=\operatorname{Tot}(K_{\mathbb P^3})$, with positive lengths explicitly admitted, a skyscraper $k(p)$ on the pullback of a hyperplane belongs to both framing concentration opens specified below. Multiplication by the divisor's defining section annihilates its nonzero framing. Thus concentration and admission alone do not extend the section-multiplication embedding argument to this category. The example does not satisfy the torsion-free hypothesis used in the source proof of Lemma 6.13 and is not a counterexample to that theorem.

## Example references

[Bojko, *Wall-crossing for Calabi–Yau fourfolds: framework, tools, and applications*](https://arxiv.org/pdf/2507.05922v3), Assumptions 5.1 and 5.10; Definition 5.3; §6.2; §6.3; Assumption 6.9; Remark 6.10; Example 6.11; Theorem 6.12; Lemma 6.13; Equation (6.14); §7.2.

[Bojko, Kuhn, Liu, and Thimm, *Wall-crossing for equivariant DT4 invariants*](https://arxiv.org/html/2608.23515v1), §2.2.8, §3.2, Assumption 4.2.4, and Theorem 1.2.1; used only under their stated hypotheses.

## Setup


Let $Y=\mathbb P^3_{\mathbb C}$ and $X=\operatorname{Tot}(K_Y)$ with projection $\pi:X\to Y$. Choose a hyperplane $H\subset Y$, set $D=\pi^{-1}(H)$, and let $s$ be the pulled-back section defining this effective Cartier divisor. Choose a closed point $p\in D$ on the zero section. Let $\mathcal A=\operatorname{Coh}_0(X)$, the abelian category of coherent sheaves with finite support, and use the class map $[F]\mapsto\ell(F)\in\Gamma=\mathbb Z$, where $\ell(F)$ is the sum of its local module lengths. Set $C(\mathcal A)=E(\mathcal A)=\mathbb Z_{>0}$ and $\phi(F)=1$ for every nonzero $F$. All objects are semistable, and the HN property holds with one nonzero factor. No restriction to torsion-free sheaves is imposed in this diagnostic datum.

Take the two original framing indices $j=1,2$ with divisors $D_j=jD$ and functors $\mathrm{Fr}_j(F)=H^0(X,F(jD))$. Put $\mathcal A_1=\mathcal A_2=\mathcal A$ and take $\mathcal U_j$ to be the entire length-$n$ locus for each fixed $n>0$. Finite-support sheaves have no higher cohomology; tensoring by a line preserves length, so these framing functors are exact of rank $n$. For flat families with support finite over the parameter base, their degree-zero direct images are rank-$n$ vector bundles and commute with base change. These are the geometric concentration data used here; no identification with a separately chosen source enhancement is required. In particular the residue sheaf $k(p)=\mathcal O_{X,p}/\mathfrak m_p$ has length one, has admitted class $1\in E(\mathcal A)$, and lies in $\mathcal U_1\cap\mathcal U_2$.

## Facts & Assumptions

**Given:** the exact data and all unresolved suppliers retain their stated status.

[F1] [[def-gts-weak-phase-framing-moduli-datum]]: exact planned interface: “Specify original weak stability, exact phase category, actual ordinary-vs-admissible maps, original concentration opens and exact Fr_k, common-line framing, even emergent class domain, torus linearizations and orientations. No sum closure, cofinal-index availability, or abelian phase category is implicit.” The link records scope, not proof acceptance.



## Context only — no mathematical supplier use

`lem-gts-original-k-direct-sum-framing-oriented-gysin`, `lem-gts-original-k-nondegenerate-change-of-framing` name the held construction interfaces discussed by this diagnostic. Their conclusions are not assumed or used to establish the calculations below; this example does not prove those interfaces.

## Verification

1.1 In a local trivialization of $\mathcal O_X(D)$ at $p$, its section $s$ is an element of $\mathfrak m_p$. The ideal $\mathfrak m_p$ acts by zero on the residue sheaf $k(p)$. Therefore multiplication $s:k(p)(D)\to k(p)(2D)$ is zero. Both spaces of global sections have dimension one, and the induced framing map $\mathrm{Fr}_1(k(p))\to\mathrm{Fr}_2(k(p))$ is the zero map between these nonzero spaces. The same argument applies to any skyscraper supported on an effective Cartier divisor, in any line-bundle twist. [given, F1, algebra]

2.1 Since $1=[k(p)]\in E(\mathcal A)$ and $k(p)$ lies in both declared concentration opens, the zero map in step 1.1 is an admitted, noninjective framing map in this explicit overlap. A nonzero framed section of $k(p)(D)$ becomes zero after multiplication, so this operation cannot embed its nonzero framed pairs into the corresponding nonzero framed-pair space at index $2$. In the source proof of Lemma 6.13, injectivity is instead justified using torsion-free sheaves; the nonzero sheaf $k(p)$ is annihilated by the local non-zero-divisor defining $D$, and fails that hypothesis. Thus the calculation identifies the additional scope requirement without assuming either held comparison interface or disproving the source theorem. [given, F1, step 1.1, algebra] ∎

