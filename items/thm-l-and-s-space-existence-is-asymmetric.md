---
id: thm-l-and-s-space-existence-is-asymmetric
kind: theorem
title: L-space and S-space existence is asymmetric
status: draft
origin: pipeline
deps:
  - thm-moore-zfc-l-space
  - thm-ch-implies-an-s-space-exists
  - thm-pfa-implies-there-are-no-s-spaces
  - cor-supercompact-consistency-of-no-s-spaces
  - thm-v-equals-l-implies-diamond
  - prop-diamond-implies-continuum-hypothesis
  - def-axiom-of-choice
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Moore, A solution to the L space problem, Theorem 1.3 and Section 7, printed pp. 2 and 21–24"
      url: https://arxiv.org/pdf/math/0501524
    - title: "Hart–Kunen, Ultra Strong S-Spaces, Corollary 4.18, printed p. 103"
      url: https://www.uwosh.edu/faculty_staff/hartj/ultra.pdf
    - title: "Abraham, Lecture notes on the P-ideal dichotomy, Theorem 1.5, rendered lines 208–226"
      url: https://paperzz.com/doc/7877075/lecture-notes-on-the-p-ideal-dichotomy
---

## Statement

The L- and S-space existence results have the following asymmetric status.

1. ZFC proves that an L-space exists.
2. ZFC+CH proves that a strong S-space, hence an S-space, exists; ZFC+$V=L$
   also proves this through $V=L\Rightarrow\diamondsuit\Rightarrow\mathrm{CH}$.
3. ZFC+PFA proves that no S-space exists.

These are separate branches, not simultaneous conclusions.  Moreover, relative
to the consistency of ZFC plus a supercompact cardinal, existence of an S-space
is not a theorem of ZFC.  The last qualification is a relative-consistency
claim, not an unqualified proof in ZFC of PFA or of its own consistency.

## Facts & Assumptions

**Given:** The named theories are read in separate branches.  ZFC includes AC;
no branch inherits CH, $V=L$, or PFA from another branch.

[F1] [[thm-moore-zfc-l-space]] constructs an L-space in ZFC.

[F2] [[thm-ch-implies-an-s-space-exists]] constructs a strong S-space in
ZFC+CH, and hence an S-space by the definition it cites.

[F3] [[thm-v-equals-l-implies-diamond]] proves in ZF that $V=L$ implies
$\diamondsuit$ on $\omega_1$.

[F4] [[prop-diamond-implies-continuum-hypothesis]] proves in ZFC that
$\diamondsuit$ implies CH.

[F5] [[thm-pfa-implies-there-are-no-s-spaces]] proves in ZFC+PFA that no
S-space exists.

[F6] [[cor-supercompact-consistency-of-no-s-spaces]] supplies the qualified
formal consistency implication from ZFC plus a supercompact to ZFC plus no
S-spaces.

[F7] [[def-axiom-of-choice]] is part of every ZFC branch and supplies the AC
used by [F1], [F2], [F4], and [F5].  This assembly makes no additional choice.

## Proof

**Proof technique:** direct branchwise assembly.

1.1 In the ZFC branch, apply [F1].  It gives the required L-space without CH, $V=L$, PFA, or a large cardinal. [F1, Given]

1.2 In the ZFC+CH branch, [F2] gives a strong S-space and therefore an S-space.  This conclusion uses CH and is not transferred to the other branches. [F2, Given]

1.3 In the ZFC+$V=L$ branch, [F3] gives $\diamondsuit$; since this branch includes AC, [F4] gives CH; and then [F2] gives a strong S-space. [F2, F3, F4, F7, Given]

1.4 In the ZFC+PFA branch, [F5] says that no S-space exists.  This is incompatible with the conclusions of steps 1.2 and 1.3, so those hypotheses are not conjoined. [F5, Given]

2.1 For the final metatheoretic qualification, assume $\operatorname{Con}(\mathrm{ZFC}+\text{a supercompact})$.  Then [F6] gives $\operatorname{Con}(\mathrm{ZFC}+\text{no S-spaces})$.  If ZFC proved that an S-space exists, appending that fixed proof to the latter theory would refute it, contrary to its consistency.  Thus, under the displayed source-consistency assumption, S-space existence is not a ZFC theorem. [F6, step 1.4, assume-hyp]

3.1 Steps 1.1--2.1 establish exactly the three branchwise assertions and the qualified asymmetry.  Empty or singleton spaces do not create an exception: [F1] has underlying set $\omega_1$, [F2] likewise produces a nonempty strong S-space, and [F5] applies to the complete definition.  The first power in [F2] supplies the ordinary S-space; the zeroth power is excluded by definition.  All uses of AC are declared in [F7], and no converse consistency implication is claimed. [F1, F2, F5, F7, step 1.1, step 1.2, step 1.3, step 1.4, step 2.1] ∎
