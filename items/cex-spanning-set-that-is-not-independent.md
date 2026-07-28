---
id: cex-spanning-set-that-is-not-independent
kind: counterexample
title: "$\\{(1,0), (0,1), (1,1)\\}$ spans $F^{2}$ and is linearly dependent, so a spanning set need not be a basis; each of its three two-element subsets is a basis"
status: draft
origin: session
deps: [def-linear-independence, lem-dependent-iff-a-vector-lies-in-the-span-of-the-others, def-linear-basis, cor-every-spanning-set-contains-a-basis, lem-basis-iff-maximal-independent-iff-minimal-spanning, lem-standard-basis-of-f-n, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-dimension, thm-any-two-finite-bases-have-the-same-size, def-linear-combination-and-span, lem-span-monotone-and-idempotent, def-monoid-finite-product, def-function-space, def-vector-space, def-field, lem-vector-space-elementary-consequences, def-natural-numbers, lem-nat-order-is-membership, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: false
short: "a spanning set that is not a basis"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Basis (linear algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
    - title: "Linear independence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_independence"
pipeline_run: null
---

## Statement refuted

**False claim:** a spanning subset of a vector space is linearly independent, and
hence a basis.

Let $F$ be **any** field ([[def-field]]) and let $F^{2}$ be the function space on
$2 = \{0,1\}$ ([[def-function-space]]), whose elements we write $(y_0,y_1)$. Put

$$e_0 := (1_F, 0_F), \qquad e_1 := (0_F, 1_F), \qquad d := (1_F, 1_F) = e_0 + e_1,$$

and $S := \{e_0, e_1, d\}$, a set with exactly three elements. Then

1. $\operatorname{span}(S) = F^{2}$;
2. $S$ is linearly **dependent** ([[def-linear-independence]]), so $S$ is not a
   basis of $F^{2}$ ([[def-linear-basis]]);
3. each of the three two-element subsets $\{e_0,e_1\}$, $\{e_0,d\}$,
   $\{e_1,d\}$ **is** a basis of $F^{2}$.

The field is arbitrary; over a field in which $1_F + 1_F = 0_F$ the identity
$-1_F = 1_F$ holds and changes nothing below, the three displayed vectors still
being distinct because $1_F \ne 0_F$.

## Facts & Assumptions

**Given:** A field $F$, the vector space $F^{2}$ with pointwise operations, and the vectors $e_0$, $e_1$, $d = e_0+e_1$ and the set $S = \{e_0,e_1,d\}$.

[L1] $e : 2 \to F^{2}$ is an ordered basis of $F^{2}$, $e[2] = \{e_0,e_1\}$ is a basis, $\bigl(\sum_{i<2}\lambda_i e_i\bigr)(j) = \lambda_j$, and $\dim_F F^{2} = 2$ ([[lem-standard-basis-of-f-n]], claims 2, 3 and 4).

[L2] A list $w : n \to V$ is an ordered basis if and only if every $y \in V$ is $\sum_{i<n}\lambda_i w_i$ for exactly one $\lambda : n \to F$; an ordered basis is injective with a basis as its image ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]], [[def-linear-basis]]).

[L3] $\operatorname{span}$ is monotone and $\operatorname{span}(T) \subseteq V$ always ([[lem-span-monotone-and-idempotent]], [[def-linear-combination-and-span]]).

[L4] Finite sums: $\sum_{i<3}u_i = ((0_V + u_0) + u_1) + u_2$ and $\sum_{i<2}u_i = u_0 + u_1$ ([[def-monoid-finite-product]], [[def-linear-combination-and-span]]).

[L5] $(V,+,0_V)$ is an abelian group; $1_F y = y$, $(-1_F)y = -y$, $0_F y = 0_V$; (V2) and (V3); and $1_F \ne 0_F$, with $-1_F \ne 0_F$ ([[def-vector-space]], [[lem-vector-space-elementary-consequences]], [[def-field]]).

[L6] A subset $T$ is dependent when some injective finite list into $T$ is dependent; equivalently when some $t \in T$ lies in $\operatorname{span}(T\setminus\{t\})$ ([[def-linear-independence]], [[lem-dependent-iff-a-vector-lies-in-the-span-of-the-others]]).

[L7] Elements of $F^{2}$ are equal exactly when they agree at $0$ and at $1$ ([[def-function-space]], [[def-natural-numbers]], [[lem-nat-order-is-membership]]); injectivity is as in [[def-injection-surjection-bijection]].

