---
id: lem-transpose-lower-bound-gives-image-ball-density
kind: lemma
title: "A lower bound for the transpose forces a dense image of a ball"
status: published
origin: pipeline
deps: ["def-transpose-of-a-bounded-operator", "lem-transpose-is-bounded-and-has-the-same-norm", "thm-strong-separation-of-closed-and-compact-convex-sets", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (lem-transpose-lower-bound-gives-image-ball-density). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Theorem 4.16 proof (vii) => (i), (4.10)–(4.11), p.180"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "Separate a point outside the closed convex balanced image-ball closure. Its support supremum is ||T*g||; use real parts over C and phase rotation. A point of norm <1/C contradicts ||g||<=C||T*g||. This lemma does not use closed-range equivalence."
---

## Statement

Let $\mathbb K=\mathbb R$ or $\mathbb C$. Assume the Axiom of Choice. Let $T:X\to Y$ be bounded linear between normed spaces, and let $C>0$ satisfy $\|g\|\le C\|T^*g\|$ for every $g\in Y^*$. With open balls, $$B_Y(0,1/C)\subseteq\overline{T(B_X(0,1))}^{\|\cdot\|}.$$

## Facts & Assumptions

**Given:** The Axiom of Choice and the spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[def-transpose-of-a-bounded-operator]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $T:X\to Y$ be bounded and linear between normed spaces. Its **transpose**, or Banach adjoint, is $T^*:Y^*\longrightarrow X^*,\qquad (T^*g)(x)=g(Tx).$ The duals are def-dual-space-of-a-normed-space. Composition is bounded by lem-composition-operator-norm-inequality, so this has the displayed codomain. It is linear in $g$ over $\mathbb K$. No complex conjugation is inserted; a Hilbert adjoint uses a separate inner-product identification.

[F2] From [[lem-transpose-is-bounded-and-has-the-same-norm]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a bounded linear $T:X\to Y$ between normed spaces, $T^*:Y^*\to X^*$ is bounded linear and $\|T^*\|=\|T\|$.

[F3] From [[thm-strong-separation-of-closed-and-compact-convex-sets]], with its stated hypotheses: under AC, disjoint nonempty convex $C,K\subseteq X$ with $C$ closed and $K$ compact are strongly separated by a nonzero functional in $X^*$.

[A1] [[def-axiom-of-choice]] is used exactly when applying [F3] in step 2.1.

## Proof

1.1 Put $D=\overline{T(B_X(0,1))}$. It contains zero and is closed, convex and balanced: the image ball has these last two algebraic properties, and continuity of linear combinations preserves them on taking closure. For $g\in Y^*$, continuity and phase rotation in the unit ball give $\sup_{y\in D}\operatorname{Re}g(y)=\sup_{\|x\|<1}|g(Tx)|=\|T^*g\|$. The open-ball supremum equals the closed-ball supremum by scaling vectors by real numbers tending to one. [F1, F2]

2.1 If $y\notin D$, [F3] under [A1] strongly separates the nonempty closed convex set $D$ and compact singleton $\{y\}$ by a nonzero $g\in Y^*$, oriented so that $\operatorname{Re}g(y)>\sup_D\operatorname{Re}g$. Thus $\|g\|\|y\|\ge\operatorname{Re}g(y)>\|T^*g\|\ge\|g\|/C$, hence $\|y\|>1/C$. [F3, A1, step 1.1, given]

3.1 Consequently every point of norm less than $1/C$ lies in $D$. Zero was already in $D$. If $T=0$, the hypothesis forces $Y^*=0$; separation in step 2.1 rules out any point outside $D=\{0\}$, so the argument remains valid even in that degenerate case. [step 1.1, step 2.1] ∎
