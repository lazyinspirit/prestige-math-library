---
id: lem-nonarchimedean-absolute-value-criterion
kind: lemma
title: "An absolute value is nonarchimedean exactly when every integer has absolute value at most one"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-multiplicative-absolute-value-on-a-field]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 5"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes5.pdf"
    - title: "J. S. Milne, Algebraic Number Theory, Chapter 7"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field with absolute value $|\cdot|$ in the sense of
[[def-multiplicative-absolute-value-on-a-field]]. Then $|\cdot|$ is
nonarchimedean if and only if

$$|n \cdot 1_F| \le 1$$

for every integer $n$.

## Facts & Assumptions

**Given:** A field $F$ and an absolute value $|\cdot|$ on $F$.

[L1] An absolute value is multiplicative and satisfies both the ordinary and,
in the nonarchimedean case, the strong triangle inequality
([[def-multiplicative-absolute-value-on-a-field]]).

## Proof

**Proof technique:** direct.

1.1 Since $1_F \ne 0$, multiplicativity in [L1] gives $|1_F| = |1_F|^2$, hence $|1_F| = 1$. Also $|-1|^2 = |1| = 1$, so $|-1| = 1$. [L1, given, algebra]

1.2 Assume conversely that $|n1_F| \le 1$ for every integer $n$. Fix $x,y \in F$ and put $M := \max\{|x|,|y|\}$. If $M = 0$ there is nothing to prove, so scale by a nonzero element and reduce to $M = 1$. Then every binomial coefficient has absolute value at most $1$, so $$|(x+y)^m| \le \max_{0 \le k \le m} \left|\binom{m}{k}\right|\,|x|^k |y|^{m-k} \le 1$$ for every $m \ge 1$. Hence $|x+y|^m \le 1$ for all $m$, so $|x+y| \le 1 = M$. Undoing the scaling gives $|x+y| \le \max\{|x|,|y|\}$. [L1, given, algebra]

2.1 Assume first that $|\cdot|$ is nonarchimedean. For $n \ge 1$, induction using step 1.1 and $|(n+1)1_F| \le \max\{|n1_F|,|1_F|\}$ gives $|n1_F| \le 1$. For negative $n$, $|n1_F| = |-1|\,|(-n)1_F| \le 1$, and $|0| = 0 \le 1$. [L1, step 1.1, induction]

3.1 Thus the integer bound implies the strong triangle inequality, and step 2.1 proved the reverse implication. [step 2.1, step 1.2] ∎
