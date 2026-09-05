---
id: thm-increasing-functions-split-uniquely-as-jump-plus-continuous
kind: theorem
title: "A nondecreasing function splits uniquely into a jump part and a continuous part"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-jump-function-of-an-increasing-function, def-monotone-function, thm-froda, thm-monotone-discontinuities-are-jumps, thm-monotone-one-sided-limits-exist]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. M. Bruckner, J. B. Bruckner, and B. S. Thomson, Real Analysis, 2nd ed., Chapter 7"
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
---

## Statement

Let $a\le b$, let $F : [a,b] \to \mathbb{R}$ be nondecreasing, and let $J_F$ be the jump
function of [[def-jump-function-of-an-increasing-function]], and put

$$C_F := F - J_F.$$

Then:

1. $J_F$ and $C_F$ are nondecreasing;
2. if $a<b$ and $(s_n)_{n \in A}$ is any enumeration without repetitions of the discontinuity set of $F$ in
   $(a,b)$, where $A \subseteq \mathbb{N}$, then for every $x>a$,
   $$J_F(x)=\beta_a+\sum_{n \in A,\ s_n\le x}\bigl(F(s_n)-F(s_n^-)\bigr)+\sum_{n \in A,\ s_n<x}\bigl(F(s_n^+)-F(s_n)\bigr)+\mathbf 1_{\{b\}}(x)\bigl(F(b)-F(b^-)\bigr);$$
3. $C_F$ is continuous on $[a,b]$;
4. $F = J_F + C_F$ on $[a,b]$, and $J_F$ has exactly the same left and right
   jumps as $F$;
5. when $a<b$, the endpoint defect at $a$, the interior left and right jump
   sizes, and the left jump at $b$ determine $J_F$ pointwise, and then
   $C_F=F-J_F$ is forced; when $a=b$, one has $J_F(a)=0$ and $C_F(a)=F(a)$.

## Facts & Assumptions

**Given:** Reals $a\le b$, the nondecreasing function
$F : [a,b] \to \mathbb{R}$, the jump function $J_F$, and the remainder
$C_F = F-J_F$.

[A1] The symbols are those of the statement.

## Proof

**Proof technique:** direct.

1.1 If $a=b$, the definition gives $J_F(a)=0$ and $C_F(a)=F(a)$, so all five claims are immediate on the singleton interval. Hence assume $a<b$ from now on. [given]

1.2 If $a < x < y \le b$, every finite pair $(S,T)$ with $S \subseteq (a,x]$ and $T \subseteq (a,x)$ is also admissible for $y$, so $J_F(x)\le J_F(y)$. The comparison with $x=a$ follows from $J_F(a)=0$ and the nonnegative definition of $J_F(y)$. Thus $J_F$ is nondecreasing on $[a,b]$. [given]

2.1 Fix $a\le x<y\le b$. First suppose $x>a$, and split any finite pair $(S,T)$ admissible in the definition of $J_F(y)$ into its old part $S_0\subseteq(a,x]$, $T_0\subseteq(a,x)$ and its new part $S_1\subseteq(x,y]$, $T_1\subseteq[x,y)$. The old contribution, including $\beta_a$, is at most $J_F(x)$. Order the distinct points of $S_1\cup T_1$. Monotonicity of $F$ makes the new jump contributions telescope through disjoint successive value intervals from $F(x)$ to $F(y)$; this includes the possible right jump $F(x^+)-F(x)$ when $x\in T_1$, and gives a total at most $F(y)-F(x)$. Taking the supremum over $(S,T)$ yields $J_F(y)-J_F(x)\le F(y)-F(x)$. If $x=a$, the endpoint contribution $\beta_a=F(a^+)-F(a)$ followed by the jumps in $(a,y]$ and $(a,y)$ telescopes in the same way, giving more precisely $0\le J_F(y)-\beta_a\le F(y)-F(a^+)$ and hence $J_F(y)\le F(y)-F(a)$. Therefore the increment inequality holds for every $a\le x<y\le b$, and $$C_F(y)-C_F(x)=F(y)-F(x)-\bigl(J_F(y)-J_F(x)\bigr)\ge0.$$ Thus $C_F$ is nondecreasing, proving claim 1. [step 1.2, algebra]

3.1 By [[thm-froda]], the discontinuity set of $F$ in $(a,b)$ is at most countable; index it without repetitions as $(s_n)_{n \in A}$ for some $A \subseteq \mathbb{N}$. At points outside that set both interior one-sided jump sizes vanish. The only remaining possible contribution in the defining supremum is the left jump at $b$, which occurs exactly when $x=b$. Thus [[def-jump-function-of-an-increasing-function]] agrees with the nonnegative series $$J_F(x)=\beta_a+\sum_{n \in A,\ s_n\le x}\bigl(F(s_n)-F(s_n^-)\bigr)+\sum_{n \in A,\ s_n<x}\bigl(F(s_n^+)-F(s_n)\bigr)+\mathbf 1_{\{b\}}(x)\bigl(F(b)-F(b^-)\bigr) \qquad (x>a).$$ This is claim 2. [step 2.1]

4.1 Fix $c \in (a,b)$. Step 3.1 shows that $$J_F(c)-J_F(c^-)=F(c)-F(c^-), \qquad J_F(c^+)-J_F(c)=F(c^+)-F(c).$$ Therefore $$C_F(c)-C_F(c^-)=0, \qquad C_F(c^+)-C_F(c)=0.$$ Since $C_F$ is nondecreasing, [[thm-monotone-one-sided-limits-exist]] gives the one-sided limits at $c$, and the displayed equalities force $C_F(c^-)=C_F(c)=C_F(c^+)$. Hence $C_F$ is continuous at every interior point. Moreover, the displayed equalities show that $J_F$ has exactly the same left and right jumps as $F$. This proves claim 4 except for the tautological identity $F=J_F+C_F$. [step 2.1, step 3.1]

4.2 To treat the endpoints, note first that step 2.1 with $x=a$ gives $0 \le J_F(x)-\beta_a \le F(x)-\lim_{t \to a^+}F(t)$ for every $x>a$. Because the right-hand side tends to $0$ as $x \downarrow a$, $J_F(x) \to \beta_a$. Hence $$C_F(x)=F(x)-J_F(x)\longrightarrow \lim_{x \to a^+}F(x)-\beta_a=F(a)=C_F(a),$$ so $C_F$ is right-continuous at $a$. At $b$, the endpoint term in step 3.1 gives $$J_F(b)-J_F(b^-)=F(b)-F(b^-),$$ and therefore $C_F(b^-)=C_F(b)$. Thus $C_F$ is continuous on all of $[a,b]$. This proves claim 3. [step 2.1, step 3.1]

5.1 Claim 4 contains the identity $F=J_F+C_F$ by definition of $C_F$. For claim 5, step 3.1 expresses $J_F(x)$ pointwise in terms of $\beta_a$, the interior left and right jump sizes of $F$, and the left jump at $b$, so those data determine $J_F$ uniquely. Once $J_F$ is fixed, the remainder is forced by $C_F=F-J_F$. [step 3.1, step 4.2]

6.1 Steps 1.1 through 5.1 prove the theorem. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 4.2, step 5.1] ∎
