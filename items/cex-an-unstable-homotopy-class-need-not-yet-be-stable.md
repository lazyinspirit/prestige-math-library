---
id: cex-an-unstable-homotopy-class-need-not-yet-be-stable
kind: counterexample
title: An unstable homotopy class need not yet be stable
status: draft
origin: pipeline
deps: ["def-suspension-prespectrum-and-sphere-prespectrum", "def-stable-homotopy-groups-of-a-sequential-prespectrum", "thm-freudenthal-suspension-theorem", "cor-fundamental-group-of-two-circle-wedge", "thm-reduced-words-form-the-free-group", "thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one", "lem-cw-quotients-and-collapse-of-a-contractible-subcomplex"]
proof_strategy: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. P. May, A Concise Course in Algebraic Topology
      url: https://web.archive.org/web/20220823180711if_/http://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 22, Section 2, printed pages 176--177
---

## Statement refuted

The map from an individual unstable stage into the stable homotopy group of a
suspension prespectrum need not be injective.

## Counterexample

Let $X=S^1\vee S^1$ and let $a,b$ be the two standard loop classes. The
commutator $[a,b]=aba^{-1}b^{-1}$ is nontrivial in $\pi_1(X)$, but its image
in $\pi_1(\Sigma^\infty X)$ is zero.

## Facts & Assumptions

[F1] The published wedge computation identifies $\pi_1(S^1\vee S^1)$ with the free group $F(a,b)$ ([[cor-fundamental-group-of-two-circle-wedge]]).

[F2] Reduced words give a normal form for the free group on $a,b$ ([[thm-reduced-words-form-the-free-group]]).

[F3] $\pi_2(Y)$ is abelian for every based space $Y$ ([[thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one]]).

[F4] Collapsing a nonempty contractible CW subcomplex is a weak homotopy equivalence ([[lem-cw-quotients-and-collapse-of-a-contractible-subcomplex]]).

[F5] Freudenthal supplies the suspension map at the surjective endpoint for a connected based CW complex ([[thm-freudenthal-suspension-theorem]]).

## Verification

**Given:** $X=S^1\vee S^1$ with standard generators $a,b$.

1.1 By [F1], the loop $[a,b]$ corresponds to the word
$aba^{-1}b^{-1}$ in the free group on $a,b$. No two adjacent letters in this
four-letter word are formal inverses, so it is already reduced and is not the
empty word. The reduced-word uniqueness in [F2] therefore proves that
$[a,b]\neq1$. Thus it is a nonzero initial-stage element of [F1, F2]

$$ \pi_1(X)=\pi_{0+1}((\Sigma^\infty X)_0). $$

1.2 Since $X$ is connected, [F5] with connectivity parameter $1$ and $i=1$ gives the suspension homomorphism $E:\pi_1(X)\to\pi_2(\Sigma X)$. This is its surjective endpoint; no injectivity is promised. The target is abelian by [F3]. Every homomorphism from $F(a,b)$ to an abelian group kills the commutator, so $E([a,b])=0$. [F1, F3, F5]

2.1 Freudenthal uses the two-cone suspension. Collapsing its basepoint meridian gives the reduced suspension $S^1\wedge X$ used by $\Sigma^\infty X$. The meridian is a nonempty contractible CW subcomplex, so [F4] makes the collapse an isomorphism on $\pi_2$; the quotient formula is the reduced-suspension formula in the prespectrum definition. Thus the image found in step 1.2 is the prespectrum bonding image. [F4, step 1.2]

3.1 In the stable colimit, $[0,[a,b]]=[1,E([a,b])]=[1,0]=0$. Thus a genuinely nontrivial unstable class dies before stabilization. No value of $\pi_4(S^3)$ or positive stable stem is assumed. $\square$ [step 1.1, step 1.2, step 2.1]
