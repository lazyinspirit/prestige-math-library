---
id: lem-associates-characterisation
kind: lemma
title: "For integers $a$ and $b$ the following are equivalent: $a \\mid b$ and $b \\mid a$; $b = ua$ for a unit $u$; $|a| = |b|$. Being associates is an equivalence relation whose class of $a$ is $\\{a, -a\\}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-associates-in-z, def-divides-in-z, lem-divisibility-basic, lem-divisor-bound, lem-units-of-z, def-int-abs, lem-int-abs-properties, def-equivalence-relation, lem-equivalence-classes-partition, thm-int-comm-ring, thm-int-ordered-ring, def-int-order, def-int-operations]
justified_by: []
aliases: []
landmark: false
short: "associates: $|a| = |b|$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Divisibility (ring theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Divisibility_(ring_theory)"
    - title: "Divisor (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Divisor"
    - title: "Unit (ring theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Unit_(ring_theory)"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{Z}$. The following are equivalent:

1. $a \mid b$ and $b \mid a$, that is, $a \sim b$ ([[def-associates-in-z]]);
2. $b = ua$ for some unit $u \in \mathbb{Z}^{\times} = \{1,-1\}$
   ([[lem-units-of-z]]);
3. $|a| = |b|$ ([[def-int-abs]]).

Moreover $\sim$ is an equivalence relation on $\mathbb{Z}$
([[def-equivalence-relation]]), and the class of $a$ is

$$[a] \;=\; \{\, a, \, -a \,\},$$

which is $\{0\}$ when $a = 0$ and has exactly two elements otherwise.

## Facts & Assumptions

**Given:** Integers $a$ and $b$, and the relation $\sim$ of [[def-associates-in-z]].

[L1] $\mathbb{Z}$ is a commutative ring, with $-(-x) = x$, $(-x)y = -(xy)$, $x \cdot 1 = x$ and $x \cdot 0 = 0$ ([[thm-int-comm-ring]], [[def-int-operations]]).

[L2] The order on $\mathbb{Z}$ is total, antisymmetric and transitive, is compatible with addition ($x \le y$ implies $x + z \le y + z$), and positives are closed under multiplication ($0 < x$ and $0 < y$ imply $0 < xy$) ([[thm-int-ordered-ring]], [[def-int-order]]).

[L3] $d \mid a$ means $a = dq$ for some $q$; $0 \mid a$ only for $a = 0$ ([[def-divides-in-z]]).

[L4] Divisibility is reflexive and transitive, and $d \mid a$ implies $d \mid -a$ and $-d \mid a$ ([[lem-divisibility-basic]]).

[L5] If $d \mid a$ and $a \ne 0$ then $d \ne 0$ and $|d| \le |a|$ ([[lem-divisor-bound]]).

[L6] $\mathbb{Z}^{\times} = \{1,-1\}$: an integer $u$ is a unit exactly when $u = 1$ or $u = -1$, and $1 \ne -1$ ([[lem-units-of-z]]).

[L7] $|x| = x$ when $x \ge 0$ and $|x| = -x$ when $x \le 0$ ([[def-int-abs]]); $|x| \ge 0$, $|x| = 0$ exactly when $x = 0$, and $|xy| = |x|\,|y|$ ([[lem-int-abs-properties]]).

[L8] A relation is an equivalence relation when it is reflexive, symmetric and transitive, and then the class of $a$ is $[a] = \{\, b : a \sim b \,\}$ ([[def-equivalence-relation]]).

[L9] The classes of an equivalence relation are nonempty, cover the set, and are pairwise equal or disjoint ([[lem-equivalence-classes-partition]]).

## Proof

**Proof technique:** direct.

1.1 Every integer $x$ satisfies $x = |x|$ or $x = -|x|$: by totality either $x \ge 0$, when $|x| = x$, or $x \le 0$, when $|x| = -x$ and so $x = -(-x) = -|x|$. [L1, L2, L7]