## Counterexample

**Proof technique:** direct.

1.1 $S$ has exactly three elements. $e_0 \ne e_1$ because their values at $0$ are $1_F$ and $0_F$; $e_0 \ne d$ because their values at $1$ are $0_F$ and $1_F$; and $e_1 \ne d$ because their values at $0$ are $0_F$ and $1_F$. All three inequalities use only $1_F \ne 0_F$. [L5, L7]

1.2 Claim 1. From $\{e_0,e_1\} \subseteq S$ and monotonicity, $F^{2} = \operatorname{span}\{e_0,e_1\} \subseteq \operatorname{span}(S) \subseteq F^{2}$, so $\operatorname{span}(S) = F^{2}$. [L1, L3]

1.3 The pair $(e_0, d)$ is an ordered basis. For $\lambda : 2 \to F$, $\sum_{i<2}\lambda_i v_i$ with $v_0 = e_0$, $v_1 = d$ is $\lambda_0 e_0 + \lambda_1(e_0+e_1) = (\lambda_0 + \lambda_1)e_0 + \lambda_1 e_1$ by (V2), (V3) and the abelian group laws, which evaluates to $(\lambda_0+\lambda_1,\ \lambda_1)$. Given $y = (y_0,y_1)$, the equations $\lambda_0 + \lambda_1 = y_0$ and $\lambda_1 = y_1$ have the unique solution $\lambda_1 = y_1$, $\lambda_0 = y_0 - y_1$; so every $y$ has exactly one representation and $(e_0,d)$ is an ordered basis, whence $\{e_0, d\}$ is a basis of $F^{2}$. [L1, L2, L4, L5]

1.4 The pair $(e_1, d)$ is an ordered basis. Likewise $\lambda_0 e_1 + \lambda_1 d = \lambda_1 e_0 + (\lambda_0 + \lambda_1)e_1$ evaluates to $(\lambda_1,\ \lambda_0 + \lambda_1)$, and $\lambda_1 = y_0$, $\lambda_0 = y_1 - y_0$ is the unique solution; so $\{e_1, d\}$ is a basis of $F^{2}$. [L1, L2, L4, L5]

2.1 Claim 2. The list $v : 3 \to S$ with $v_0 = e_0$, $v_1 = e_1$, $v_2 = d$ is injective by step 1.1, and with $\lambda_0 = \lambda_1 = 1_F$ and $\lambda_2 = -1_F$ we get $\sum_{i<3}\lambda_i v_i = ((0_V + 1_F e_0) + 1_F e_1) + (-1_F)d = (e_0 + e_1) + (-d) = d + (-d) = 0_V$, while $\lambda_0 = 1_F \ne 0_F$. So $v$ is a dependent injective list into $S$ and $S$ is linearly dependent; a basis is independent, so $S$ is not a basis of $F^{2}$. [step 1.1, L4, L5, L6]

3.1 Claim 3, and the conclusion. $\{e_0,e_1\}$ is a basis by the standard basis lemma, and $\{e_0,d\}$ and $\{e_1,d\}$ are bases by steps 1.3 and 1.4; these are the three two-element subsets of the three-element set $S$ of step 1.1. Together with step 1.2 and step 2.1, the set $S$ spans $F^{2}$ and is dependent, refuting the false claim. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, L1] ∎

## Remarks

- **This makes [[cor-every-spanning-set-contains-a-basis]] concrete, and shows the contained basis is not unique.** $S$ spans and is not a basis; it contains three different bases, and no argument singles one out. By [[lem-basis-iff-maximal-independent-iff-minimal-spanning]] each of them is a minimal spanning subset of $F^{2}$, while $S$ itself is not minimal.

- **A spanning set may be larger than the dimension.** Here $\dim_F F^{2} = 2$ and $S$ has three elements. The bound of [[cor-independent-set-is-no-larger-than-a-finite-spanning-set]] runs the other way: it is *independent* sets that cannot exceed the size of a finite spanning set, and indeed no three vectors of $F^{2}$ are independent, by [[thm-any-two-finite-bases-have-the-same-size]] and that bound.

- **The field is arbitrary and is named.** Every step uses only the field axioms and $1_F \ne 0_F$. Over the two-element field the dependence reads $e_0 + e_1 + d = 0_V$, since $-1_F = 1_F$ there; the three vectors remain distinct and the three two-element subsets remain bases.
