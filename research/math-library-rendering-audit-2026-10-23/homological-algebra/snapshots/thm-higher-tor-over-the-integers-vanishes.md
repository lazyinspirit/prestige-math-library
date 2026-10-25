---
id: thm-higher-tor-over-the-integers-vanishes
title: "Higher Tor over the integers vanishes"
kind: theorem
status: published
origin: pipeline
deps: ["def-balanced-tor-bifunctor", "def-tor-by-resolving-the-right-module", "cor-every-module-is-a-quotient-of-a-free-module", "def-free-module-on-a-set-and-standard-basis", "thm-well-ordering-theorem", "thm-transfinite-induction", "thm-free-modules-are-projective-with-choice-boundary", "thm-division-algorithm-in-z", "thm-well-ordering-principle", "def-axiom-of-choice", "def-dependent-choice", "thm-recursion"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized local defect repair; no independent judge or owner audit"
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice. Every abelian group has a projective resolution of length at most one, and for abelian groups $A,B$, $\operatorname{Tor}^{\mathbb Z}_i(A,B)=0$ for $i\ge2$.

Separately, without any choice assumption, a supplied projective resolution $0\to P_1\to P_0\to A\to0$ satisfies $H_i(P_\bullet\otimes_{\mathbb Z}B)=0$ for $i\ge2$. This last clause is a calculation for the specified resolution, not an assertion of its existence or of change-of-resolution coherence in ZF.

## Proof

**Given:** abelian groups $A,B$; AC for the existence and balanced-Tor assertions, or the supplied short resolution for the final conditional clause.

1.1 The canonical free cover $\varepsilon:\mathbb Z^{(A)}\twoheadrightarrow A$ exists by [[cor-every-module-is-a-quotient-of-a-free-module]]. The integers are a PID: a nonzero ideal has a least positive integer $d$ by [[thm-well-ordering-principle]], and division with remainder by $d$ from [[thm-division-algorithm-in-z]] shows that every element is a multiple of $d$; the zero ideal is principal as well. [given, construct]

1.2 For any supplied length-one projective resolution $P_\bullet\to A$, the tensor complex $P_\bullet\otimes B$ has zero terms in every degree $i\ge2$. Its homology in those degrees is therefore zero. This proves the conditional choice-free clause and the corresponding right-resolution construction of [[def-tor-by-resolving-the-right-module]]. [given, algebra]

2.1 Write $F=\mathbb Z^{(A)}$ and $K=\ker\varepsilon$. Under [[def-axiom-of-choice]], well-order its standard basis index set $A$ by [[thm-well-ordering-theorem]]. For an index $a$ write $F_{\le a}$ and $F_{<a}$ for the spans of the indicated initial segments. Let $I_a\le\mathbb Z$ be the image of $K\cap F_{\le a}$ under the $a$-coordinate map. The integer calculation of step 1.1 gives $I_a=d_a\mathbb Z$ with $d_a>0$ if it is nonzero. [step 1.1, given, construct]

3.1 For every $a$ with $I_a\ne0$, the set of vectors $x\in K\cap F_{\le a}$ having $a$-coordinate $d_a$ is nonempty. AC chooses one such $x_a$ for every such index at once. Each vector has finite support by [[def-free-module-on-a-set-and-standard-basis]]. These simultaneous lifts and the preceding well-order are the two uses of AC in kernel freeness. [step 2.1, given, choose]

4.1 Use [[thm-transfinite-induction]] on the basis order to prove that $K\cap F_{\le a}$ is spanned by the $x_b$ with $b\le a$. For $y$ in that subgroup, if $I_a=0$ its $a$-coordinate is zero; otherwise write that coordinate as $c d_a$ and subtract $c x_a$. The resulting vector lies in $K\cap F_{<a}$. If it is nonzero, its finite support has a greatest index $b<a$, and the induction hypothesis at $b$ applies. A zero remainder needs no terms. This proves the assertion at least, successor, and limit positions alike. Every nonzero member of $K$ has a greatest support index, so the chosen family spans $K$. [step 2.1, step 3.1, algebra]

5.1 In a nonzero finite integer relation among the $x_a$, take the greatest index $a$ with nonzero coefficient $c_a$. Its $a$-coordinate is $c_a d_a\ne0$, since every lower-index vector has zero coordinate there. This contradicts the relation. Thus the family is independent and is a basis of $K$; the empty family correctly handles $K=0$. [step 2.1, step 3.1, step 4.1, algebra]

6.1 By [[thm-free-modules-are-projective-with-choice-boundary]], AC makes both $K$ and $F$ projective. Hence $0\to K\to F\to A\to0$ is a projective resolution of length at most one. This last use of AC selects preimages of arbitrary basis families in the free-projectivity theorem; the canonical free cover itself used no choice. [step 1.1, step 5.1, given, algebra]

7.1 To obtain DC locally, given an entire relation $E$ on a nonempty set $X$ and $x_0\in X$, AC chooses $s(x)\in\{y:xEy\}$ for every $x\in X$; [[thm-recursion]] then gives $x_{n+1}=s(x_n)$ from the prescribed $x_0$. This proves the exact DC hypothesis of [[def-dependent-choice]]. The short resolutions from step 6.1 (also applied to $B$) and that DC hypothesis permit [[def-balanced-tor-bifunctor]] to identify the specified-resolution homology with the balanced groups $\operatorname{Tor}^{\mathbb Z}_i(A,B)$. Step 1.2 gives their vanishing for all $i\ge2$. This accounts separately for the choice needed by the change-of-resolution interface. [step 6.1, step 1.2, given, algebra] ∎
