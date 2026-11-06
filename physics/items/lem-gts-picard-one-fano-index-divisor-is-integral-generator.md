---
id: lem-gts-picard-one-fano-index-divisor-is-integral-generator
kind: lemma
title: Picard-one Fano index divisor is the integral generator
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
- lem-gts-curve-nef-ample-perturbation-by-nakai-construction
- lem-gts-log-adjoint-vanishing-on-snc-pairs
- thm-grothendieck-riemann-roch-for-projective-morphisms
- def-chern-character-and-todd-class
- thm-ample-powers-very-ample-proper-base
- thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms
- def-axiom-of-choice
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: Mella, Existence of good divisors on Mukai varieties, fundamental-divisor convention
    url: https://arxiv.org/pdf/alg-geom/9705012v1
    locator: 'arXiv:alg-geom/9705012v1, complete printed pp. 1–10 read, especially §2 pp. 4–8: Lemma 2.1 and Theorems
      2.2–2.5. This is source context; the present proof reconstructs its actual stated interface locally.'
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/lem-gts-picard-one-fano-index-divisor-is-integral-generator.md
dependency_level: 2
dependency_roles:
  lem-gts-curve-nef-ample-perturbation-by-nakai-construction: mathematical-premise
  lem-gts-log-adjoint-vanishing-on-snc-pairs: mathematical-premise
  thm-grothendieck-riemann-roch-for-projective-morphisms: mathematical-premise
  def-chern-character-and-todd-class: mathematical-premise
  thm-ample-powers-very-ample-proper-base: mathematical-premise
  thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms: mathematical-premise
  def-axiom-of-choice: mathematical-premise
---

## Statement

Assume AC. Let X be a smooth connected complex projective Fano variety with Picard number one. If $-K_{X}=rA$ where r is its maximal index and A the ample Cartier index divisor, then Pic(X)=ZA integrally. In particular there is no torsion and A is primitive.

## Statement references

[[lem-gts-log-adjoint-vanishing-on-snc-pairs]]

[[thm-grothendieck-riemann-roch-for-projective-morphisms]]

[[def-chern-character-and-todd-class]]

[[thm-ample-powers-very-ample-proper-base]]

[[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]]

[[def-axiom-of-choice]]

[[lem-gts-curve-nef-ample-perturbation-by-nakai-construction]]

## Facts & Assumptions

**Given:** Exactly the Statement data. AC and DC, where inherited by the actual supplied cohomology/base-change constructions, are retained.

[F1] The exact earlier suppliers in Statement references provide only their stated interfaces. All additional constructions are explicit in the proof; the source references attribute the established theorem family and do not replace any proof.

[F2] [[lem-gts-curve-nef-ample-perturbation-by-nakai-construction]] supplies the projective numerical ampleness criterion: a Cartier divisor is ample when every positive-dimensional integral subvariety has strictly positive top self-intersection. Numerical equivalence of divisors preserves those intersection numbers: expand their difference and pair each numerically trivial divisor with the remaining one-cycle. In particular ampleness is invariant under numerical equivalence. This applies over C in every dimension used below.

## Proof

1.1 Let $n=\dim X$. The hypotheses $\rho(X)=1$ exclude $n=0$. Smooth connected projective $X$ is integral, so $H^0(X,O_X)=\mathbb C$. Empty-boundary adjoint vanishing from [F1] applied to $M=0$, with $M-K_X=-K_X$ ample, gives $H^i(X,O_X)=0$ for $i>0$. Consequently $\chi(O_X)=1$. This uses algebraic coherent cohomology and no analytic exponential sequence. [given, F1, algebra]

2.1 Let $N$ be any numerically trivial line bundle: its degree on every integral curve is zero. For each positive-dimensional integral subvariety $Y$ of dimension $k$, expand $(-K_X+N)^k\cdot Y$. Every term containing $c_1(N)$ vanishes, since after removing one such factor the remaining intersection is a one-cycle, a finite rational linear combination of integral curves. Thus $(-K_X+N)^k\cdot Y=(-K_X)^k\cdot Y>0$. The numerical criterion [F2] makes $-K_X+N$ ample. Empty-boundary adjoint vanishing therefore gives $H^i(X,N)=0$ for all $i>0$. GRR to a point and $\operatorname{ch}(N)=\exp(c_1(N))$ from [F1] give $\chi(N)=\chi(O_X)=1$: every positive $c_1(N)$ term in the top-degree product $\operatorname{ch}(N)\operatorname{td}(T_X)$ again pairs $c_1(N)$ with a rational one-cycle and vanishes. Hence $h^0(X,N)=1$. A nonzero section has either no zero divisor, trivializing $N$, or an effective nonzero divisor $D$. In the latter case, for any ample Cartier $B$, $D\cdot B^{n-1}>0$ (take a very ample power and count the positive degrees of the components), contradicting numerical triviality. Thus every numerically trivial line bundle is trivial. In particular there is no torsion. [given, F1, F2, step 1.1, algebra]

3.1 Fix an ample Cartier divisor $B$ and consider the group homomorphism $\delta:\operatorname{Pic}(X)\to\mathbb Z$, $N\mapsto c_1(N)\cdot B^{n-1}$. The numerical divisor group injects into the product of its integer curve-degree groups; it is therefore torsion free and injects into its real scalar extension. By $\rho(X)=1$, that real numerical space is one-dimensional. The functional $\delta$ on it is nonzero because $\delta(B)=B^n>0$, hence injective. If $\delta(N)=0$, $N$ is numerically trivial and is trivial by step 2.1. Thus $\delta$ is injective on $\operatorname{Pic}(X)$. Its image is a nonzero subgroup of $\mathbb Z$, so is $d\mathbb Z$ for its least positive element $d$. Choose $C$ with $\delta(C)=d$; injectivity proves $\operatorname{Pic}(X)=\mathbb Z C$. No finite-generation, Morse-cell, GAGA or Neron--Severi finiteness theorem is used. [given, F2, step 2.1, construct, algebra]

4.1 The numerical class of $C$ is the positive rational multiple $\lambda=\delta(C)/\delta(B)$ of the class of $B$. Mixed intersection numbers depend only on numerical divisor classes, by the same one-cycle expansion used in step 2.1. Thus $C^k\cdot Y=\lambda^k B^k\cdot Y>0$ for every positive-dimensional integral $Y$, so [F2] makes $C$ ample. Write $A=kC$ in the integral Picard group. Since $A$ and $C$ are ample, $k>0$. If $k>1$, then $-K_X=(rk)C$ contradicts maximality of the stated index $r$. Hence $k=1$, and $\operatorname{Pic}(X)=\mathbb Z A$ integrally. [given, F2, step 3.1, algebra]

5.1 This proves exactly the primitive-generator input needed for the rank-one index-two Fano fourfold and rank-one index-one Fano threefold branches. No rational connectedness, simple connectivity, Fano classification or Picard-torsion theorem is imported. [given, F1, step 4.1, construct, algebra]

6.1 The same rational-Chow argument gives any fixed torsion line Chern character equal to one: if $N^{m}=O$, then mc1(N)=0 and ch(N)=exp(c1(N))=1 after tensoring with Q. No numerical versus rational-equivalence substitution is made. [given, F1, construct, algebra] ∎

