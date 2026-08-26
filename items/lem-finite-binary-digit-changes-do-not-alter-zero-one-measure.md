---
id: lem-finite-binary-digit-changes-do-not-alter-zero-one-measure
kind: lemma
title: "A Lebesgue measurable subset of $[0,1]$ that is invariant under changing finitely many binary digits has measure $0$ or $1$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-lebesgue-outer-measure-and-measurability-are-translation-invariant,
       thm-lebesgue-measure-of-a-box-of-every-kind,
       thm-littlewood-characterisations-of-lebesgue-measurability,
       lem-countable-sets-are-null, thm-rationals-countable,
       thm-heine-borel-characterisation-r, def-open-cover-r, def-countable-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Sierpiński, Sur un problème concernant les ensembles mesurables superficiellement, Fund. Math. 1 (1920)"
      url: "https://eudml.org/doc/212823"
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Chapter 2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Let $A \subseteq [0,1]$ be Lebesgue
measurable, and suppose that whenever two points of $[0,1]$ have binary
expansions that differ at only finitely many indices, either both lie in $A$ or
both lie outside $A$. Then $\lambda(A)$ is either $0$ or $1$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a Lebesgue measurable set $A \subseteq [0,1]$ invariant under finite changes of binary digits.

[L1] Assuming countable choice, Lebesgue outer measure, Lebesgue measurability and Lebesgue measure are unchanged by translation ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[L2] Assuming countable choice, every interval with any endpoint convention is Lebesgue measurable with its usual length ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[L3] Assuming countable choice, a measurable subset of $\mathbb{R}$ admits closed inner approximation and open outer approximation ([[thm-littlewood-characterisations-of-lebesgue-measurability]], clauses 1 and 3); a closed subset of the bounded set $A\subseteq[0,1]$ is compact by [[thm-heine-borel-characterisation-r]].

[L4] Every at most countable subset of $\mathbb{R}$ has measure zero ([[lem-countable-sets-are-null]]).

[L5] $\mathbb{Q}$ is countably infinite ([[thm-rationals-countable]]).

[L6] A subset of $\mathbb{R}$ is compact if and only if it is closed and bounded ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

## Proof

**Proof technique:** contradiction.

1.1 Let $m:=\lambda(A)$ and let $D$ be the set of dyadic rationals in $[0,1]$, that is the numbers $k/2^n$ with $n \in \mathbb{N}$ and $0 \le k \le 2^n$. The set $D$ is at most countable, hence null by [L4]. For fixed $n \in \mathbb{N}$ and $0 \le k < 2^n$, write $I_{n,k}:=[k/2^n,(k+1)/2^n)$, and for $k=2^n-1$ replace the right endpoint by $1$ so that the family $(I_{n,k})_{k<2^n}$ partitions $[0,1]$. [L2, L4, L5, construct]

1.2 Suppose, for contradiction, that $0<m<1$. Choose a real $\varepsilon>0$ with $m-\varepsilon>m(m+\varepsilon)$. By [L3] choose a compact set $K \subseteq A$ with $\lambda(K)>m-\varepsilon$ and an open set $U \supseteq A$ with $\lambda(U)<m+\varepsilon$. [L3, L6, assume-contra, choose]

2.1 Fix $n$ and $k,\ell<2^n$. Away from the dyadics, translating $I_{n,k}$ onto $I_{n,\ell}$ changes only the first $n$ binary digits, so the invariance hypothesis and [L1] give $\lambda(A \cap I_{n,k})=\lambda(A \cap I_{n,\ell})$. Summing over the partition from step 1.1 and using [L2] gives $\lambda(A \cap I_{n,k})=m\,2^{-n}$ for every $k$, and therefore for every union $J$ of generation-$n$ dyadic intervals one has $\lambda(A \cap J)=m\,\lambda(J)$. [step 1.1, L1, L2, algebra]

2.2 For each $x \in K$, openness of $U$ gives a real $r_x>0$ with $(x-r_x,x+r_x)\subseteq U$. The smaller interval $(x-r_x/2,x+r_x/2)$ still contains $x$, so compactness of $K$ gives finitely many points $x_1,\dots,x_N \in K$ such that the intervals $J_i:=(x_i-r_i/2,\ x_i+r_i/2)$, where $r_i:=r_{x_i}$, cover $K$. Let $\rho := \min_{1 \le i \le N}(r_i/2)>0$, choose $n$ with $2^{-n}<\rho$, and let $J$ be the union of the generation-$n$ dyadic intervals meeting $K$. Then $K \subseteq J$. To prove $J \subseteq U$, let $D$ be one of those dyadic intervals and choose $z \in D \cap K$. Pick $i$ with $z \in J_i$. For any $y \in D$ one has $|y-x_i| \le |y-z| + |z-x_i| < 2^{-n} + r_i/2 < r_i$, because $D$ has length $2^{-n}$ and $z \in J_i$. Hence $y \in (x_i-r_i,x_i+r_i)\subseteq U$. So every such dyadic interval $D$ lies in $U$, and therefore $J \subseteq U$. [step 1.2, L2, L6, choose]

3.1 Step 2.1 applied to the set $J$ gives $\lambda(A \cap J)=m\,\lambda(J)$. Since $K \subseteq A \cap J \subseteq U$, steps 1.2 and 2.2 imply $$m-\varepsilon<\lambda(K)\le\lambda(A \cap J)=m\,\lambda(J)\le m\,\lambda(U)<m(m+\varepsilon),$$ contradicting the choice of $\varepsilon$. Therefore $m$ cannot lie strictly between $0$ and $1$, and $\lambda(A)\in\{0,1\}$. [step 2.1, step 1.2, step 2.2, discharge-contradiction] ∎
