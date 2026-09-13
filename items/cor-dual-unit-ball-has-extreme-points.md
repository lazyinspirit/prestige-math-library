---
id: cor-dual-unit-ball-has-extreme-points
kind: corollary
title: Dual unit ball has extreme points
status: published
origin: pipeline
deps: ["thm-banach-alaoglu", "thm-krein-milman-existence-of-extreme-points", "lem-basic-weak-star-neighborhoods", "def-axiom-of-choice", "thm-ultrafilter-lemma", "thm-hahn-banach-dominated-extension"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
      locator: "§3.5, Theorem 3.46, pp. 149–151, applied after §3.2.3, Theorem 3.33, pp. 134–135"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "§5.2, pp. 144–146, and §5.3, Theorem 5.10, p. 147"
proof_strategy: direct
---

## Statement

**Assume the Axiom of Choice.**  The closed unit ball of the dual of every
nonzero real or complex normed space has an extreme point.

## Facts & Assumptions

**Given:** AC and a nonzero real or complex normed space $X$.

[F1] Under the ultrafilter lemma the closed dual unit ball is weak-star compact ([[thm-banach-alaoglu]]).

[F2] Under AC every nonempty compact convex subset of a locally convex Hausdorff real or complex TVS has an extreme point ([[thm-krein-milman-existence-of-extreme-points]]).

[F3] The weak-star topology on $X^*$ is Hausdorff and locally convex without any choice assumption ([[lem-basic-weak-star-neighborhoods]]).

[F4] AC is the declared ambient choice principle ([[def-axiom-of-choice]]).

[F5] AC implies the ultrafilter lemma ([[thm-ultrafilter-lemma]]).

[F6] AC supplies the Hahn–Banach theorem used inside locally convex separation in the selected Krein–Milman proof ([[thm-hahn-banach-dominated-extension]]).

## Proof

**Proof technique:** direct.

1.1 By [F5], the assumed AC supplies the ultrafilter lemma.  Therefore [F1] makes $B_{X^*}$ compact for the weak-star topology. [F1, F4, F5, given]

1.2 By [F3], $X^*$ with the weak-star topology is a locally convex Hausdorff real or complex TVS.  The set $B_{X^*}$ is nonempty because it contains the zero functional, and it is convex by the triangle inequality and homogeneity of the dual norm. [F3, given]

2.1 Apply [F2] to the nonempty weak-star compact convex set $B_{X^*}$.  Its proof uses Zorn under AC and separation under HB; [F6] records that the same AC hypothesis supplies that HB input.  Hence $B_{X^*}$ has an extreme point. [F2, F6, step 1.1, step 1.2]

3.1 This proves the stated nonzero case.  In fact the same argument includes $X=\{0\}$, whose dual ball is the singleton $\{0\}$ and whose unique point is extreme. [step 2.1] ∎
