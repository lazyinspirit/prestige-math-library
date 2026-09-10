---
id: lem-countable-uniformly-dense-tests-on-a-compact-metric-space
kind: lemma
title: Countable uniformly dense tests on a compact metric space
deps: ["def-metric-compactness", "def-totally-bounded", "lem-distance-to-set-is-lipschitz", "thm-compact-implies-complete-and-totally-bounded", "def-axiom-of-choice", "thm-heine-cantor-metric"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: van Gaans, Proposition 5.3, pp. 15–16; explicit countable-test replacement for its Alaoglu step
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assume AC. For a compact metric K, $C(K;\mathbb R)$ has a countable uniformly dense subset in the supremum norm.

## Facts & Assumptions

[F1] [[thm-compact-implies-complete-and-totally-bounded]]: Let $(X,d)$ be a compact metric space (def-metric-compactness,
def-metric-space). Then $(X,d)$ is totally bounded
(def-totally-bounded) and complete (def-complete-metric-space).

**Both implications are theorems of ZF.** Completeness is obtained here from the
finite intersection characterisation (thm-compact-iff-finite-intersection-property)
applied to the closures of the tails of a Cauchy sequence, and not from the
extraction of a convergent subsequence, which would route the argument through
sequential compactness. What matters for the ledger is that the route taken below
selects nothing at all; the first remark below says why the other route was not
taken.

[F2] [[lem-distance-to-set-is-lipschitz]]: Let $(X,d)$ be a metric space (def-metric-space), let $A \subseteq X$ be
nonempty and let $x, y \in X$. Then

$$|d(x,A) - d(y,A)| \le d(x,y),$$

with $d(\cdot,A)$ the distance to a nonempty set (def-metric-bounded-diameter).
Thus the real-valued function $u \mapsto d(u,A)$ changes by at most $d(u,v)$
between $u$ and $v$: it is **$1$-Lipschitz**.

[F3] [[thm-heine-cantor-metric]]: Let $(X,d_X)$ be a compact metric space (def-metric-compactness), let
$(Y,d_Y)$ be any metric space (def-metric-space) and let $f : X \to Y$ be
continuous (def-metric-continuity). Then $f$ is uniformly continuous
(def-metric-uniform-continuity).

No choice principle is used: the cover built below is cut out by a property, and
the Lebesgue number lemma it is fed to is itself choice free
(thm-lebesgue-number-lemma).

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 If K is empty there is one function and the assertion holds. Otherwise F1 supplies finite 1/m-nets. AC chooses these nets with finite listings; their countable union D is dense. Consider all functions $x\mapsto\min_{1\le j\le l}(q_j+L d(x,a_j))$, with finite lists $a_j\in D$, rational $q_j$ and positive integer L, optionally clipped between rational constants. These form a countable family of continuous functions; F2 with singleton sets gives the needed continuity. [F1, F2]

1.2 Fix continuous f, $\eta$>0 and $M\ge\|f\|_\infty$. By F3 choose $\delta$>0 so $d(x,y)<\delta$ implies $|f(x)-f(y)|<\eta$. Choose integer L with $L\delta>2M$. Then $g(x)=\inf_{y\in K}(f(y)+Ld(x,y))$ obeys $g(x)\le f(x)$ by y=x. For d(x,y)<$\delta$ the expression is at least f(x)-$\eta$; for d(x,y)>=$\delta$ it is greater than -M+2M>=f(x). Thus $f(x)-\eta\le g(x)\le f(x)$. [F3]

2.1 Choose a finite net $a_1,\ldots,a_l$ from D with mesh h<$\delta$ and Lh<$\eta$, and rational $q_j$ with $|q_j-f(a_j)|<\eta$. For any y choose $a_j$ within h; uniform continuity gives $f(a_j)+Ld(x,a_j)\le f(y)+Ld(x,y)+2\eta$. Taking the infimum over y and allowing the rational error proves $g(x)-\eta\le\min_j(q_j+Ld(x,a_j))\le g(x)+3\eta$. Together with step 1.2 the error from f is at most 3eta. Rational clipping bounds containing f(K) cannot increase it. Letting $\eta$ decrease proves density. [step 1.2] ∎