1.2 $1 \ne 0$, $0 < 1$, $|1| = 1$ and $|-1| = 1$. Indeed $1 = 0$ would give $-1 = -0 = 0 = 1$, contradicting $1 \ne -1$ in [L6]. By totality either $0 \le 1$ or $1 \le 0$; in the second case adding $-1$ gives $0 \le -1$, and $-1 \ne 0$ (else $1 = 0$), so $0 < -1$, hence $0 < (-1)(-1) = 1$, which with $1 \le 0$ contradicts antisymmetry. So $0 \le 1$, and $0 < 1$ since $1 \ne 0$; then $|1| = 1$, while $0 \le 1$ gives $-1 \le 0$ by compatibility with addition, so $|-1| = -(-1) = 1$. [L1, L2, L6, L7]

1.3 Claim 1 implies claim 3. Suppose $a \mid b$ and $b \mid a$. If $a = 0$ then $0 \mid b$ forces $b = 0$, so $|a| = 0 = |b|$. If $a \ne 0$, then $b \mid a$ with $a \ne 0$ gives $b \ne 0$ and $|b| \le |a|$, and $a \mid b$ with $b \ne 0$ gives $|a| \le |b|$; antisymmetry gives $|a| = |b|$. [L2, L3, L5, L7]

1.4 $\sim$ is reflexive, since $a \mid a$; symmetric, since its defining condition is unchanged when $a$ and $b$ are interchanged; and transitive, since $a \mid b$, $b \mid c$ give $a \mid c$ and $c \mid b$, $b \mid a$ give $c \mid a$. So it is an equivalence relation. [L4, L8]

2.1 Claim 3 implies claim 1. Suppose $|a| = |b|$. By step 1.1, $b$ is $|b|$ or $-|b|$, that is $|a|$ or $-|a|$; and, again by step 1.1, $|a|$ is $a$ or $-a$. Hence $b = a$ or $b = -a$. If $b = a$ then $a \mid b$ and $b \mid a$ by reflexivity. If $b = -a$ then $a \mid -a = b$ by [L4]; and $b = -a$ gives $a = -(-a) = -b$, so $b \mid -b = a$, again by [L4]. [step 1.1, L1, L4]

2.2 Claim 2 implies claim 3. If $b = ua$ with $u$ a unit then $u = 1$ or $u = -1$, so $|u| = 1$ by step 1.2, and $|b| = |u|\,|a| = |a|$. [step 1.2, L6, L7]

3.1 Claim 3 implies claim 2. By step 2.1, $|a| = |b|$ gives $b = a = 1 \cdot a$ or $b = -a = (-1)a$, and $1$ and $-1$ are units. [step 2.1, L1, L6]

4.1 The three claims are equivalent: claim 3 implies claim 1 by step 2.1 and claim 1 implies claim 3 by step 1.3, while claim 3 implies claim 2 by step 3.1 and claim 2 implies claim 3 by step 2.2. [step 2.1, step 1.3, step 2.2, step 3.1]

5.1 The class of $a$ is $[a] = \{\, b : a \sim b \,\} = \{\, b : |b| = |a| \,\} = \{a, -a\}$: the middle equality is the equivalence of claims 1 and 3, and the last holds because $|{-a}| = |a|$ by [L7], while conversely $|b| = |a|$ gives $b = a$ or $b = -a$ by step 2.1. At $a = 0$ this set is $\{0\}$, since $-0 = 0$; and for $a \ne 0$ it has exactly two elements, since by totality either $0 < a$, when adding $-a$ gives $-a < 0 < a$, or $a < 0$, when adding $-a$ gives $a < 0 < -a$; in both cases $a \ne -a$. [step 2.1, step 4.1, L1, L2, L7, L8]

6.1 By [L9] the classes $\{a,-a\}$ are nonempty, cover $\mathbb{Z}$, and any two are equal or disjoint; together with steps 4.1, 1.4 and 5.1 this is the full statement. [step 4.1, step 1.4, step 5.1, L9] ∎

## Remarks

- **This is the "up to sign" of elementary number theory made precise.** Every statement below that fixes a sign — $\gcd(a,b) \ge 0$, $\operatorname{lcm}(a,b) \ge 0$, the nonnegative generator of a subgroup of $(\mathbb{Z},+)$ — is choosing one representative from a class $\{a,-a\}$, and claim 3 is what says the choice is between exactly two candidates.

- **The equivalence of claims 1 and 2 is the general ring-theoretic statement**, and it is the reason associates are defined by mutual divisibility rather than by "differ by a sign": mutual divisibility is the formulation that survives when the unit group is larger than $\{1,-1\}$.
