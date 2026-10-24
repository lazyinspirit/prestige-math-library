---
verification:
  repair: research/quantum-computing-algorithms-60-2026-10-15-owner/published-repairs/thm-complex-hahn-banach-norm-preserving-extension.json
id: thm-complex-hahn-banach-norm-preserving-extension
kind: theorem
title: "A bounded complex linear functional on a subspace of a complex normed space extends with the same norm"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-axiom-of-choice, thm-hahn-banach-norm-preserving-extension, lem-real-part-determines-a-complex-linear-functional, def-complex-norm-and-complex-normed-space, lem-complex-norm-realification-is-a-real-norm, def-complex-normed-subspace, lem-complex-normed-subspace-realifies-to-real-normed-subspace]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Daniel Daners, Introduction to Functional Analysis, Theorem 26.4"
      url: "https://www.maths.usyd.edu.au/u/athomas/FunctionalAnalysis/daners-functional-analysis-2017.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, Theorem 4.14"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement

Assume the Axiom of Choice. Let $X$ be a complex normed space, let $M \subseteq X$ be a linear subspace, and
let $f_0:M \to \mathbb{C}$ be a bounded complex linear functional. Then there
exists a bounded complex linear functional $F:X \to \mathbb{C}$ such that
$F|_M=f_0$ and $\|F\|=\|f_0\|$.

## Facts & Assumptions

**Given:** The Axiom of Choice, A complex normed space $X$, a linear subspace $M \subseteq X$, and a bounded complex linear functional $f_0:M \to \mathbb{C}$.

[A1] AC is used through the real extension supplier [L1] in step 2.1.

[L1] A bounded real linear functional on a real normed subspace extends with the same norm ([[thm-hahn-banach-norm-preserving-extension]]).

[L2] A complex linear functional is recovered from its real part by $f(x)=u(x)-iu(ix)$, and conversely every such formula defines a complex linear functional ([[lem-real-part-determines-a-complex-linear-functional]]).

[L3] The complex norm axioms are those of [[def-complex-norm-and-complex-normed-space]]. The same norm is a real norm on realification ([[lem-complex-norm-realification-is-a-real-norm]]); a complex-linear subspace carries its restricted complex norm ([[def-complex-normed-subspace]]) and realifies to a real normed subspace with the same norm and restricted metric ([[lem-complex-normed-subspace-realifies-to-real-normed-subspace]]).

## Proof

**Proof technique:** direct.

1.1 Let $u:=\operatorname{Re}f_0$. By [L2], $u$ is real linear on the underlying real subspace $M$. Also $$|u(m)| \le |f_0(m)| \le \|f_0\|\,\|m\| \qquad (m \in M),$$ so $u$ is bounded with $\|u\| \le \|f_0\|$. [L2, given, algebra]

2.1 Apply [L1] to the underlying real normed spaces. This yields a bounded real linear functional $U:X \to \mathbb{R}$ extending $u$ and satisfying $\|U\|=\|u\|$. Define $$F(x):=U(x)-iU(ix) \qquad (x \in X).$$ By [L2], $F$ is complex linear and $\operatorname{Re}F=U$. [L1, L2, L3, step 1.1, construct]

3.1 For $m \in M$, the equality $U|_M=u$ and [L2] give $$F(m)=u(m)-iu(im)=f_0(m).$$ So $F$ extends $f_0$. [L2, step 2.1]

3.2 Fix $x \in X$. Choose $\theta \in \mathbb{R}$ so that $e^{i\theta}F(x)=|F(x)|$ is a nonnegative real number. Since $\operatorname{Re}F=U$ and $F$ is complex linear, $$|F(x)|=\operatorname{Re}(e^{i\theta}F(x)) =\operatorname{Re}F(e^{i\theta}x)=U(e^{i\theta}x).$$ Therefore $$|F(x)| \le \|U\|\,\|e^{i\theta}x\|=\|U\|\,\|x\| \le \|f_0\|\,\|x\|,$$ where the last inequality uses step 1.1 and $\|U\|=\|u\|$. Hence $\|F\| \le \|f_0\|$. [L2, L3, step 1.1, step 2.1, choose, algebra]

4.1 Since $F|_M=f_0$, every $m \in M$ with $\|m\| \le 1$ satisfies $|f_0(m)|=|F(m)| \le \|F\|$. Taking the supremum over the unit ball of $M$ gives $\|f_0\| \le \|F\|$. Combined with step 3.2, this yields $\|F\|=\|f_0\|$. [step 3.1, step 3.2, algebra] ∎
