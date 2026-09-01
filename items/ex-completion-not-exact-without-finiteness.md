---
id: ex-completion-not-exact-without-finiteness
kind: example
title: "Completion need not be exact without a finiteness hypothesis"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-completion-is-exact-on-finite-modules, def-adic-completion-of-a-module]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise 22.19"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Example

Let $p$ be a prime integer, let
$$
M:=\bigoplus_{n \ge 1} \mathbb Z e_n,
$$
and define an endomorphism
$$
f \colon M \to M,\qquad f(e_n)=p^n e_n.
$$
Then
$$
0 \to M \xrightarrow{f} M \to \operatorname{coker}(f) \to 0
$$
is exact, but the induced map on $(p)$-adic completions
$$
\widehat f \colon \widehat M \to \widehat M
$$
is not surjective. So completion is not exact without a finiteness hypothesis.

## Facts & Assumptions

**Given:** A prime integer $p$, the module $M=\bigoplus_{n \ge 1}\mathbb Z e_n$,
and the map $f(e_n)=p^n e_n$.

[L1] The $(p)$-adic completion of a module is the inverse limit of the quotients
$M/p^rM$ ([[def-adic-completion-of-a-module]]).

[L2] Exactness of completion on finite modules is a genuinely finite statement
([[thm-completion-is-exact-on-finite-modules]]).

## Verification

**Proof technique:** direct.

1.1 The map $f$ is injective because, if $$f\!\left(\sum_{i=1}^N a_ie_i\right)=\sum_{i=1}^N a_ip^ie_i=0,$$ then every coefficient $a_ip^i$ is $0$ and hence every $a_i$ is $0$. Therefore $$0 \to M \xrightarrow{f} M \to \operatorname{coker}(f) \to 0$$ is exact. [given, algebra]

1.2 For each $N \ge 1$, set $$s_N:=\sum_{n=1}^N p^n e_n \in M.$$ If $N' > N$, then $$s_{N'}-s_N=\sum_{n=N+1}^{N'} p^n e_n \in p^{N+1}M.$$ For each $r\ge1$, define $x_r$ to be the class of $s_N$ modulo $p^rM$ for any $N\ge r$. The displayed containment makes this independent of $N$, and the classes $x_r$ are compatible under reduction. Hence $x=(x_r)_r$ is an element of $\widehat M$ by [L1]. [L1, construct]

2.1 Suppose $x=\widehat f(y)$ for some $y \in \widehat M$. Let $\overline y$ be the image of $y$ in $$M/pM=\bigoplus_{n \ge 1} (\mathbb Z/p\mathbb Z)e_n.$$ Because this is a direct sum, $\overline y$ has finite support. But for each $n \ge 1$, comparing the $e_n$-component modulo $p^{n+1}$ shows that the $e_n$-coefficient of $\overline y$ must be $1 \in \mathbb Z/p\mathbb Z$, since $f$ multiplies the $e_n$-coordinate by $p^n$ and $x$ has $e_n$-coefficient $p^n$ modulo $p^{n+1}$. Thus $\overline y$ would have infinitely many nonzero coordinates, a contradiction. So $x \notin \operatorname{im}(\widehat f)$. [step 1.2, algebra]

3.1 Every partial sum $s_N$ from step 1.2 lies in $\operatorname{im}(f)$, so its image in $\operatorname{coker}(f)$ is $0$. Therefore the compatible family $x\in\widehat M$ maps to $0$ in every quotient $\operatorname{coker}(f)/p^r\operatorname{coker}(f)$, hence to $0$ in $\widehat{\operatorname{coker}(f)}$. Step 2.1 showed that $x\notin\operatorname{im}(\widehat f)$, so the completed sequence fails exactness at the middle term. This is exactly the failure excluded by the finite-generation hypothesis in [L2]. [L2, step 1.2, step 2.1] ∎
