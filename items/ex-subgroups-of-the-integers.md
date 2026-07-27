---
id: ex-subgroups-of-the-integers
kind: example
title: "$n\\mathbb{Z}$ is a subgroup of $(\\mathbb{Z}, +)$ for every $n \\in \\mathbb{Z}$, and every subgroup of $(\\mathbb{Z}, +)$ has this form"
status: published
origin: session
deps: [def-subgroup, lem-subgroup-criterion, def-generated-subgroup, lem-cyclic-subgroup-is-the-set-of-powers, def-group-power, thm-division-algorithm-in-z, thm-well-ordering-principle, def-integers, def-int-operations, def-int-order, thm-int-comm-ring, thm-int-ordered-ring, lem-nat-embeds-int, def-group, def-natural-numbers, def-nat-order, lem-nat-trichotomy, lem-nat-nonzero-is-successor, lem-nat-add-commutative, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
short: "subgroups of $\\mathbb{Z}$ are the $n\\mathbb{Z}$"
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
    - title: "Cyclic group (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cyclic_group"
    - title: "Subgroup (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subgroup"
pipeline_run: null
---

## Example

Work in the abelian group $(\mathbb{Z}, +, 0)$. For $n \in \mathbb{Z}$ put

$$n\mathbb{Z} \;:=\; \{\, nk \;:\; k \in \mathbb{Z} \,\}.$$

Then:

1. $n\mathbb{Z}$ is a subgroup of $(\mathbb{Z},+)$ for every $n \in \mathbb{Z}$
   ([[def-subgroup]]), and $n\mathbb{Z} = \langle n \rangle$
   ([[def-generated-subgroup]]);
2. conversely, every subgroup $H \le (\mathbb{Z},+)$ equals $n\mathbb{Z}$ for
   some $n \ge 0$; and $n$ may be taken to be $0$ if $H = \{0\}$ and otherwise
   the least positive element of $H$.

In particular every subgroup of $(\mathbb{Z},+)$ is cyclic.

## Facts & Assumptions

**Given:** The abelian group $(\mathbb{Z},+,0)$ ([[def-integers]], [[def-int-operations]], [[def-group]]), and the embedding $\iota : \mathbb{N} \to \mathbb{Z}$ of [[lem-nat-embeds-int]].

[L1] $\mathbb{Z}$ is a commutative ring, with $u - v := u + (-v)$ ([[thm-int-comm-ring]], [[def-int-operations]]); its order is total, antisymmetric, transitive and compatible with addition, and positives are closed under multiplication ([[thm-int-ordered-ring]], [[def-int-order]]).

[L2] $\iota$ is injective, preserves addition, multiplication and order, and its image is exactly the nonnegative integers; $\iota(0) = 0$, $\iota(1) = 1$ ([[lem-nat-embeds-int]]).

[L3] One-step test for subgroups, written additively: a nonempty $H \subseteq \mathbb{Z}$ with $x - y \in H$ for all $x, y \in H$ is a subgroup ([[lem-subgroup-criterion]], [[def-subgroup]]).

[L4] $\langle g \rangle$ is the smallest subgroup containing $g$, and equals the set of integer powers of $g$, which in additive notation are the multiples of $g$ ([[def-generated-subgroup]], [[lem-cyclic-subgroup-is-the-set-of-powers]], [[def-group-power]]).

[L5] Division with remainder: for $a \in \mathbb{Z}$ and $b > 0$ there are $q, r \in \mathbb{Z}$ with $a = qb + r$ and $0 \le r < b$ ([[thm-division-algorithm-in-z]]).

[L6] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L7] On $\mathbb{N}$: exactly one of $s < t$, $s = t$, $t < s$ holds ([[lem-nat-trichotomy]]); every $k \ne 0$ is a successor $\sigma(j) = 1 + j$, so $k \ne 0$ gives $1 \le k$ ([[lem-nat-nonzero-is-successor]], [[lem-nat-add-commutative]], [[def-nat-order]], [[def-natural-numbers]]).

[L8] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

## Verification

**Proof technique:** direct.

