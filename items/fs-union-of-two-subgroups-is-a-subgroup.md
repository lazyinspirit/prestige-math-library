---
id: fs-union-of-two-subgroups-is-a-subgroup
kind: false-statement
title: "The union of two subgroups is a subgroup"
status: published
origin: session
deps: [def-subgroup, lem-subgroup-criterion, lem-intersection-of-subgroups, def-group, def-integers, def-int-operations, def-int-order, thm-int-comm-ring, thm-int-ordered-ring, thm-division-algorithm-in-z, lem-nat-embeds-int]
justified_by: []
aliases: []
landmark: false
short: "FALSE: $H \\cup K$ is a subgroup"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Subgroup (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subgroup"
    - title: "Union (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Union_(set_theory)"
pipeline_run: null
---

## Statement

**False claim:** if $H$ and $K$ are subgroups of a group $G$ ([[def-subgroup]]),
then $H \cup K$ is a subgroup of $G$.

The corresponding statement for **intersections** is true and is
[[lem-intersection-of-subgroups]]. For unions it fails, and the smallest natural
witness is inside $(\mathbb{Z},+)$: take
$H = 2\mathbb{Z} = \{\, 2k : k \in \mathbb{Z} \,\}$ and
$K = 3\mathbb{Z} = \{\, 3k : k \in \mathbb{Z} \,\}$, both subgroups by the
one-step test ([[lem-subgroup-criterion]]). Then $2 \in H$ and $3 \in K$, so both
lie in $H \cup K$, while their sum $5$ lies in neither.

Throughout, $2 := 1+1$, $3 := 2+1$, $4 := 3+1$ and $5 := 4+1$ in $\mathbb{Z}$.

## Facts & Assumptions

**Given:** The abelian group $(\mathbb{Z},+,0)$ ([[def-integers]], [[def-int-operations]], [[def-group]]), the sets $H = 2\mathbb{Z} = \{\, 2k : k \in \mathbb{Z} \,\}$ and $K = 3\mathbb{Z} = \{\, 3k : k \in \mathbb{Z} \,\}$, and the numerals $2 = 1+1$, $3 = 2+1$, $4 = 3+1$, $5 = 4+1$.

[L1] $\mathbb{Z}$ is a commutative ring ([[thm-int-comm-ring]], [[def-int-operations]]); its order is total, antisymmetric and transitive and is compatible with addition ([[thm-int-ordered-ring]], [[def-int-order]]).

[L2] $0 < 1$ in $\mathbb{Z}$: $1 = \iota(1)$ lies in the image of $\iota$, hence $0 \le 1$, and $1 \ne 0$ because $\iota$ is injective and $1 \ne 0$ in $\mathbb{N}$ ([[lem-nat-embeds-int]]).

[L3] One-step test, written additively: a nonempty $S \subseteq \mathbb{Z}$ with $x - y \in S$ for all $x, y \in S$ is a subgroup of $(\mathbb{Z},+)$; a subgroup contains the identity and is closed under the operation and under inverses ([[lem-subgroup-criterion]], [[def-subgroup]]).

[L4] Division with remainder: for $a \in \mathbb{Z}$ and $b > 0$ there is exactly one pair $(q,r)$ of integers with $a = qb + r$ and $0 \le r < b$ ([[thm-division-algorithm-in-z]]).

[L5] A subgroup is closed under the operation ([[def-subgroup]], [[lem-subgroup-criterion]]).

[L6] The refuted claim: for all subgroups $H, K$ of a group $G$, the union $H \cup K$ is a subgroup of $G$.

## Refutation

**Proof technique:** direct.

1.1 $0 < 1 < 2 < 3$: adding $1$ to $0 < 1$ gives $1 < 2$, and adding $1$ again gives $2 < 3$; transitivity chains them. In particular $0 \le 1 < 2$ and $0 \le 2 < 3$. [L1, L2]

1.2 $2 \cdot 2 = 4$ and $3 \cdot 1 = 3$: by distributivity $2 \cdot 2 = 2(1+1) = 2 + 2 = (2+1)+1 = 3 + 1 = 4$, and $3 \cdot 1 = 3$ by the multiplicative identity law. [L1, given]

1.3 For every $n \in \mathbb{Z}$ the set $n\mathbb{Z} = \{\, nk : k \in \mathbb{Z} \,\}$ is a subgroup of $(\mathbb{Z},+)$: it contains $0 = n \cdot 0$ and is therefore nonempty, and for $x = nk$ and $y = nk'$ in it, $x - y = nk - nk' = n(k - k') \in n\mathbb{Z}$ by distributivity, so the one-step test applies. In particular $H = 2\mathbb{Z}$ and $K = 3\mathbb{Z}$ are subgroups of $(\mathbb{Z},+)$. [L1, L3]

2.1 $5 = 2 \cdot 2 + 1$ and $5 = 3 \cdot 1 + 2$: the first is $4 + 1 = 5$ by step 1.2, and the second is $3 + 2 = (3+1)+1 = 4+1 = 5$ by associativity. [step 1.2, L1, given]

3.1 $5 \notin 2\mathbb{Z}$: if $5 = 2k$ then $5 = k \cdot 2 + 0$ with $0 \le 0 < 2$, while step 2.1 gives $5 = 2 \cdot 2 + 1$ with $0 \le 1 < 2$; uniqueness of the pair $(q,r)$ forces $0 = 1$, contradicting $0 < 1$. [step 1.1, step 2.1, L1, L2, L4]

3.2 $5 \notin 3\mathbb{Z}$: if $5 = 3k$ then $5 = k \cdot 3 + 0$ with $0 \le 0 < 3$, while step 2.1 gives $5 = 1 \cdot 3 + 2$ with $0 \le 2 < 3$; uniqueness forces $0 = 2$, contradicting $0 < 1 < 2$. [step 1.1, step 2.1, L1, L2, L4]

4.1 $2 = 2 \cdot 1 \in 2\mathbb{Z} = H$ and $3 = 3 \cdot 1 \in 3\mathbb{Z} = K$, so both lie in $H \cup K$; but $2 + 3 = 5$ lies in neither by steps 3.1 and 3.2, hence not in $H \cup K$. [step 1.3, step 2.1, step 3.1, step 3.2, L1, given]

5.1 So $H \cup K$ is not closed under the operation of $(\mathbb{Z},+)$ and is therefore not a subgroup, although $H$ and $K$ both are by step 1.3; the claim of [L6] is false. [step 1.3, step 4.1, L5, L6] ∎

## Remarks

- **Intersections behave, unions do not.** An intersection of subgroups is always a subgroup ([[lem-intersection-of-subgroups]]), which is what makes $\langle S \rangle$ definable as the smallest subgroup containing $S$ ([[def-generated-subgroup]]). There is no corresponding "largest subgroup contained in $H \cup K$" construction on the union side, and the failure above is why.

- **The exact condition.** For subgroups $H, K$ of a group $G$, the union $H \cup K$ is a subgroup **if and only if** $H \subseteq K$ or $K \subseteq H$. One direction is immediate, the union then being the larger of the two. For the other, suppose neither inclusion holds and choose $h \in H \setminus K$ and $k \in K \setminus H$. If $hk$ were in $H$ then $k = h^{-1}(hk) \in H$, and if $hk$ were in $K$ then $h = (hk)k^{-1} \in K$; both contradict the choice, so $hk \notin H \cup K$ and the union is not closed.

- The witness above is an instance of that criterion: neither $2\mathbb{Z}$ nor $3\mathbb{Z}$ contains the other, since $2 \notin 3\mathbb{Z}$ and $3 \notin 2\mathbb{Z}$, both by the uniqueness argument of steps 3.1 and 3.2 applied to $2 = 0 \cdot 3 + 2$ and $3 = 1 \cdot 2 + 1$.