1.1 $n\mathbb{Z}$ is nonempty, containing $0 = n \cdot 0$; and for $x = nk$, $y = nk'$ in it, $x - y = nk - nk' = n(k - k') \in n\mathbb{Z}$ by distributivity. By the one-step test $n\mathbb{Z}$ is a subgroup of $(\mathbb{Z},+)$. [L1, L3]

1.2 In the additive group $(\mathbb{Z},+)$ the $k$-th power of $n$ is $nk$. For $k \in \mathbb{N}$ this holds by induction: the $0$-th power is the identity $0 = n \cdot 0$, and the power at $\sigma(k)$ is the power at $k$ plus $n$, which is $n\iota(k) + n = n(\iota(k)+1) = n\iota(\sigma(k))$. For a negative integer $x$ with $-x = \iota(k)$, the $x$-th power is the additive inverse of $n\iota(k)$, namely $n(-\iota(k)) = nx$. [L1, L2, L4, L8]

1.3 Let $H \le (\mathbb{Z},+)$ with $H \ne \{0\}$. Choose $x \in H$ with $x \ne 0$; then $-x \in H$ as well, and by totality one of $x$, $-x$ is positive, so $H$ contains a positive integer. [L1, L3, choose]

2.1 Hence $\langle n \rangle$, the set of integer powers of $n$, is exactly $\{\, nk : k \in \mathbb{Z} \,\} = n\mathbb{Z}$. With step 1.1 this is claim 1. [step 1.1, step 1.2, L4]

2.2 Every positive integer is $\iota(k)$ for a unique $k \in \mathbb{N}$ with $k \ne 0$, hence with $k \ge 1$. So $S := \{\, k \in \mathbb{N} : k \ge 1 \text{ and } \iota(k) \in H \,\}$ is nonempty by step 1.3; let $m$ be its least element and put $n := \iota(m)$, a positive element of $H$. [step 1.3, L2, L6, L7]

3.1 $n\mathbb{Z} \subseteq H$: by step 2.1, $n\mathbb{Z} = \langle n \rangle$, and $\langle n \rangle$ is contained in every subgroup containing $n$, in particular in $H$. [step 2.1, step 2.2, L4]

4.1 $H \subseteq n\mathbb{Z}$: let $h \in H$ and divide $h = qn + r$ with $0 \le r < n$, legitimate since $n > 0$. Then $qn \in n\mathbb{Z} \subseteq H$, so $r = h - qn \in H$ because $H$ is closed under subtraction. If $r > 0$ then $r = \iota(t)$ with $t \ge 1$, and $\iota(t) < \iota(m)$ gives $t < m$, since otherwise $m \le t$ would give $\iota(m) \le \iota(t)$, contradicting antisymmetry; that puts $t$ in $S$ below its least element, which is impossible. Hence $r = 0$ and $h = qn \in n\mathbb{Z}$. [step 2.2, step 3.1, L1, L2, L3, L5, L7]

5.1 So $H = n\mathbb{Z}$ with $n$ the least positive element of $H$; and if $H = \{0\}$ then $H = 0\mathbb{Z}$, since $0 \cdot k = 0$ for every $k$. This is claim 2, and with claim 1 it shows every subgroup of $(\mathbb{Z},+)$ is $\langle n \rangle$ for some $n \ge 0$, hence cyclic. [step 2.1, step 2.2, step 3.1, step 4.1, L1, L4] ∎

## Remarks

- **Both halves use the division algorithm, but only the second one visibly.** The first half is pure closure arithmetic; the second is the standard argument that a subgroup containing a least positive element $n$ can contain nothing strictly between the multiples of $n$, and it is exactly [[thm-division-algorithm-in-z]] that produces the offending remainder.

- **$n$ and $-n$ generate the same subgroup**, since $(-n)k = n(-k)$, so the $n$ in claim 2 is unique only after normalising it to be nonnegative. The normalisation is what the phrase "the least positive element" achieves.

- Inclusion among these subgroups is divisibility: $m\mathbb{Z} \subseteq n\mathbb{Z}$ holds exactly when $n \mid m$. Indeed the inclusion applied to $k = 1$ gives $m \in n\mathbb{Z}$, that is $m = nc$ for some $c$; and conversely $m = nc$ gives $mk = n(ck) \in n\mathbb{Z}$ for every $k$. The systematic study of the divisibility relation belongs to a later page.
