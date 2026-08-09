## Selection reasons

- critical risk (11): 14 declared dependencies; 13 cited facts; 27 numbered proof steps; boundary-sensitive language; induction, recursion, or minimality

## Target item — `thm-urysohn-lemma`

Normalized current SHA-256: `88bbada89a01b1aa8ccc35a521ac7e655fe454d7e077790805bfab3e7af26646`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-urysohn-lemma
kind: theorem
title: "Urysohn's lemma, under the axiom of dependent choice: in a normal space two disjoint closed sets are separated by a continuous function into $[0,1]$, and conversely such a space is normal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function,
       def-the-dyadic-rationals-of-the-unit-interval, def-normal-and-t4-spaces,
       lem-normality-via-shrinking, def-dependent-choice, lem-finite-choice,
       def-choice-function, def-continuous-map-top, thm-continuity-characterisations-top,
       def-interior-closure-boundary-top, def-interval, def-topological-space,
       def-subspace-topology-top, lem-real-line-is-a-metric-space]
justified_by: []
external_refs: [rem-urysohn-lemma-not-a-zf-theorem]
aliases: [thm-urysohn]
landmark: true
short: "Urysohn's lemma (DC)"
proof_strategy: constructive
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "S. Willard, General Topology, §15"
      url: "https://en.wikipedia.org/wiki/General_topology"
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). Let
$(X, \mathcal{T})$ be a topological space.

1. If $X$ is normal ([[def-normal-and-t4-spaces]]) and $A, B \subseteq X$ are
   disjoint closed sets, there is a continuous $f : X \to [0,1]$
   ([[def-continuous-map-top]], [[def-interval]]) with
   $A \subseteq f^{-1}(\{0\})$ and $B \subseteq f^{-1}(\{1\})$.
2. Conversely, if every pair of disjoint closed subsets of $X$ admits a
   continuous function into $[0,1]$ separating them in the sense of clause 1,
   then $X$ is normal. **This direction uses no choice principle.**

**Where the choice principle of clause 1 is spent, and why not less.** The
construction below builds, for each $n \in \mathbb{N}$, an assignment of an
open set to every dyadic rational of level $n$, extending the level-$(n-1)$
assignment; at each single level the finitely many new open sets are chosen at
once by [[lem-finite-choice]], a theorem of ZF, but stringing together
infinitely many such levels, each depending on the one before, is exactly the
situation dependent choice is for. The published
[[rem-urysohn-lemma-not-a-zf-theorem]] records, with its sources, that
$\mathrm{ZF}$ and even $\mathrm{ZF}$ together with the Axiom of Countable
Choice do not suffice, and that dependent choice does; nothing here claims
dependent choice is *necessary* for clause 1, only that the construction given
is carried out in $\mathrm{ZF} + \mathrm{DC}$.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ and dependent choice.

[A1] $\mathrm{DC}$: for every nonempty set $P$, every relation $R \subseteq P \times P$ entire on $P$ (every $p \in P$ has some $q \in P$ with $p \mathbin{R} q$), and every $a \in P$, there is a sequence $(p_k)_{k \in \mathbb{N}}$ with $p_0 = a$ and $p_k \mathbin{R} p_{k+1}$ for every $k$ ([[def-dependent-choice]]).

[L1] Shrinking: if $X$ is normal, $C \subseteq X$ is closed and $O \subseteq X$ is open with $C \subseteq O$, then there is open $W$ with $C \subseteq W \subseteq \overline{W} \subseteq O$ ([[lem-normality-via-shrinking]]).

[L2] Finite choice: a function $F$ with domain a natural number $n$, all of whose values are nonempty sets, admits a choice function for the family $F[n]$ of its values ([[lem-finite-choice]], [[def-choice-function]]), a theorem of ZF.

[L3] The dyadic rationals $D = \bigcup_{n} D_n$ of $[0,1]$ are an increasing union of finite levels; for $n \in \mathbb{N}$, $D_{n+1} = D_n \cup \{\, t_j : 0 \le j < 2^n \,\}$, where $t_j$ is strictly between the $D_n$-consecutive pair $r_j := j/2^n$ and $s_j := (j+1)/2^n$, the $2^n$ points $t_j$ are pairwise distinct and disjoint from $D_n$, and every two elements of $D$ lie together in some common $D_n$ ([[def-the-dyadic-rationals-of-the-unit-interval]]).

[L4] Chaining: if $V_0, \dots, V_k$ ($k \ge 0$) are subsets of $X$ with $\overline{V_i} \subseteq V_{i+1}$ for every $i < k$, then $\overline{V_0} \subseteq V_k$, since $V_i \subseteq \overline{V_i} \subseteq V_{i+1}$ for each $i$ ([[def-interior-closure-boundary-top]]) makes $\overline{V_0} \subseteq V_1 \subseteq V_2 \subseteq \cdots \subseteq V_k$ a chain of inclusions.

[L5] The generic construction: if $(U_r)_{r \in D}$ is a family of open subsets of $X$ with $\overline{U_r} \subseteq U_s$ whenever $r<s$ in $D$ and $U_1 = X$, then $g(x) := \inf(\{r \in D : x \in U_r\} \cup \{1\})$ is a continuous map $X \to [0,1]$ ([[lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function]]).

[L6] The order rays $(-\infty,\tfrac12)$ and $(\tfrac12,\infty)$ are open in the usual topology of $\mathbb R$ ([[lem-real-line-is-a-metric-space]], clause 3), so their traces $[0,\tfrac12)$ and $(\tfrac12,1]$ are open in the subspace topology of $[0,1]$ ([[def-subspace-topology-top]], [[def-interval]]). They are disjoint and contain $0$ and $1$, respectively.

[L7] Preimages of open sets under a continuous map are open ([[thm-continuity-characterisations-top]], clause (b), [[def-continuous-map-top]]).

[L8] $A \subseteq \overline{A}$ for every $A \subseteq X$ ([[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** constructive.

1.1 Assume $X$ is normal and $A, B \subseteq X$ are disjoint closed sets (the hypothesis of clause 1). [assume-hyp]

1.2 Assume instead that every pair of disjoint closed subsets of $X$ admits a continuous function into $[0,1]$ separating them as in clause 1 (the hypothesis of clause 2). [assume-hyp]

2.1 Under step 1.1: $A \subseteq X \setminus B$, since $A \cap B = \varnothing$, and $X \setminus B$ is open since $B$ is closed; by [L1] applied to the closed set $A$ and the open set $X \setminus B$, fix open $\Phi_0(0)$ with $A \subseteq \Phi_0(0) \subseteq \overline{\Phi_0(0)} \subseteq X \setminus B$, and put $\Phi_0(1) := X \setminus B$, defining $\Phi_0 : D_0 \to \mathcal{T}$ on $D_0 = \{0,1\}$. [step 1.1, L1, choose, construct]

2.2 Under step 1.2: let $C, E \subseteq X$ be disjoint closed sets; fix a continuous $h : X \to [0,1]$ with $C \subseteq h^{-1}(\{0\})$ and $E \subseteq h^{-1}(\{1\})$. [step 1.2, choose]

3.1 Under step 1.1: $A \subseteq \Phi_0(0)$; $\overline{\Phi_0(0)} \subseteq \Phi_0(1)$; and $\Phi_0(1) = X \setminus B$. [step 2.1]

3.2 Under step 1.2, continuing: by [L6], $[0,\tfrac12)$ and $(\tfrac12,1]$ are open in $[0,1]$, disjoint, with $0 \in [0,\tfrac12)$ and $1 \in (\tfrac12,1]$; put $O_1 := h^{-1}(\,[0,\tfrac12)\,)$ and $O_2 := h^{-1}(\,(\tfrac12,1]\,)$, open in $X$ by [L7]. [step 2.2, L6, L7]

4.1 Under step 1.1: for $n \in \mathbb{N}$, call $\Phi : D_n \to \mathcal{T}$ **admissible at level $n$** when (i) $\overline{\Phi(r)} \subseteq \Phi(s)$ for every $r < s$ in $D_n$; (ii) $A \subseteq \Phi(0)$; (iii) $\Phi(1) = X \setminus B$. Put $P := \{\, (n,\Phi) : n \in \mathbb{N},\ \Phi \text{ admissible at level } n \,\}$, and for $(n,\Phi), (n',\Phi') \in P$ say $(n,\Phi) \mathbin{R} (n',\Phi')$ when $n' = n+1$ and $\Phi'|_{D_n} = \Phi$. By step 3.1, $(0,\Phi_0) \in P$. [step 3.1, construct]

4.2 Under step 1.2: $C \subseteq O_1$, since $h \equiv 0 \in [0,\tfrac12)$ on $C$; $E \subseteq O_2$, since $h \equiv 1 \in (\tfrac12,1]$ on $E$; and $O_1 \cap O_2 = h^{-1}\big(\,[0,\tfrac12) \cap (\tfrac12,1]\,\big) = h^{-1}(\varnothing) = \varnothing$. [step 2.2, step 3.2, L6]

5.1 Under step 1.1: let $(n,\Phi) \in P$. For each $j$ with $0 \le j < 2^n$, with $r_j, s_j, t_j$ as in [L3]: since $r_j < s_j$ in $D_n$, admissibility (i) gives $\overline{\Phi(r_j)} \subseteq \Phi(s_j)$, so by [L1] the set of open $W$ with $\overline{\Phi(r_j)} \subseteq W \subseteq \overline{W} \subseteq \Phi(s_j)$ is nonempty. [step 4.1, L1, L3]

5.2 Under step 1.2: since $C, E$ were an arbitrary disjoint closed pair, step 4.2 exhibits disjoint open supersets for every such pair, so $X$ is normal by [[def-normal-and-t4-spaces]]; this is clause 2, and no step of it used [A1]. [step 4.2]

6.1 Under step 1.1, continuing under step 5.1: by [L2] applied to the function assigning, to each $j < 2^n$, the nonempty set of open $W$ with $\overline{\Phi(r_j)} \subseteq W \subseteq \overline{W} \subseteq \Phi(s_j)$, fix a simultaneous choice, giving open $W_j$ with $\overline{\Phi(r_j)} \subseteq W_j \subseteq \overline{W_j} \subseteq \Phi(s_j)$ for every $0 \le j < 2^n$. [step 5.1, L2, choose]

7.1 Under step 1.1: define $\Phi' : D_{n+1} \to \mathcal{T}$ by $\Phi'|_{D_n} := \Phi$ and $\Phi'(t_j) := W_j$ for $0 \le j < 2^n$; this is well defined since $D_{n+1} = D_n \cup \{t_j : 0 \le j < 2^n\}$ with the $t_j$ pairwise distinct and disjoint from $D_n$ by [L3]. Then $(n,\Phi) \mathbin{R} (n+1,\Phi')$. [step 6.1, L3, construct]

8.1 Under step 1.1, with $\Phi, \Phi'$ as in step 7.1: for the $D_{n+1}$-consecutive pair $(r_j, t_j)$: $\overline{\Phi'(r_j)} = \overline{\Phi(r_j)} \subseteq W_j = \Phi'(t_j)$ by step 6.1; for the pair $(t_j, s_j)$: $\overline{\Phi'(t_j)} = \overline{W_j} \subseteq \Phi(s_j) = \Phi'(s_j)$ by step 6.1. [step 7.1, step 6.1]

9.1 Under step 1.1: for $x < y$ in $D_{n+1}$, the finitely many elements of $D_{n+1} \cap [x,y]$, listed increasingly as $x = u_0 < u_1 < \cdots < u_k = y$, are $D_{n+1}$-consecutive at each step $u_i < u_{i+1}$, and each such pair is one of the pairs of step 8.1 (every $D_{n+1}$-consecutive pair has at least one member among the new points $t_j$, since a new point was inserted into every $D_n$-consecutive gap); so $\overline{\Phi'(u_i)} \subseteq \Phi'(u_{i+1})$ at each step, and [L4] gives $\overline{\Phi'(x)} = \overline{\Phi'(u_0)} \subseteq \Phi'(u_k) = \Phi'(y)$. [step 8.1, L3, L4]

10.1 Under step 1.1: $A \subseteq \Phi'(0) = \Phi(0)$, since $0 \in D_n$ is unaffected by the extension; $\Phi'(1) = \Phi(1) = X \setminus B$, since $1 \in D_n$ is likewise unaffected; with step 9.1 this is admissibility of $\Phi'$ at level $n+1$, so $(n+1,\Phi') \in P$. [step 7.1, step 9.1, L3]

11.1 Under step 1.1: by steps 5.1, 6.1, 7.1 and 10.1, every $(n,\Phi) \in P$ has some $(n+1,\Phi') \in P$ with $(n,\Phi) \mathbin{R} (n+1,\Phi')$; so $R$ is entire on $P$. [step 7.1, step 10.1]

12.1 Under step 1.1: $P$ is nonempty by step 4.1 and $R$ is entire on $P$ by step 11.1; by [A1] applied with $a := (0,\Phi_0)$, there is a sequence $\big((m_k,\Psi_k)\big)_{k \in \mathbb{N}}$ with $(m_0,\Psi_0) = (0,\Phi_0)$ and $(m_k,\Psi_k) \mathbin{R} (m_{k+1},\Psi_{k+1})$ for every $k$. [step 4.1, step 11.1, A1, construct]

13.1 Under step 1.1: since $(n,\Phi) \mathbin{R} (n',\Phi')$ forces $n' = n+1$, and $m_0 = 0$, induction on $k$ gives $m_k = k$ for every $k \in \mathbb{N}$; so each $\Psi_k : D_k \to \mathcal{T}$ is admissible at level $k$, and $\Psi_{k+1}|_{D_k} = \Psi_k$ for every $k$. [step 12.1]

14.1 Under step 1.1: for $r \in D$, fix $n$ with $r \in D_n$ [L3] and define $V_r := \Psi_n(r)$; by step 13.1, for $n \le n'$ with $r \in D_n$, $\Psi_{n'}(r) = \Psi_n(r)$ (chaining $\Psi_{n'}|_{D_n} = \Psi_n$ through the intermediate levels), so $V_r$ does not depend on the level $n$ chosen. [step 13.1, L3, construct]

15.1 Under step 1.1: for $r < s$ in $D$, fix $n$ with $r, s \in D_n$ [L3]; then $\overline{V_r} = \overline{\Psi_n(r)} \subseteq \Psi_n(s) = V_s$ by admissibility (i) of $\Psi_n$. Also $A \subseteq V_0$ and $V_1 = X \setminus B$, by admissibility (ii) and (iii) of $\Psi_n$ for any $n$. [step 14.1, step 13.1, L3]

16.1 Under step 1.1: define $U_r := V_r$ for $r \in D$ with $r < 1$, and $U_1 := X$. For $r < s$ in $D$: if $s < 1$, $\overline{U_r} = \overline{V_r} \subseteq V_s = U_s$ by step 15.1; if $s = 1$, $\overline{U_r} = \overline{V_r} \subseteq V_1 = X \setminus B \subseteq X = U_1$ by step 15.1. So $\overline{U_r} \subseteq U_s$ whenever $r < s$ in $D$, and $U_1 = X$. [step 15.1, construct]

17.1 Under step 1.1: by [L5] applied to $(U_r)_{r \in D}$ of step 16.1, $f(x) := \inf(\{r \in D : x \in U_r\} \cup \{1\})$ is a continuous map $X \to [0,1]$. [step 16.1, L5]

17.2 Under step 1.1: for $b \in B$ and $r \in D$ with $r < 1$: fix $n$ with $r \in D_n$ [L3]; since $1 \in D_n$ also, admissibility (i) of $\Psi_n$ applied to $r < 1$ gives $\overline{\Psi_n(r)} \subseteq \Psi_n(1) = X \setminus B$, that is $\overline{V_r} \subseteq X \setminus B$; since $V_r \subseteq \overline{V_r}$ by [L8] and $U_r = V_r$ by step 16.1, $U_r \cap B = \varnothing$, so $b \notin U_r$. [step 14.1, step 13.1, step 16.1, L3, L8]

18.1 Under step 1.1: for $a \in A$: $a \in V_0$ by step 15.1, and $U_0 = V_0$ by step 16.1 (as $0 < 1$), so $a \in U_0$ and $0 \in \{r \in D : a \in U_r\}$; hence $f(a) \le 0$, and $f(a) \ge 0$ since $f$ maps into $[0,1]$ by step 17.1, so $f(a) = 0$. [step 17.1, step 16.1, step 15.1]

18.2 Under step 1.1: for $b \in B$: by step 17.2, $b \notin U_r$ for every $r \in D$ with $r < 1$, and $b \in U_1 = X$ by step 16.1; so $\{r \in D : b \in U_r\} \cup \{1\} = \{1\}$, giving $f(b) = \inf\{1\} = 1$. [step 17.2, step 16.1]

19.1 Steps 17.1, 18.1 and 18.2 show that, under the hypothesis of step 1.1, $f$ is a continuous map $X \to [0,1]$ with $A \subseteq f^{-1}(\{0\})$ and $B \subseteq f^{-1}(\{1\})$, which is clause 1. [step 17.1, step 18.1, step 18.2]

20.1 Steps 19.1 and 5.2 establish clauses 1 and 2 respectively. [step 19.1, step 5.2, discharge-construct] ∎

## Remarks

- **The lemma is stated for a normal space, not a $T_4$ space.** $T_1$ is used nowhere above; it is needed only to turn a *point* into a closed set, which is the extra step the next corollary spends. The published [[rem-urysohn-lemma-not-a-zf-theorem]] states the classical $T_4$ form; the form proved here is the more general one, and the two are not in tension — the $T_4$ form follows by adding the $T_1$ hypothesis, which is not used in this proof at all.

- **Only clause 1 costs a choice principle**, and it is spent at exactly one place: the single application of dependent choice in step 12.1, which strings together the countably many admissible levels built one finite step at a time in steps 5.1–10.1. Every other existential instantiation above (steps 2.1, 2.2 and 6.1) draws from a single nonempty set or, in step 6.1, from a finite family of them via [[lem-finite-choice]], and neither costs anything beyond ZF.

- **Why the construction tracks $X \setminus B$ rather than $X$ at $r=1$.** Recording $\Phi_n(1) := X \setminus B$ throughout the recursion, rather than $X$, is what makes admissibility clause (i) alone carry the whole $B$-avoidance property: since $1 \in D_n$ for every $n$, clause (i) applied to any $r<1$ already gives $\overline{\Phi_n(r)} \subseteq \Phi_n(1) = X \setminus B$, with no separate bookkeeping. Only at the very end, in step 16.1, is the top value widened from $X \setminus B$ to $X$, which is exactly what [[lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function]] requires.
````

## Wave 7 provenance row for the target

```json
{
  "id": "thm-urysohn-lemma",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Urysohn%27s_lemma",
    "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf",
    "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
  ],
  "rationale": "The classical equivalence and separator are sourced; the explicit DC hypothesis, finite-level state space, converse, and choice accounting are local alterations.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-topology-separation-urysohn.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-dependent-choice",
      "source_section": "Definition",
      "quote": "Let $X$ be a set and let $R \\subseteq X \\times X$ be a binary relation on $X$.\nCall $R$ **entire on $X$** when\n\n$$\\text{for every } x \\in X \\text{ there is } y \\in X \\text{ with } x \\mathbin{R} y .$$\n\nThe **Axiom of Dependent Choice**, written $\\mathrm{DC}$, is the following\nstatement.\n\n> For every nonempty set $X$, every relation $R$ entire on $X$, and every\n> $a \\in X$, there is a sequence $x : \\mathbb{N} \\to X$ ([[def-sequence]],\n> [[def-natural-numbers]]) with\n> $$x_0 = a \\qquad \\text{and} \\qquad x_n \\mathbin{R} x_{n+1} \\ \\text{ for every } n \\in \\mathbb{N}.$$\n\nAs everywhere in this library $\\mathbb{N}$ contains $0$, and the sequence is\nindexed from $0$; the term $x_0$ is the prescribed starting point $a$ and every\nlater term is related to its predecessor.\n\n**What DC adds to what came before.** [[def-choice-function]] and\n[[def-axiom-of-choice]] select one element from each member of a family that is\nfixed in advance, and [[def-countable-choice]] does the same for a family indexed\nby $\\mathbb{N}$. In both, the family is given before any selection is made. DC is\nthe principle needed when the $n$-th set to select from is not known until the\nfirst $n$ selections have been made: here the admissible values of $x_{n+1}$ are\nexactly the $R$-successors of $x_n$, so the family being chosen from is built\nalong the choosing. That is precisely the situation $\\mathrm{AC}_\\omega$ does not\ncover, and it is why a construction \"pick $x_{n+1}$ depending on $x_n$, for every\n$n$ at once\" is not licensed by countable choice.\n\n**The starting point may be dropped.** The formally weaker statement obtained by\ndeleting the clause $x_0 = a$ — for every nonempty $X$ and every entire $R$ there\nis a sequence with $x_n \\mathbin{R} x_{n+1}$ for all $n$ — is an immediate\nconsequence of the form above, since $X$ is nonempty and any of its elements may\nbe taken as $a$. The reverse derivation is standard and is not needed anywhere in\nthis library, so it is not carried out; every use below prescribes $x_0$.\n\n**$R$ need not be an order and the terms need not be distinct.** What DC delivers\nis a sequence, that is a function $\\mathbb{N} \\to X$, not a chain in the\norder-theoretic sense ([[def-chain]]). The relation may be symmetric, and the\nsequence may repeat a value or be constant; all that is asserted is\n$x_n \\mathbin{R} x_{n+1}$ at every index.",
      "uses": [
        "5.2",
        "12.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-normality-via-shrinking",
      "source_section": "Statement",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]), with\nclosures as in [[def-interior-closure-boundary-top]]. The following two\nconditions are equivalent.\n\n- **(a)** $X$ is normal ([[def-normal-and-t4-spaces]]).\n- **(b)** For every closed $A \\subseteq X$ and every open $U$ with\n  $A \\subseteq U$ there is an open $V$ with\n  $$A \\subseteq V \\subseteq \\overline{V} \\subseteq U .$$\n\nIn particular, in a normal space any two disjoint closed sets $A$ and $D$ admit\nan open $V \\supseteq A$ with $\\overline{V} \\cap D = \\varnothing$: apply (b) to\n$A$ and the open set $X \\setminus D$. That corollary is the form in which\nnormality is used later on this page.",
      "uses": [
        "2.1",
        "5.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-finite-choice",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ and let $F$ be a function with domain $n$ all of whose\nvalues are nonempty sets. Then the family of its values,\n$\\mathcal{F} = F[n] = \\{\\, F(i) : i \\in n \\,\\}$, has a choice function\n([[def-choice-function]]).\n\nThis is a theorem of ZF: its proof uses no form of the Axiom of Choice\n([[def-axiom-of-choice]]).\n\nWhat is proved below is exactly the displayed statement, by induction on $n$. The\nnatural number $n$ serves as the index set in the von Neumann sense,\n$n = \\{0, 1, \\dots, n-1\\}$ ([[def-natural-numbers]]), so \"$F$ has domain $n$\"\nsays precisely that the members of $\\mathcal{F}$ are listed as\n$F(0), \\dots, F(n-1)$. The listing need not be injective, and $\\mathcal{F}$ is the\nset of values, so repetitions are harmless and are not counted.\n\nThe displayed statement and its proof use only a natural-number-indexed\nfunction. They do not identify an arbitrary finite family with a particular\nenumeration.",
      "uses": [
        "6.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-choice-function",
      "source_section": "Definition",
      "quote": "Let $\\mathcal{F}$ be a family of sets, every member of which is nonempty. A\n**choice function** for $\\mathcal{F}$ is a function ([[def-function]])\n$$g : \\mathcal{F} \\to \\bigcup \\mathcal{F} \\qquad \\text{such that} \\qquad g(S) \\in S \\ \\text{ for every } S \\in \\mathcal{F}.$$\n\nGiven a set $X$, a **choice function on $X$** means a choice function for the\nfamily $\\mathcal{P}(X) \\setminus \\{\\emptyset\\}$ ([[def-power-set]],\n[[def-set-difference-and-symmetric-difference]]) of nonempty subsets of $X$.",
      "uses": [
        "6.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-the-dyadic-rationals-of-the-unit-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\iota$ is the canonical natural of $\\mathbb{R}$ ([[def-canonical-natural]]),\nand as is standard $\\iota(k)$ is abbreviated to $k$ once no ambiguity results\n([[cor-archimedean-reciprocal]]). For $m, n \\in \\mathbb{N}$, $m^n \\in \\mathbb{N}$ is the\nnatural-number power of [[def-nat-power]], distinct from but agreeing with the\nreal (integer) power $a^n$ of [[def-integer-power]] by that item's clause (d):\n$\\iota(m^n) = \\iota(m)^n$. Writing $2$ for $\\iota(2)$ as just agreed, this lets\n$2^n$ be read as a natural number **or** as the real $\\iota(2)^n$ interchangeably.\n\nFor $n \\in \\mathbb{N}$ put\n\n$$D_n \\;:=\\; \\Big\\{\\, \\frac{k}{2^n} \\;:\\; k \\in \\mathbb{N},\\ k \\le 2^n \\,\\Big\\} \\;\\subseteq\\; [0,1],$$\n\nthe order $\\le$ on the naturals $k$ and $2^n$ being that of [[def-nat-order]].\nEach $D_n$ is\na finite subset of $[0,1]$ ([[def-interval]]) with $0, 1 \\in D_n$ (the cases\n$k=0$ and $k=2^n$); it has at most $2^n+1$ elements, so is finite in the sense\nof [[def-countable]]. The **dyadic rationals of $[0,1]$** are\n\n$$D \\;:=\\; \\bigcup_{n \\in \\mathbb{N}} D_n \\;\\subseteq\\; [0,1],$$\n\na countable union of finite sets. Each **level** $D_n$ is nested in the next:\nif $k \\le 2^n$ then $2k \\le 2^{n+1}$ (multiplying the natural inequality by $2$),\nand $\\dfrac{k}{2^n} = \\dfrac{2k}{2^{n+1}}$ in $\\mathbb{R}$ (clearing the common\nfactor $\\iota(2)$, licensed by [[def-ordered-field]]), so every element of $D_n$\nis exhibited as an element of $D_{n+1}$; hence $D_0 \\subseteq D_1 \\subseteq\nD_2 \\subseteq \\cdots$ and $D = \\bigcup_n D_n$ is genuinely increasing, not\nmerely a union.\n\n**The level decomposition, stated and discharged here because the recursion of\n[[thm-urysohn-lemma]] consumes it.** For $n \\in \\mathbb{N}$,\n\n$$D_{n+1} \\;=\\; D_n \\,\\cup\\, \\Big\\{\\, t_j := \\frac{2j+1}{2^{n+1}} \\;:\\; j \\in \\mathbb{N},\\ j < 2^n \\,\\Big\\},$$\n\nand the new points $t_j$ are pairwise distinct, none lies in $D_n$, and each\nlies strictly between the $D_n$-consecutive pair $r_j := j/2^n$ and\n$s_j := (j+1)/2^n$. *Strict betweenness:* $2j < 2j+1 < 2j+2$, and dividing by\nthe positive $2^{n+1}$ preserves strict order ([[def-ordered-field]]), so\n$r_j = 2j/2^{n+1} < t_j < (2j+2)/2^{n+1} = s_j$. *Distinctness:* $j \\mapsto\n2j+1$ is injective. *Disjointness from $D_n$:* $t_j = k/2^n$ with\n$k \\le 2^n$ would give $2j+1 = 2k$ after clearing the positive factor\n$1/2^{n+1}$ and applying injectivity of $\\iota$; but $k \\le j$ gives\n$2k \\le 2j < 2j+1$, and $k \\ge j+1$ gives $2k \\ge 2j+2 > 2j+1$, so no such $k$\nexists. *The union is all of $D_{n+1}$:* given $k/2^{n+1}$ with\n$k \\le 2^{n+1}$, the set $\\{\\, i \\in \\mathbb{N} : 2i > k \\,\\}$ is nonempty\n($2(k+1) = 2k+2 > k$), so by [[thm-well-ordering-principle]] it has a least\nelement $i_0$, and $i_0 \\ge 1$ since $2 \\cdot 0 = 0 \\le k$; writing\n$i_0 = j+1$ ([[lem-nat-nonzero-is-successor]]) gives $2j \\le k < 2j+2$, so\n$k = 2j$ or $k = 2j+1$. In the first case $k/2^{n+1} = j/2^n \\in D_n$ (with\n$j \\le 2^n$ since $2j \\le 2^{n+1}$); in the second it is $t_j$ (with $j < 2^n$\nsince $2j+1 \\le 2^{n+1}$ forces $2j < 2^{n+1}$). Finally, **any two elements of\n$D$ lie together in a common level**: one lies in some $D_m$ and the other in\nsome $D_{m'}$, and both then lie in $D_{\\max(m,m')}$ by the nesting just\nproved.\n\n**$D$ is dense in $[0,1]$: for every $x \\in [0,1]$ and every real\n$\\varepsilon > 0$ there is $r \\in D$ with $|x - r| < \\varepsilon$.** First, a\ngrowth fact about natural-number powers, proved by induction on $n$\n([[thm-induction-principle]]): $2^n \\ge n+1$ for every $n \\in \\mathbb{N}$. At\n$n=0$, $2^0 = 1 = 0+1$. If $2^n \\ge n+1$, then $2^{n+1} = 2^n \\cdot 2 = 2^n + 2^n\n\\ge (n+1) + (n+1) = 2n+2 \\ge n+2 = (n+1)+1$, the middle inequality adding the\ninductive hypothesis to itself and the last holding since $n \\ge 0$; both steps\nuse only that the order of $\\mathbb{N}$ is compatible with addition\n([[def-nat-order]]). Transporting the inequality into $\\mathbb{R}$ by the\norder-preserving $\\iota$ ([[lem-of-naturals-positive]]) gives $\\iota(2^n) \\ge\n\\iota(n+1) = \\iota(n)+1$ for every $n$.\n\nNow fix $x \\in [0,1]$ and a real $\\varepsilon > 0$. By\n[[cor-archimedean-reciprocal]] fix a natural $m \\ge 1$ with $1/m < \\varepsilon$.\nPut $n := m$; then $\\iota(2^n) \\ge \\iota(n)+1 = \\iota(m)+1 > \\iota(m) > 0$, so by\n[[lem-of-inverse-positive]] $0 < 1/2^n < 1/m < \\varepsilon$. Consider\n$S := \\{\\, k \\in \\mathbb{N} : x \\le k/2^n \\,\\}$. It is nonempty, since $k=2^n$\nsatisfies $x \\le 1 = 2^n/2^n$ because $x \\in [0,1]$; so by\n[[thm-well-ordering-principle]] $S$ has a least element $k_0$, and $k_0 \\le 2^n$\nbecause $2^n \\in S$. If $k_0 = 0$ then $x \\le 0$, and $x \\ge 0$ since $x \\in\n[0,1]$, so $x = 0 = 0/2^n \\in D_n \\subseteq D$, within distance $0 < \\varepsilon$\nof itself. If $k_0 \\ge 1$ then $k_0 - 1 \\in \\mathbb{N}$ and, by minimality of\n$k_0$, $k_0 - 1 \\notin S$, that is $x > (k_0-1)/2^n = k_0/2^n - 1/2^n$; combined\nwith $x \\le k_0/2^n$ this gives $|x - k_0/2^n| \\le 1/2^n < \\varepsilon$, and\n$r := k_0/2^n \\in D_n \\subseteq D$ since $k_0 \\le 2^n$. Either way some $r \\in D$\nsatisfies $|x-r| < \\varepsilon$.",
      "uses": [
        "5.1",
        "7.1",
        "9.1",
        "10.1",
        "14.1",
        "15.1",
        "17.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-interior-closure-boundary-top",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]), let\n$A \\subseteq X$ and let $x \\in X$. Neighbourhoods are as in\n[[def-neighbourhood-top]], so a neighbourhood need not be open.\n\n- The **interior** of $A$ is\n  $\\operatorname{int}(A) := \\bigcup \\{\\, U \\in \\mathcal{T} : U \\subseteq A \\,\\}$.\n- The **closure** of $A$ is\n  $\\overline{A} := \\bigcap \\{\\, F \\subseteq X : F \\text{ closed and } A \\subseteq F \\,\\}$.\n- The **exterior** of $A$ is $\\operatorname{ext}(A) := \\operatorname{int}(X \\setminus A)$.\n- The **boundary** of $A$ is $\\partial A := \\overline{A} \\setminus \\operatorname{int}(A)$.\n- $x$ is a **limit point** (accumulation point) of $A$ if every neighbourhood $N$\n  of $x$ satisfies $N \\cap (A \\setminus \\{x\\}) \\ne \\varnothing$. The set of limit\n  points of $A$ is the **derived set** $A'$.\n- $x$ is an **isolated point of $A$** if $x \\in A$ and some neighbourhood $N$ of\n  $x$ satisfies $N \\cap A = \\{x\\}$.\n\n**Both operators are well posed, and the two names are justified rather than\nasserted.** The interior is a union of open sets, hence open by (T2), it is\ncontained in $A$, and it contains every open $U \\subseteq A$: so\n$\\operatorname{int}(A)$ is *the largest open subset of $A$*. The family being\nintersected in the definition of $\\overline{A}$ is nonempty, since $X$ is closed\nand contains $A$, so the intersection is a set; it is closed by (C2) of\n[[def-topological-space]], it contains $A$, and it is contained in every closed\n$F \\supseteq A$: so $\\overline{A}$ is *the smallest closed superset of $A$*. In\nparticular\n\n$$\\operatorname{int}(A) \\subseteq A \\subseteq \\overline{A},$$\n\nand $A$ is open if and only if $A = \\operatorname{int}(A)$, and closed if and\nonly if $A = \\overline{A}$, in each case because one inclusion is automatic and\nthe other says exactly that $A$ belongs to the family in question.\n\n**Interior and closure are exchanged by complementation.** For every\n$A \\subseteq X$,\n\n$$X \\setminus \\operatorname{int}(A) = \\overline{X \\setminus A}, \\qquad X \\setminus \\overline{A} = \\operatorname{int}(X \\setminus A) = \\operatorname{ext}(A).$$\n\nIndeed $U \\mapsto X \\setminus U$ is a bijection between the open subsets of $A$\nand the closed supersets of $X \\setminus A$, and it turns unions into\nintersections ([[def-topological-space]]); applying complementation to the first\nidentity gives the second. So $\\operatorname{ext}(A) = X \\setminus \\overline{A}$,\nand every statement about interiors has a mirror statement about closures.\n\n**The pointwise description of the interior.** $x \\in \\operatorname{int}(A)$ if\nand only if $A$ is a neighbourhood of $x$. If $x \\in \\operatorname{int}(A)$ then\n$\\operatorname{int}(A)$ is an open set with $x \\in \\operatorname{int}(A) \\subseteq A$;\nconversely a neighbourhood relation $x \\in U \\subseteq A$ with $U$ open puts $x$\nin the union defining $\\operatorname{int}(A)$. The corresponding description of\nthe closure is proved as the next item, because it is the statement that does the\nwork in every later proof.\n\n**$X$ is the disjoint union of the three regions.** Since\n$\\operatorname{int}(A) \\subseteq \\overline{A}$, the three sets\n$\\operatorname{int}(A)$, $\\partial A = \\overline{A} \\setminus \\operatorname{int}(A)$\nand $\\operatorname{ext}(A) = X \\setminus \\overline{A}$ are pairwise disjoint and\ntheir union is $X$. This is recorded again, with the identities for interior and\nclosure of unions and intersections, in the lemma two items below.",
      "uses": [
        "9.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function",
      "source_section": "Statement",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let\n$D$ be the dyadic rationals of $[0,1]$ ([[def-the-dyadic-rationals-of-the-unit-interval]]).\nLet $(U_r)_{r \\in D}$ be a family of open subsets of $X$ such that\n\n$$\\overline{U_r} \\subseteq U_s \\quad \\text{whenever } r < s \\text{ in } D, \\qquad \\text{and} \\qquad U_1 = X.$$\n\nThen\n\n$$f(x) \\;:=\\; \\inf\\big(\\{\\, r \\in D : x \\in U_r \\,\\} \\cup \\{1\\}\\big)$$\n\ndefines a map $f : X \\to [0,1]$, and $f$ is continuous.\n\n**No choice principle is used in passing from the family $(U_r)_{r \\in D}$ to\n$f$.** Every existential instantiation in the proof below is a single choice\nfrom a single nonempty set of reals, never a simultaneous selection over an\ninfinite index; where the family $(U_r)_{r \\in D}$ itself is later built by a\nchoice-consuming recursion, that cost is incurred in producing the family, not\nin this lemma.",
      "uses": [
        "17.1"
      ]
    },
    {
      "fact": "L7",
      "source": "thm-continuity-characterisations-top",
      "source_section": "Statement",
      "quote": "Let $(X, \\mathcal{T}_X)$ and $(Y, \\mathcal{T}_Y)$ be topological spaces, let\n$f : X \\to Y$ be a function, and let $\\mathcal{S}$ be a subbasis for\n$\\mathcal{T}_Y$ ([[def-topology-basis-subbasis]]). The following five conditions\nare equivalent.\n\n- **(a)** $f$ is continuous at every point of $X$ ([[def-continuous-map-top]]).\n- **(b)** $f^{-1}[V]$ is open in $X$ for every open $V \\subseteq Y$.\n- **(c)** $f^{-1}[F]$ is closed in $X$ for every closed $F \\subseteq Y$.\n- **(d)** $f^{-1}[S]$ is open in $X$ for every $S \\in \\mathcal{S}$.\n- **(e)** $f[\\overline{A}] \\subseteq \\overline{f[A]}$ for every $A \\subseteq X$,\n  closures being taken in $X$ and in $Y$ respectively\n  ([[def-interior-closure-boundary-top]]).\n\nCondition (d) is what makes continuity checkable against a generating family\nrather than against every open set, and it holds for a *basis* as well, a basis\nbeing in particular a subbasis for the topology it generates.",
      "uses": [
        "3.2"
      ]
    },
    {
      "fact": "L7",
      "source": "def-continuous-map-top",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T}_X)$ and $(Y, \\mathcal{T}_Y)$ be topological spaces\n([[def-topological-space]]), let $f : X \\to Y$ be a function and let $x \\in X$.\nNeighbourhoods are as in [[def-neighbourhood-top]].\n\n$f$ is **continuous at $x$** if for every neighbourhood $V$ of $f(x)$ in $Y$ the\npreimage $f^{-1}[V]$ is a neighbourhood of $x$ in $X$.\n\n$f$ is **continuous** if it is continuous at every point of $X$.\n\n**The same condition with open sets only.** $f$ is continuous at $x$ if and only\nif for every open $V \\subseteq Y$ with $f(x) \\in V$ there is an open\n$U \\subseteq X$ with $x \\in U$ and $f[U] \\subseteq V$. Indeed, if $f$ is\ncontinuous at $x$ and $V$ is such an open set, then $V$ is a neighbourhood of\n$f(x)$, so $f^{-1}[V]$ is a neighbourhood of $x$ and contains an open $U \\ni x$,\nwhich satisfies $f[U] \\subseteq V$. Conversely, given the displayed condition and\na neighbourhood $V$ of $f(x)$, fix open $V_0$ with $f(x) \\in V_0 \\subseteq V$ and\nthen open $U \\ni x$ with $f[U] \\subseteq V_0$; then $x \\in U \\subseteq f^{-1}[V_0] \\subseteq f^{-1}[V]$,\nso $f^{-1}[V]$ is a neighbourhood of $x$. Both forms are used below and are the\nsame statement written twice.\n\n**Preimage, not image.** $f^{-1}[V] = \\{\\, x \\in X : f(x) \\in V \\,\\}$\nis the preimage in the sense of [[def-injection-surjection-bijection]] and is\ndefined for every function, invertible or not; no inverse function is being\nasserted to exist. Continuity is a condition on preimages throughout, and the\ncorresponding conditions on images define the *open* and *closed* maps of a later\nitem, which are different notions.",
      "uses": [
        "3.2"
      ]
    },
    {
      "fact": "L8",
      "source": "def-interior-closure-boundary-top",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]), let\n$A \\subseteq X$ and let $x \\in X$. Neighbourhoods are as in\n[[def-neighbourhood-top]], so a neighbourhood need not be open.\n\n- The **interior** of $A$ is\n  $\\operatorname{int}(A) := \\bigcup \\{\\, U \\in \\mathcal{T} : U \\subseteq A \\,\\}$.\n- The **closure** of $A$ is\n  $\\overline{A} := \\bigcap \\{\\, F \\subseteq X : F \\text{ closed and } A \\subseteq F \\,\\}$.\n- The **exterior** of $A$ is $\\operatorname{ext}(A) := \\operatorname{int}(X \\setminus A)$.\n- The **boundary** of $A$ is $\\partial A := \\overline{A} \\setminus \\operatorname{int}(A)$.\n- $x$ is a **limit point** (accumulation point) of $A$ if every neighbourhood $N$\n  of $x$ satisfies $N \\cap (A \\setminus \\{x\\}) \\ne \\varnothing$. The set of limit\n  points of $A$ is the **derived set** $A'$.\n- $x$ is an **isolated point of $A$** if $x \\in A$ and some neighbourhood $N$ of\n  $x$ satisfies $N \\cap A = \\{x\\}$.\n\n**Both operators are well posed, and the two names are justified rather than\nasserted.** The interior is a union of open sets, hence open by (T2), it is\ncontained in $A$, and it contains every open $U \\subseteq A$: so\n$\\operatorname{int}(A)$ is *the largest open subset of $A$*. The family being\nintersected in the definition of $\\overline{A}$ is nonempty, since $X$ is closed\nand contains $A$, so the intersection is a set; it is closed by (C2) of\n[[def-topological-space]], it contains $A$, and it is contained in every closed\n$F \\supseteq A$: so $\\overline{A}$ is *the smallest closed superset of $A$*. In\nparticular\n\n$$\\operatorname{int}(A) \\subseteq A \\subseteq \\overline{A},$$\n\nand $A$ is open if and only if $A = \\operatorname{int}(A)$, and closed if and\nonly if $A = \\overline{A}$, in each case because one inclusion is automatic and\nthe other says exactly that $A$ belongs to the family in question.\n\n**Interior and closure are exchanged by complementation.** For every\n$A \\subseteq X$,\n\n$$X \\setminus \\operatorname{int}(A) = \\overline{X \\setminus A}, \\qquad X \\setminus \\overline{A} = \\operatorname{int}(X \\setminus A) = \\operatorname{ext}(A).$$\n\nIndeed $U \\mapsto X \\setminus U$ is a bijection between the open subsets of $A$\nand the closed supersets of $X \\setminus A$, and it turns unions into\nintersections ([[def-topological-space]]); applying complementation to the first\nidentity gives the second. So $\\operatorname{ext}(A) = X \\setminus \\overline{A}$,\nand every statement about interiors has a mirror statement about closures.\n\n**The pointwise description of the interior.** $x \\in \\operatorname{int}(A)$ if\nand only if $A$ is a neighbourhood of $x$. If $x \\in \\operatorname{int}(A)$ then\n$\\operatorname{int}(A)$ is an open set with $x \\in \\operatorname{int}(A) \\subseteq A$;\nconversely a neighbourhood relation $x \\in U \\subseteq A$ with $U$ open puts $x$\nin the union defining $\\operatorname{int}(A)$. The corresponding description of\nthe closure is proved as the next item, because it is the statement that does the\nwork in every later proof.\n\n**$X$ is the disjoint union of the three regions.** Since\n$\\operatorname{int}(A) \\subseteq \\overline{A}$, the three sets\n$\\operatorname{int}(A)$, $\\partial A = \\overline{A} \\setminus \\operatorname{int}(A)$\nand $\\operatorname{ext}(A) = X \\setminus \\overline{A}$ are pairwise disjoint and\ntheir union is $X$. This is recorded again, with the identities for interior and\nclosure of unions and intersections, in the lemma two items below.",
      "uses": [
        "17.2"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-real-line-is-a-metric-space",
      "source_section": "Statement",
      "quote": "Define $d_{\\mathbb{R}} : \\mathbb{R} \\times \\mathbb{R} \\to \\mathbb{R}$ by\n$d_{\\mathbb{R}}(x,y) := |x - y|$ ([[def-abs-value]]). Then:\n\n1. $d_{\\mathbb{R}}$ is a metric on $\\mathbb{R}$ ([[def-metric-space]]); it is\n   called the **usual metric** of $\\mathbb{R}$.\n2. For $x \\in \\mathbb{R}$ and $r > 0$ the open ball is the bounded open interval\n   ([[def-interval]], [[def-metric-ball]])\n   $$B(x,r) = (x-r,\\ x+r),$$\n   and the closed ball is $\\bar B(x,r) = [x-r,\\ x+r]$.\n3. Consequently $U \\subseteq \\mathbb{R}$ is open in the metric topology of\n   $d_{\\mathbb{R}}$ ([[def-metric-topology]]) exactly when for every $x \\in U$\n   there is $r > 0$ with $(x-r, x+r) \\subseteq U$. This topology is called the\n   **usual topology** of $\\mathbb{R}$.\n4. $(\\mathbb{R}, d_{\\mathbb{R}})$ is not a bounded metric space\n   ([[def-metric-bounded-diameter]]): no ball contains $\\mathbb{R}$, so\n   $\\operatorname{diam}(\\mathbb{R})$ is not defined.",
      "uses": [
        "3.2",
        "4.2"
      ]
    },
    {
      "fact": "L6",
      "source": "def-subspace-topology-top",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let\n$S \\subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is\n\n$$\\mathcal{T}_S := \\{\\, U \\cap S : U \\in \\mathcal{T} \\,\\},$$\n\nthe family of **traces** on $S$ of the open sets of $X$. The pair\n$(S, \\mathcal{T}_S)$ is a **subspace** of $X$. A subset of $S$ that lies in\n$\\mathcal{T}_S$ is said to be **open in $S$**, and *relatively open* where the\nambient space needs emphasis.\n\n**$\\mathcal{T}_S$ is a topology, and this is discharged here.** (T1):\n$\\varnothing = \\varnothing \\cap S$ and $S = X \\cap S$ are traces. (T2): if\n$\\mathcal{S}' \\subseteq \\mathcal{T}_S$, choose for each member a set of\n$\\mathcal{T}$ tracing to it — no choice principle is needed, since\n$U' := \\bigcup \\{\\, U \\in \\mathcal{T} : U \\cap S \\subseteq W \\,\\}$ is a canonical\nsuch set for $W \\in \\mathcal{T}_S$, being open by (T2) in $X$ and satisfying\n$U' \\cap S = W$ — and then\n$\\bigcup_i (U_i \\cap S) = (\\bigcup_i U_i) \\cap S \\in \\mathcal{T}_S$ by (T2) in\n$X$. (T3): $(U \\cap S) \\cap (V \\cap S) = (U \\cap V) \\cap S \\in \\mathcal{T}_S$ by\n(T3) in $X$.\n\n**Closed sets of a subspace are the traces of the closed sets.** A set\n$C \\subseteq S$ is closed in $S$ if and only if $C = F \\cap S$ for some closed\n$F \\subseteq X$. Indeed $S \\setminus (U \\cap S) = (X \\setminus U) \\cap S$ and\n$S \\setminus (F \\cap S) = (X \\setminus F) \\cap S$, so complementation inside $S$\nmatches complementation inside $X$ under tracing.\n\n**Bases and subbases trace as well.** If $\\mathcal{B}$ is a basis for\n$\\mathcal{T}$ ([[def-topology-basis-subbasis]]) then\n$\\mathcal{B}_S := \\{\\, B \\cap S : B \\in \\mathcal{B} \\,\\}$ is a basis for\n$\\mathcal{T}_S$: its members are open in $S$, and for $W = U \\cap S$ open in $S$\nand $x \\in W$ there is $B \\in \\mathcal{B}$ with $x \\in B \\subseteq U$, whence\n$x \\in B \\cap S \\subseteq W$. The same computation with a subbasis $\\mathcal{S}$\nshows that $\\{\\, S_0 \\cap S : S_0 \\in \\mathcal{S} \\,\\}$ is a subbasis for\n$\\mathcal{T}_S$, since tracing commutes with finite intersections and with\nunions.\n\n**The inclusion is continuous.** The inclusion map $\\iota : S \\to X$,\n$\\iota(s) = s$, satisfies $\\iota^{-1}[U] = U \\cap S$ for every $U \\subseteq X$,\nso preimages of open sets are open and $\\iota$ is continuous\n([[thm-continuity-characterisations-top]], clause (b)). Moreover\n$\\mathcal{T}_S$ is the **coarsest** topology on $S$ making $\\iota$ continuous: any\ntopology on $S$ for which $\\iota$ is continuous must contain every\n$\\iota^{-1}[U] = U \\cap S$, hence contain $\\mathcal{T}_S$.\n\n**Characteristic property of a map into a subspace.** Let $(Z, \\mathcal{T}_Z)$ be\na topological space and let $g : Z \\to S$ be a function. Then\n\n$$g \\text{ is continuous as a map } Z \\to (S,\\mathcal{T}_S) \\iff \\iota \\circ g \\text{ is continuous as a map } Z \\to (X,\\mathcal{T}) .$$\n\n*Proof.* For $U \\in \\mathcal{T}$ one has\n$(\\iota \\circ g)^{-1}[U] = g^{-1}[\\iota^{-1}[U]] = g^{-1}[U \\cap S]$. If $g$ is\ncontinuous then each $g^{-1}[U \\cap S]$ is open, so $\\iota \\circ g$ is continuous;\nconversely if $\\iota \\circ g$ is continuous then for any $W = U \\cap S$ open in\n$S$ the set $g^{-1}[W] = (\\iota \\circ g)^{-1}[U]$ is open, so $g$ is continuous.\nBoth directions use only clause (b) of [[thm-continuity-characterisations-top]].\n\n**Restriction of a continuous map.** If $f : X \\to Y$ is continuous and\n$S \\subseteq X$, then $f|_S : S \\to Y$ is continuous, since\n$(f|_S)^{-1}[V] = f^{-1}[V] \\cap S$ is open in $S$ for every open $V \\subseteq Y$\n([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).\n\n**When relative and ambient agree.** If $S$ is open in $X$ then a subset of $S$\nis open in $S$ if and only if it is open in $X$: a trace $U \\cap S$ is then an\nintersection of two open sets of $X$, and conversely an open subset of $X$\ncontained in $S$ is its own trace. The same statement with \"closed\" throughout\nholds when $S$ is closed in $X$. Both are used in the pasting lemma of the next\nitem, and both fail without the hypothesis: $S$ itself is always open and closed\nin $S$, and need be neither in $X$.",
      "uses": [
        "3.2",
        "4.2"
      ]
    },
    {
      "fact": "L6",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]).\n\nA subset $I \\subseteq \\mathbb{R}$ is **order-convex** when\n\n$$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$\n\nThe **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where\n$a, b \\in \\mathbb{R}$:\n\n| | bounded forms | | one-sided and full forms |\n|---|---|---|---|\n| $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ |\n| $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ |\n| $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ |\n| $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ |\n| | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ |\n\nAn interval is **open** when both of its written endpoints are excluded, that is\nfor the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is\n**closed** when both written endpoints are included, that is for $[a,b]$,\n$[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and\n$(a,b]$ are **half-open**.\n\n**The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They\nmark which side carries no endpoint condition at all; the five forms in the right\ncolumn are defined by the displayed conditions on $x$ alone, and no arithmetic is\never performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$\nsilently that [[rem-sup-conventions]] records for suprema.\n\n**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.\n\n**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly\nwhen it is of one of the four forms in the left column: for those, $a$ is a lower\nbound and $b$ an upper bound. The other five forms are unbounded, on the side or\nsides written with $\\infty$; the verification is in the remarks below.\n\n**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:\n\n- $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly\n  when $a < b$. It is the singleton $\\{a\\}$ when $a = b$.\n- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each\n  is nondegenerate.\n\nThe only assertion here that is not immediate from the defining conditions is\nthat $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because\n$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to\nboth sides and halving ([[def-ordered-field]]); repeating the halving inside\n$(a, (a+b)/2)$ produces a second point.\n\n**Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is\nexactly the condition making them nonempty. They are the intervals the nested\ninterval property is stated for, and the phrase *closed bounded interval* always\ncarries the hypothesis $a \\le b$ in this library.\n\n**Length.** The **length** of a bounded interval presented by its endpoints\n$a \\le b$ is\n\n$$\\ell = b - a \\;\\ge\\; 0 .$$\n\nLength is attached to the presentation by endpoints and is not recovered from the\nset: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is\n$(c,c)$ for any other $c$, while each of these presentations has length $0$, so\nnothing inconsistent arises; but the endpoints are named explicitly at every\npoint where a length is used in this library, and never inferred from the set.\nUnbounded intervals are assigned no length.",
      "uses": [
        "3.2",
        "4.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Assume $X$ is normal and $A, B \\subseteq X$ are disjoint closed sets (the hypothesis of clause 1). [assume-hyp]",
      "step": "1.1",
      "inputs": [
        "assume-hyp"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Assume instead that every pair of disjoint closed subsets of $X$ admits a continuous function into $[0,1]$ separating them as in clause 1 (the hypothesis of clause 2). [assume-hyp]",
      "step": "1.2",
      "inputs": [
        "assume-hyp"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Under step 1.1: $A \\subseteq X \\setminus B$, since $A \\cap B = \\varnothing$, and $X \\setminus B$ is open since $B$ is closed; by [L1] applied to the closed set $A$ and the open set $X \\setminus B$, fix open $\\Phi_0(0)$ with $A \\subseteq \\Phi_0(0) \\subseteq \\overline{\\Phi_0(0)} \\subseteq X \\setminus B$, and put $\\Phi_0(1) := X \\setminus B$, defining $\\Phi_0 : D_0 \\to \\mathcal{T}$ on $D_0 = \\{0,1\\}$. [step 1.1, L1, choose, construct]",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L1",
        "choose",
        "construct",
        "1.1"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "Under step 1.2: let $C, E \\subseteq X$ be disjoint closed sets; fix a continuous $h : X \\to [0,1]$ with $C \\subseteq h^{-1}(\\{0\\})$ and $E \\subseteq h^{-1}(\\{1\\})$. [step 1.2, choose]",
      "step": "2.2",
      "inputs": [
        "step 1.2",
        "choose",
        "1.2"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Under step 1.1: $A \\subseteq \\Phi_0(0)$; $\\overline{\\Phi_0(0)} \\subseteq \\Phi_0(1)$; and $\\Phi_0(1) = X \\setminus B$. [step 2.1]",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "1.1",
        "2.1"
      ]
    },
    {
      "id": "step-3.2",
      "claim": "Under step 1.2, continuing: by [L6], $[0,\\tfrac12)$ and $(\\tfrac12,1]$ are open in $[0,1]$, disjoint, with $0 \\in [0,\\tfrac12)$ and $1 \\in (\\tfrac12,1]$; put $O_1 := h^{-1}(\\,[0,\\tfrac12)\\,)$ and $O_2 := h^{-1}(\\,(\\tfrac12,1]\\,)$, open in $X$ by [L7]. [step 2.2, L6, L7]",
      "step": "3.2",
      "inputs": [
        "step 2.2",
        "L6",
        "L7",
        "1.2",
        "2.2"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Under step 1.1: for $n \\in \\mathbb{N}$, call $\\Phi : D_n \\to \\mathcal{T}$ **admissible at level $n$** when (i) $\\overline{\\Phi(r)} \\subseteq \\Phi(s)$ for every $r < s$ in $D_n$; (ii) $A \\subseteq \\Phi(0)$; (iii) $\\Phi(1) = X \\setminus B$. Put $P := \\{\\, (n,\\Phi) : n \\in \\mathbb{N},\\ \\Phi \\text{ admissible at level } n \\,\\}$, and for $(n,\\Phi), (n',\\Phi') \\in P$ say $(n,\\Phi) \\mathbin{R} (n',\\Phi')$ when $n' = n+1$ and $\\Phi'|_{D_n} = \\Phi$. By step 3.1, $(0,\\Phi_0) \\in P$. [step 3.1, construct]",
      "step": "4.1",
      "inputs": [
        "step 3.1",
        "construct",
        "1.1",
        "3.1"
      ]
    },
    {
      "id": "step-4.2",
      "claim": "Under step 1.2: $C \\subseteq O_1$, since $h \\equiv 0 \\in [0,\\tfrac12)$ on $C$; $E \\subseteq O_2$, since $h \\equiv 1 \\in (\\tfrac12,1]$ on $E$; and $O_1 \\cap O_2 = h^{-1}\\big(\\,[0,\\tfrac12) \\cap (\\tfrac12,1]\\,\\big) = h^{-1}(\\varnothing) = \\varnothing$. [step 2.2, step 3.2, L6]",
      "step": "4.2",
      "inputs": [
        "step 2.2",
        "step 3.2",
        "L6",
        "1.2",
        "2.2",
        "3.2"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "Under step 1.1: let $(n,\\Phi) \\in P$. For each $j$ with $0 \\le j < 2^n$, with $r_j, s_j, t_j$ as in [L3]: since $r_j < s_j$ in $D_n$, admissibility (i) gives $\\overline{\\Phi(r_j)} \\subseteq \\Phi(s_j)$, so by [L1] the set of open $W$ with $\\overline{\\Phi(r_j)} \\subseteq W \\subseteq \\overline{W} \\subseteq \\Phi(s_j)$ is nonempty. [step 4.1, L1, L3]",
      "step": "5.1",
      "inputs": [
        "step 4.1",
        "L1",
        "L3",
        "1.1",
        "4.1"
      ]
    },
    {
      "id": "step-5.2",
      "claim": "Under step 1.2: since $C, E$ were an arbitrary disjoint closed pair, step 4.2 exhibits disjoint open supersets for every such pair, so $X$ is normal by [[def-normal-and-t4-spaces]]; this is clause 2, and no step of it used [A1]. [step 4.2]",
      "step": "5.2",
      "inputs": [
        "step 4.2",
        "1.2",
        "4.2",
        "A1"
      ]
    },
    {
      "id": "step-6.1",
      "claim": "Under step 1.1, continuing under step 5.1: by [L2] applied to the function assigning, to each $j < 2^n$, the nonempty set of open $W$ with $\\overline{\\Phi(r_j)} \\subseteq W \\subseteq \\overline{W} \\subseteq \\Phi(s_j)$, fix a simultaneous choice, giving open $W_j$ with $\\overline{\\Phi(r_j)} \\subseteq W_j \\subseteq \\overline{W_j} \\subseteq \\Phi(s_j)$ for every $0 \\le j < 2^n$. [step 5.1, L2, choose]",
      "step": "6.1",
      "inputs": [
        "step 5.1",
        "L2",
        "choose",
        "1.1",
        "5.1"
      ]
    },
    {
      "id": "step-7.1",
      "claim": "Under step 1.1: define $\\Phi' : D_{n+1} \\to \\mathcal{T}$ by $\\Phi'|_{D_n} := \\Phi$ and $\\Phi'(t_j) := W_j$ for $0 \\le j < 2^n$; this is well defined since $D_{n+1} = D_n \\cup \\{t_j : 0 \\le j < 2^n\\}$ with the $t_j$ pairwise distinct and disjoint from $D_n$ by [L3]. Then $(n,\\Phi) \\mathbin{R} (n+1,\\Phi')$. [step 6.1, L3, construct]",
      "step": "7.1",
      "inputs": [
        "step 6.1",
        "L3",
        "construct",
        "1.1",
        "6.1"
      ]
    },
    {
      "id": "step-8.1",
      "claim": "Under step 1.1, with $\\Phi, \\Phi'$ as in step 7.1: for the $D_{n+1}$-consecutive pair $(r_j, t_j)$: $\\overline{\\Phi'(r_j)} = \\overline{\\Phi(r_j)} \\subseteq W_j = \\Phi'(t_j)$ by step 6.1; for the pair $(t_j, s_j)$: $\\overline{\\Phi'(t_j)} = \\overline{W_j} \\subseteq \\Phi(s_j) = \\Phi'(s_j)$ by step 6.1. [step 7.1, step 6.1]",
      "step": "8.1",
      "inputs": [
        "step 7.1",
        "step 6.1",
        "1.1",
        "7.1",
        "6.1"
      ]
    },
    {
      "id": "step-9.1",
      "claim": "Under step 1.1: for $x < y$ in $D_{n+1}$, the finitely many elements of $D_{n+1} \\cap [x,y]$, listed increasingly as $x = u_0 < u_1 < \\cdots < u_k = y$, are $D_{n+1}$-consecutive at each step $u_i < u_{i+1}$, and each such pair is one of the pairs of step 8.1 (every $D_{n+1}$-consecutive pair has at least one member among the new points $t_j$, since a new point was inserted into every $D_n$-consecutive gap); so $\\overline{\\Phi'(u_i)} \\subseteq \\Phi'(u_{i+1})$ at each step, and [L4] gives $\\overline{\\Phi'(x)} = \\overline{\\Phi'(u_0)} \\subseteq \\Phi'(u_k) = \\Phi'(y)$. [step 8.1, L3, L4]",
      "step": "9.1",
      "inputs": [
        "step 8.1",
        "L3",
        "L4",
        "1.1",
        "8.1"
      ]
    },
    {
      "id": "step-10.1",
      "claim": "Under step 1.1: $A \\subseteq \\Phi'(0) = \\Phi(0)$, since $0 \\in D_n$ is unaffected by the extension; $\\Phi'(1) = \\Phi(1) = X \\setminus B$, since $1 \\in D_n$ is likewise unaffected; with step 9.1 this is admissibility of $\\Phi'$ at level $n+1$, so $(n+1,\\Phi') \\in P$. [step 7.1, step 9.1, L3]",
      "step": "10.1",
      "inputs": [
        "step 7.1",
        "step 9.1",
        "L3",
        "1.1",
        "9.1",
        "7.1"
      ]
    },
    {
      "id": "step-11.1",
      "claim": "Under step 1.1: by steps 5.1, 6.1, 7.1 and 10.1, every $(n,\\Phi) \\in P$ has some $(n+1,\\Phi') \\in P$ with $(n,\\Phi) \\mathbin{R} (n+1,\\Phi')$; so $R$ is entire on $P$. [step 7.1, step 10.1]",
      "step": "11.1",
      "inputs": [
        "step 7.1",
        "step 10.1",
        "1.1",
        "5.1",
        "6.1",
        "7.1",
        "10.1"
      ]
    },
    {
      "id": "step-12.1",
      "claim": "Under step 1.1: $P$ is nonempty by step 4.1 and $R$ is entire on $P$ by step 11.1; by [A1] applied with $a := (0,\\Phi_0)$, there is a sequence $\\big((m_k,\\Psi_k)\\big)_{k \\in \\mathbb{N}}$ with $(m_0,\\Psi_0) = (0,\\Phi_0)$ and $(m_k,\\Psi_k) \\mathbin{R} (m_{k+1},\\Psi_{k+1})$ for every $k$. [step 4.1, step 11.1, A1, construct]",
      "step": "12.1",
      "inputs": [
        "step 4.1",
        "step 11.1",
        "A1",
        "construct",
        "1.1",
        "4.1",
        "11.1"
      ]
    },
    {
      "id": "step-13.1",
      "claim": "Under step 1.1: since $(n,\\Phi) \\mathbin{R} (n',\\Phi')$ forces $n' = n+1$, and $m_0 = 0$, induction on $k$ gives $m_k = k$ for every $k \\in \\mathbb{N}$; so each $\\Psi_k : D_k \\to \\mathcal{T}$ is admissible at level $k$, and $\\Psi_{k+1}|_{D_k} = \\Psi_k$ for every $k$. [step 12.1]",
      "step": "13.1",
      "inputs": [
        "step 12.1",
        "1.1",
        "12.1"
      ]
    },
    {
      "id": "step-14.1",
      "claim": "Under step 1.1: for $r \\in D$, fix $n$ with $r \\in D_n$ [L3] and define $V_r := \\Psi_n(r)$; by step 13.1, for $n \\le n'$ with $r \\in D_n$, $\\Psi_{n'}(r) = \\Psi_n(r)$ (chaining $\\Psi_{n'}|_{D_n} = \\Psi_n$ through the intermediate levels), so $V_r$ does not depend on the level $n$ chosen. [step 13.1, L3, construct]",
      "step": "14.1",
      "inputs": [
        "step 13.1",
        "L3",
        "construct",
        "1.1",
        "13.1"
      ]
    },
    {
      "id": "step-15.1",
      "claim": "Under step 1.1: for $r < s$ in $D$, fix $n$ with $r, s \\in D_n$ [L3]; then $\\overline{V_r} = \\overline{\\Psi_n(r)} \\subseteq \\Psi_n(s) = V_s$ by admissibility (i) of $\\Psi_n$. Also $A \\subseteq V_0$ and $V_1 = X \\setminus B$, by admissibility (ii) and (iii) of $\\Psi_n$ for any $n$. [step 14.1, step 13.1, L3]",
      "step": "15.1",
      "inputs": [
        "step 14.1",
        "step 13.1",
        "L3",
        "1.1",
        "14.1",
        "13.1"
      ]
    },
    {
      "id": "step-16.1",
      "claim": "Under step 1.1: define $U_r := V_r$ for $r \\in D$ with $r < 1$, and $U_1 := X$. For $r < s$ in $D$: if $s < 1$, $\\overline{U_r} = \\overline{V_r} \\subseteq V_s = U_s$ by step 15.1; if $s = 1$, $\\overline{U_r} = \\overline{V_r} \\subseteq V_1 = X \\setminus B \\subseteq X = U_1$ by step 15.1. So $\\overline{U_r} \\subseteq U_s$ whenever $r < s$ in $D$, and $U_1 = X$. [step 15.1, construct]",
      "step": "16.1",
      "inputs": [
        "step 15.1",
        "construct",
        "1.1",
        "15.1"
      ]
    },
    {
      "id": "step-17.1",
      "claim": "Under step 1.1: by [L5] applied to $(U_r)_{r \\in D}$ of step 16.1, $f(x) := \\inf(\\{r \\in D : x \\in U_r\\} \\cup \\{1\\})$ is a continuous map $X \\to [0,1]$. [step 16.1, L5]",
      "step": "17.1",
      "inputs": [
        "step 16.1",
        "L5",
        "1.1",
        "16.1"
      ]
    },
    {
      "id": "step-17.2",
      "claim": "Under step 1.1: for $b \\in B$ and $r \\in D$ with $r < 1$: fix $n$ with $r \\in D_n$ [L3]; since $1 \\in D_n$ also, admissibility (i) of $\\Psi_n$ applied to $r < 1$ gives $\\overline{\\Psi_n(r)} \\subseteq \\Psi_n(1) = X \\setminus B$, that is $\\overline{V_r} \\subseteq X \\setminus B$; since $V_r \\subseteq \\overline{V_r}$ by [L8] and $U_r = V_r$ by step 16.1, $U_r \\cap B = \\varnothing$, so $b \\notin U_r$. [step 14.1, step 13.1, step 16.1, L3, L8]",
      "step": "17.2",
      "inputs": [
        "step 14.1",
        "step 13.1",
        "step 16.1",
        "L3",
        "L8",
        "1.1",
        "16.1",
        "14.1",
        "13.1"
      ]
    },
    {
      "id": "step-18.1",
      "claim": "Under step 1.1: for $a \\in A$: $a \\in V_0$ by step 15.1, and $U_0 = V_0$ by step 16.1 (as $0 < 1$), so $a \\in U_0$ and $0 \\in \\{r \\in D : a \\in U_r\\}$; hence $f(a) \\le 0$, and $f(a) \\ge 0$ since $f$ maps into $[0,1]$ by step 17.1, so $f(a) = 0$. [step 17.1, step 16.1, step 15.1]",
      "step": "18.1",
      "inputs": [
        "step 17.1",
        "step 16.1",
        "step 15.1",
        "1.1",
        "15.1",
        "16.1",
        "17.1"
      ]
    },
    {
      "id": "step-18.2",
      "claim": "Under step 1.1: for $b \\in B$: by step 17.2, $b \\notin U_r$ for every $r \\in D$ with $r < 1$, and $b \\in U_1 = X$ by step 16.1; so $\\{r \\in D : b \\in U_r\\} \\cup \\{1\\} = \\{1\\}$, giving $f(b) = \\inf\\{1\\} = 1$. [step 17.2, step 16.1]",
      "step": "18.2",
      "inputs": [
        "step 17.2",
        "step 16.1",
        "1.1",
        "17.2",
        "16.1"
      ]
    },
    {
      "id": "step-19.1",
      "claim": "Steps 17.1, 18.1 and 18.2 show that, under the hypothesis of step 1.1, $f$ is a continuous map $X \\to [0,1]$ with $A \\subseteq f^{-1}(\\{0\\})$ and $B \\subseteq f^{-1}(\\{1\\})$, which is clause 1. [step 17.1, step 18.1, step 18.2]",
      "step": "19.1",
      "inputs": [
        "step 17.1",
        "step 18.1",
        "step 18.2",
        "17.1",
        "18.1",
        "18.2",
        "1.1"
      ]
    },
    {
      "id": "step-20.1",
      "claim": "Steps 19.1 and 5.2 establish clauses 1 and 2 respectively. [step 19.1, step 5.2, discharge-construct] ∎",
      "step": "20.1",
      "inputs": [
        "step 19.1",
        "step 5.2",
        "discharge-construct",
        "19.1",
        "5.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 2.1: empty-set or empty-family case was inspected and introduces no illicit witness"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "statement and step 1.2: zero or base-value case was inspected under the displayed definitions"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: unit, singleton, or one-term case was inspected"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The statement has no distinguished degenerate or equality case parameter or case."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "statement and step 1.2: endpoint and codomain-boundary behavior was inspected"
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "statement and step 2.1: nonempty-choice obligations were checked against the stated hypothesis or explicit construction"
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "statement: the forward implication was followed through its numbered proof steps and its hypotheses were not reversed"
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "statement: the reverse implication was followed independently through its numbered proof steps"
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "complete",
    "reviewer": "Audit-Alpha wave 7 (owner-delegated); DeepSeek V4 Pro audit-refuter",
    "notes": "critical risk (11): 14 declared dependencies; 13 cited facts; 27 numbered proof steps; boundary-sensitive language; induction, recursion, or minimality, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: Boundary cases (empty closed sets, degenerate intervals, endpoint inclusions, zero/one, and the case where the space is empty) were inspected; the proof handles each without illicit witnesses or extra assumptions. No counterexample surfaced. Checked surface: The title, the public claim (both directions, the DC hypothesis, and the choice accounting), every numbered proof step, and the Remarks were read in full and found to be logically valid and consistent with the stated facts. ``` Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/thm-urysohn-lemma--64538951272ba147.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-urysohn-lemma",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function",
    "declared_target": "lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-urysohn-lemma",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-the-dyadic-rationals-of-the-unit-interval",
    "declared_target": "def-the-dyadic-rationals-of-the-unit-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-urysohn-lemma",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-normal-and-t4-spaces",
    "declared_target": "def-normal-and-t4-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-urysohn-lemma",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-normality-via-shrinking",
    "declared_target": "lem-normality-via-shrinking",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-urysohn-lemma",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-dependent-choice",
    "declared_target": "def-dependent-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-urysohn-lemma",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-finite-choice",
    "declared_target": "lem-finite-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "order-zorn-and-the-axiom-of-choice",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-urysohn-lemma",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-choice-function",
    "declared_target": "def-choice-function",
    "target_statement_provenance": "ai-altered",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-urysohn-lemma",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-continuous-map-top",
    "declared_target": "def-continuous-map-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-urysohn-lemma",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-continuity-characterisations-top",
    "declared_target": "thm-continuity-characterisations-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-urysohn-lemma",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-interior-closure-boundary-top",
    "declared_target": "def-interior-closure-boundary-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-urysohn-lemma",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-interval",
    "declared_target": "def-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-urysohn-lemma",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-topological-space",
    "declared_target": "def-topological-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-urysohn-lemma",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-subspace-topology-top",
    "declared_target": "def-subspace-topology-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-urysohn-lemma",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-real-line-is-a-metric-space",
    "declared_target": "lem-real-line-is-a-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-urysohn-lemma",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "rem-urysohn-lemma-not-a-zf-theorem",
    "declared_target": "rem-urysohn-lemma-not-a-zf-theorem",
    "target_statement_provenance": null,
    "targetPage": "deferred-set-theory-beyond-choice",
    "targetBatch": null,
    "edge_type": "external_mention",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (15)

### `def-choice-function`

````markdown
---
id: def-choice-function
kind: definition
title: "Choice function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function, def-indexed-union-and-intersection, def-power-set,
       def-set-difference-and-symmetric-difference]
justified_by: []
forward_refs: [ex-canonical-choice-on-naturals, ex-russells-socks,
               lem-finite-choice]
aliases: []
landmark: false
short: "choice function"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "I. Khatchatourian, The Axiom of Choice (University of Toronto MAT327 notes)"
      url: "https://www.math.utoronto.ca/ivan/mat327/docs/notes/11-choice.pdf"
    - title: "Choice function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Choice_function"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Definition

Let $\mathcal{F}$ be a family of sets, every member of which is nonempty. A
**choice function** for $\mathcal{F}$ is a function ([[def-function]])
$$g : \mathcal{F} \to \bigcup \mathcal{F} \qquad \text{such that} \qquad g(S) \in S \ \text{ for every } S \in \mathcal{F}.$$

Given a set $X$, a **choice function on $X$** means a choice function for the
family $\mathcal{P}(X) \setminus \{\emptyset\}$ ([[def-power-set]],
[[def-set-difference-and-symmetric-difference]]) of nonempty subsets of $X$.

## Remarks

- The requirement is only that $g$ pick *some* element of each member. Nothing
  requires the choices to be coherent, definable, or computable, and this is
  exactly where the difficulty lies: for a single nonempty set $S$ the existence
  of an element to pick is immediate, and for a family presented as the values
  of a function on a natural number the picks can be made one after another
  ([[lem-finite-choice]]). What is not available in ZF is
  a *simultaneous* choice across an arbitrary family.
- A choice function often exists for a concrete family with no appeal to any
  axiom, because the family carries extra structure that names a canonical
  element. Every nonempty set of natural numbers has a least element, so
  $S \mapsto \min S$ is an explicit choice function on $\mathbb{N}$
  ([[ex-canonical-choice-on-naturals]]). The contrast with families that admit no
  such rule is the content of [[ex-russells-socks]].
- Members of $\mathcal{F}$ must be nonempty: no function can select an element of
  $\emptyset$. The family $\mathcal{F}$ itself is allowed to be empty, and the
  empty function is then a choice function for it.
````

### `def-continuous-map-top`

````markdown
---
id: def-continuous-map-top
kind: definition
title: "Continuity of a map of topological spaces at a point and globally"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top, def-injection-surjection-bijection]
justified_by: []
aliases: [def-continuity-top]
landmark: true
short: "continuous map of spaces"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "J. Munkres, Topology, 2nd ed., §18"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces
([[def-topological-space]]), let $f : X \to Y$ be a function and let $x \in X$.
Neighbourhoods are as in [[def-neighbourhood-top]].

$f$ is **continuous at $x$** if for every neighbourhood $V$ of $f(x)$ in $Y$ the
preimage $f^{-1}[V]$ is a neighbourhood of $x$ in $X$.

$f$ is **continuous** if it is continuous at every point of $X$.

**The same condition with open sets only.** $f$ is continuous at $x$ if and only
if for every open $V \subseteq Y$ with $f(x) \in V$ there is an open
$U \subseteq X$ with $x \in U$ and $f[U] \subseteq V$. Indeed, if $f$ is
continuous at $x$ and $V$ is such an open set, then $V$ is a neighbourhood of
$f(x)$, so $f^{-1}[V]$ is a neighbourhood of $x$ and contains an open $U \ni x$,
which satisfies $f[U] \subseteq V$. Conversely, given the displayed condition and
a neighbourhood $V$ of $f(x)$, fix open $V_0$ with $f(x) \in V_0 \subseteq V$ and
then open $U \ni x$ with $f[U] \subseteq V_0$; then $x \in U \subseteq f^{-1}[V_0] \subseteq f^{-1}[V]$,
so $f^{-1}[V]$ is a neighbourhood of $x$. Both forms are used below and are the
same statement written twice.

**Preimage, not image.** $f^{-1}[V] = \{\, x \in X : f(x) \in V \,\}$
is the preimage in the sense of [[def-injection-surjection-bijection]] and is
defined for every function, invertible or not; no inverse function is being
asserted to exist. Continuity is a condition on preimages throughout, and the
corresponding conditions on images define the *open* and *closed* maps of a later
item, which are different notions.

## Remarks

- **This is the metric definition when both topologies are metric topologies.**
  For metric spaces, $\varepsilon$-$\delta$ continuity at $a$
  ([[def-metric-continuity]]) says that every ball around $f(a)$ has a ball
  around $a$ mapped into it, and the balls around a point are a neighbourhood
  base there; the identification is carried out where metrizable spaces are
  defined later on this page. Nothing about a metric survives in the definition
  above: continuity is a relation between two topologies and a function, and it
  is meaningless to ask whether a function between bare sets is continuous.

- **Continuity depends on both topologies, and coarsening the target or refining
  the source only helps.** If $f$ is continuous and $\mathcal{T}_X$ is replaced
  by a finer topology, or $\mathcal{T}_Y$ by a coarser one, $f$ remains
  continuous, since each condition to be verified is weakened and each
  neighbourhood available in the source is still available. In particular every
  map out of a discrete space and every map into an indiscrete space is
  continuous ([[def-standard-topologies]]).

- **Continuity at a point is strictly weaker than continuity.** A function may be
  continuous at exactly one point, and the definition above is deliberately local
  so that the sequential criteria proved later can be stated pointwise.
````

### `def-dependent-choice`

````markdown
---
id: def-dependent-choice
kind: definition
title: "The axiom of dependent choice: a relation in which every element is related to something admits an $\\mathbb{N}$-indexed chain"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-choice-function, def-axiom-of-choice, def-countable-choice, def-sequence, def-natural-numbers]
justified_by: []
aliases: [def-dc]
landmark: true
short: "dependent choice (DC)"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "H. Herrlich, Axiom of Choice, Lecture Notes in Mathematics 1876, Springer 2006"
      url: "https://link.springer.com/book/10.1007/11601562"
pipeline_run: null
---

## Definition

Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$.
Call $R$ **entire on $X$** when

$$\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$$

The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following
statement.

> For every nonempty set $X$, every relation $R$ entire on $X$, and every
> $a \in X$, there is a sequence $x : \mathbb{N} \to X$ ([[def-sequence]],
> [[def-natural-numbers]]) with
> $$x_0 = a \qquad \text{and} \qquad x_n \mathbin{R} x_{n+1} \ \text{ for every } n \in \mathbb{N}.$$

As everywhere in this library $\mathbb{N}$ contains $0$, and the sequence is
indexed from $0$; the term $x_0$ is the prescribed starting point $a$ and every
later term is related to its predecessor.

**What DC adds to what came before.** [[def-choice-function]] and
[[def-axiom-of-choice]] select one element from each member of a family that is
fixed in advance, and [[def-countable-choice]] does the same for a family indexed
by $\mathbb{N}$. In both, the family is given before any selection is made. DC is
the principle needed when the $n$-th set to select from is not known until the
first $n$ selections have been made: here the admissible values of $x_{n+1}$ are
exactly the $R$-successors of $x_n$, so the family being chosen from is built
along the choosing. That is precisely the situation $\mathrm{AC}_\omega$ does not
cover, and it is why a construction "pick $x_{n+1}$ depending on $x_n$, for every
$n$ at once" is not licensed by countable choice.

**The starting point may be dropped.** The formally weaker statement obtained by
deleting the clause $x_0 = a$ — for every nonempty $X$ and every entire $R$ there
is a sequence with $x_n \mathbin{R} x_{n+1}$ for all $n$ — is an immediate
consequence of the form above, since $X$ is nonempty and any of its elements may
be taken as $a$. The reverse derivation is standard and is not needed anywhere in
this library, so it is not carried out; every use below prescribes $x_0$.

**$R$ need not be an order and the terms need not be distinct.** What DC delivers
is a sequence, that is a function $\mathbb{N} \to X$, not a chain in the
order-theoretic sense ([[def-chain]]). The relation may be symmetric, and the
sequence may repeat a value or be constant; all that is asserted is
$x_n \mathbin{R} x_{n+1}$ at every index.

## Remarks

**Where DC sits among the choice principles.** It is a standard fact, proved in
the references and **not** in this library, that

$$\mathrm{AC} \;\Longrightarrow\; \mathrm{DC} \;\Longrightarrow\; \mathrm{AC}_\omega ,$$

and that neither implication reverses. The non-reversals are relative-consistency
results: what they establish is that ZF, if consistent, does not prove the
missing implications, never that those implications are false. This library
contains neither forcing nor permutation models and proves no independence
result, so all of that is quoted from the references and used nowhere.

**Nothing in this library proves DC, and nothing assumes it silently.** Like
[[def-axiom-of-choice]] and [[def-countable-choice]], DC is a statement that may
be assumed or not. Every theorem whose proof uses it says so in its own
statement, and the accounting for the compactness page is collected in
[[rem-compactness-choice-ledger-metric]].

**An upper bound, never a lower one.** When a later item records that its proof
uses DC, the claim made is that the argument given here is carried out in
$\mathrm{ZF} + \mathrm{DC}$. No item claims that DC is *necessary* for the
statement proved, because establishing necessity means separating the statement
from ZF, and that is an independence result of exactly the kind this library does
not prove.
````

### `def-interior-closure-boundary-top`

````markdown
---
id: def-interior-closure-boundary-top
kind: definition
title: "Interior, closure, boundary, exterior, derived set and isolated point in a topological space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top]
justified_by: []
aliases: [def-closure-top, def-interior-top, def-boundary-top, def-derived-set-top]
landmark: true
short: "interior, closure, boundary, derived set"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Interior (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interior_(topology)"
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Boundary (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boundary_(topology)"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), let
$A \subseteq X$ and let $x \in X$. Neighbourhoods are as in
[[def-neighbourhood-top]], so a neighbourhood need not be open.

- The **interior** of $A$ is
  $\operatorname{int}(A) := \bigcup \{\, U \in \mathcal{T} : U \subseteq A \,\}$.
- The **closure** of $A$ is
  $\overline{A} := \bigcap \{\, F \subseteq X : F \text{ closed and } A \subseteq F \,\}$.
- The **exterior** of $A$ is $\operatorname{ext}(A) := \operatorname{int}(X \setminus A)$.
- The **boundary** of $A$ is $\partial A := \overline{A} \setminus \operatorname{int}(A)$.
- $x$ is a **limit point** (accumulation point) of $A$ if every neighbourhood $N$
  of $x$ satisfies $N \cap (A \setminus \{x\}) \ne \varnothing$. The set of limit
  points of $A$ is the **derived set** $A'$.
- $x$ is an **isolated point of $A$** if $x \in A$ and some neighbourhood $N$ of
  $x$ satisfies $N \cap A = \{x\}$.

**Both operators are well posed, and the two names are justified rather than
asserted.** The interior is a union of open sets, hence open by (T2), it is
contained in $A$, and it contains every open $U \subseteq A$: so
$\operatorname{int}(A)$ is *the largest open subset of $A$*. The family being
intersected in the definition of $\overline{A}$ is nonempty, since $X$ is closed
and contains $A$, so the intersection is a set; it is closed by (C2) of
[[def-topological-space]], it contains $A$, and it is contained in every closed
$F \supseteq A$: so $\overline{A}$ is *the smallest closed superset of $A$*. In
particular

$$\operatorname{int}(A) \subseteq A \subseteq \overline{A},$$

and $A$ is open if and only if $A = \operatorname{int}(A)$, and closed if and
only if $A = \overline{A}$, in each case because one inclusion is automatic and
the other says exactly that $A$ belongs to the family in question.

**Interior and closure are exchanged by complementation.** For every
$A \subseteq X$,

$$X \setminus \operatorname{int}(A) = \overline{X \setminus A}, \qquad X \setminus \overline{A} = \operatorname{int}(X \setminus A) = \operatorname{ext}(A).$$

Indeed $U \mapsto X \setminus U$ is a bijection between the open subsets of $A$
and the closed supersets of $X \setminus A$, and it turns unions into
intersections ([[def-topological-space]]); applying complementation to the first
identity gives the second. So $\operatorname{ext}(A) = X \setminus \overline{A}$,
and every statement about interiors has a mirror statement about closures.

**The pointwise description of the interior.** $x \in \operatorname{int}(A)$ if
and only if $A$ is a neighbourhood of $x$. If $x \in \operatorname{int}(A)$ then
$\operatorname{int}(A)$ is an open set with $x \in \operatorname{int}(A) \subseteq A$;
conversely a neighbourhood relation $x \in U \subseteq A$ with $U$ open puts $x$
in the union defining $\operatorname{int}(A)$. The corresponding description of
the closure is proved as the next item, because it is the statement that does the
work in every later proof.

**$X$ is the disjoint union of the three regions.** Since
$\operatorname{int}(A) \subseteq \overline{A}$, the three sets
$\operatorname{int}(A)$, $\partial A = \overline{A} \setminus \operatorname{int}(A)$
and $\operatorname{ext}(A) = X \setminus \overline{A}$ are pairwise disjoint and
their union is $X$. This is recorded again, with the identities for interior and
closure of unions and intersections, in the lemma two items below.

## Remarks

- **The boundary is symmetric in $A$ and its complement**:
  $\partial A = \overline{A} \cap \overline{X \setminus A}$, because
  $\overline{A} \setminus \operatorname{int}(A) = \overline{A} \cap (X \setminus \operatorname{int}(A)) = \overline{A} \cap \overline{X \setminus A}$
  by the complementation identity above. Hence $\partial A = \partial(X \setminus A)$,
  and $\partial A$ is closed, being an intersection of two closed sets.

- **A limit point of $A$ need not lie in $A$, and a point of $A$ need not be a
  limit point of $A$.** The points of $A$ that are not limit points of $A$ are
  exactly its isolated points, directly from the two definitions. The relation
  $\overline{A} = A \cup A'$ is a theorem, proved next, not a restatement.

- **These are the metric notions when the topology is a metric topology.** For a
  metric space the definitions of [[def-metric-interior-closure-boundary]] are
  stated with balls in place of neighbourhoods, and the balls around $x$ are a
  neighbourhood base at $x$; the identification is carried out where metrizable
  spaces are defined, later on this page, and it is what allows metric examples
  to be quoted here without reproof.
````

### `def-interval`

````markdown
---
id: def-interval
kind: definition
title: "Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field, def-real-order, def-bounded-set]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (segments and cells)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §0.3 and §1.1"
      url: "https://www.jirka.org/ra/"
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]).

A subset $I \subseteq \mathbb{R}$ is **order-convex** when

$$x, y \in I \text{ and } x \le z \le y \;\Longrightarrow\; z \in I .$$

The **intervals** of $\mathbb{R}$ are the sets of the following nine forms, where
$a, b \in \mathbb{R}$:

| | bounded forms | | one-sided and full forms |
|---|---|---|---|
| $(a,b)$ | $\{x : a < x < b\}$ | $(a,\infty)$ | $\{x : a < x\}$ |
| $[a,b]$ | $\{x : a \le x \le b\}$ | $[a,\infty)$ | $\{x : a \le x\}$ |
| $[a,b)$ | $\{x : a \le x < b\}$ | $(-\infty,b)$ | $\{x : x < b\}$ |
| $(a,b]$ | $\{x : a < x \le b\}$ | $(-\infty,b]$ | $\{x : x \le b\}$ |
| | | $(-\infty,\infty)$ | $\mathbb{R}$ |

An interval is **open** when both of its written endpoints are excluded, that is
for the forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$ and $(-\infty,\infty)$; it is
**closed** when both written endpoints are included, that is for $[a,b]$,
$[a,\infty)$, $(-\infty,b]$ and $(-\infty,\infty)$. The forms $[a,b)$ and
$(a,b]$ are **half-open**.

**The symbols $\pm\infty$ are notation and not elements of $\mathbb{R}$.** They
mark which side carries no endpoint condition at all; the five forms in the right
column are defined by the displayed conditions on $x$ alone, and no arithmetic is
ever performed with $\infty$. This is the same refusal to extend $\mathbb{R}$
silently that [[rem-sup-conventions]] records for suprema.

**Every one of the nine forms is order-convex.** Each is defined by a conjunction
of at most two conditions, each of the shape $a < x$, $a \le x$, $x < b$ or
$x \le b$, and each such condition is inherited by an intermediate point: if
$a < x$ and $x \le z$ then $a < z$, and if $z \le y$ and $y < b$ then $z < b$,
by transitivity of the order ([[def-ordered-field]]). Applying this to whichever
one or two conditions define the form in question gives $z \in I$ whenever
$x, y \in I$ and $x \le z \le y$.

**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly
when it is of one of the four forms in the left column: for those, $a$ is a lower
bound and $b$ an upper bound. The other five forms are unbounded, on the side or
sides written with $\infty$; the verification is in the remarks below.

**Nondegeneracy.** An interval is **degenerate** when it has at most one element,
and **nondegenerate** when it has at least two. For the four bounded forms with
endpoints $a$ and $b$:

- $[a,b]$ is nonempty exactly when $a \le b$, and it is nondegenerate exactly
  when $a < b$. It is the singleton $\{a\}$ when $a = b$.
- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each
  is nondegenerate.

The only assertion here that is not immediate from the defining conditions is
that $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because
$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to
both sides and halving ([[def-ordered-field]]); repeating the halving inside
$(a, (a+b)/2)$ produces a second point.

**Closed bounded intervals.** These are the sets $[a,b]$ with $a \le b$, which is
exactly the condition making them nonempty. They are the intervals the nested
interval property is stated for, and the phrase *closed bounded interval* always
carries the hypothesis $a \le b$ in this library.

**Length.** The **length** of a bounded interval presented by its endpoints
$a \le b$ is

$$\ell = b - a \;\ge\; 0 .$$

Length is attached to the presentation by endpoints and is not recovered from the
set: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is
$(c,c)$ for any other $c$, while each of these presentations has length $0$, so
nothing inconsistent arises; but the endpoints are named explicitly at every
point where a length is used in this library, and never inferred from the set.
Unbounded intervals are assigned no length.

## Remarks

- **Why the five unbounded forms really are unbounded.** Take $[a,\infty)$ and
  suppose $u \in \mathbb{R}$ were an upper bound of it. The element
  $x = a + |u - a| + 1$ satisfies $x \ge a$, so $x \in [a,\infty)$, and
  $x \ge a + (u - a) + 1 = u + 1 > u$, since $|t| \ge t$ ([[lem-of-abs-value]])
  and $1 > 0$ ([[cor-of-one-positive]]). That contradicts $x \le u$. The same
  computation with $a$ replaced by any element of $(a,\infty)$ handles the open
  form, and reflecting through the origin handles $(-\infty,b)$ and
  $(-\infty,b]$; $\mathbb{R}$ itself is unbounded on both sides for the same
  reason. Note that this uses no Archimedean property: it is the failure of a
  *single* bound, not the cofinality of the naturals.

- **The converse classification is not asserted here.** It is true that every
  order-convex subset of $\mathbb{R}$ is empty or one of the nine forms, and the
  proof runs through suprema and infima, but nothing in this library needs it and
  it is not proved anywhere here. What is used is only the direction proved
  above: each of the nine forms is order-convex.

- **Degenerate intervals are kept, not excluded.** $[a,a] = \{a\}$ and
  $(a,a) = \emptyset$ are intervals under this definition. Excluding them would
  force a nonemptiness hypothesis into every statement that produces an interval,
  and the nested interval property is a good illustration: its conclusion is that
  the intersection is nonempty, and in the equality case the intersection is the
  degenerate interval $[a,a]$, which is exactly the single point.
````

### `def-normal-and-t4-spaces`

````markdown
---
id: def-normal-and-t4-spaces
kind: definition
title: "Normal spaces and $T_4$ spaces, with the source disagreement over whether normality includes $T_1$ stated explicitly"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-space, def-t0-and-t1-spaces, def-separated-sets,
       def-standard-topologies, def-neighbourhood-top]
justified_by: []
aliases: [def-normal-space, def-t4-space]
landmark: true
short: "normal space, $T_4$ space"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §32"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 31: The Separation Axioms (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-31.pdf"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **normal** when any two disjoint closed sets can be separated by
  disjoint open sets: for all closed $A, B \subseteq X$ with
  $A \cap B = \varnothing$ there are $U, V \in \mathcal{T}$ with
  $$A \subseteq U, \qquad B \subseteq V, \qquad U \cap V = \varnothing .$$
- $X$ is **$T_4$** when it is normal **and** $T_1$ ([[def-t0-and-t1-spaces]]).

Either of $A$, $B$ may be empty, and those cases are met by $U = \varnothing$ or
$V = \varnothing$ together with $X$; so the condition hides no nonemptiness
hypothesis. As with regularity, "disjoint open sets" may equivalently be read as
"disjoint open neighbourhoods of the two sets" ([[def-neighbourhood-top]]).

**Normality is the special case of complete normality at a disjoint closed
pair.** Disjoint closed sets are separated in the sense of
[[def-separated-sets]], since the closure of a closed set is itself; so a space
in which every *separated* pair can be put into disjoint open sets is in
particular normal. That stronger condition is defined later on this page, and the
implication is proved there.

**The convention fork, and this library's side of it.** Exactly as for
regularity, textbooks disagree about whether *normal* carries a $T_1$ hypothesis.
Munkres builds it in; Kelley, Willard and Engelking do not. **This library takes
the second side**: *normal* names the separation condition alone, $T_4$ names
normal plus $T_1$, and the $T_1$ hypothesis is written out wherever it is used.
The reason is again that the two halves are independent, and here the point is
sharp: **normality without $T_1$ implies nothing at all** in the hierarchy. The
indiscrete topology on a two-point set ([[def-standard-topologies]]) is normal,
its only closed sets being $\varnothing$ and the whole space, and it is not even
$T_0$; Sierpinski space is normal, $T_0$ and not regular. Both are recorded on
this page, the first as a false statement and both on the companion page.

## Remarks

- **Normality does not imply regularity**, and the failure is witnessed by
  Sierpinski space on the companion page, which is normal and not regular.
  Whether *regularity* implies normality is a question this page leaves open: any
  witness reachable from the material here would need cardinal arithmetic or the
  hereditary behaviour of regularity. This page's own prerequisites still supply
  neither: cardinal arithmetic and cofinality is now built, but *below* this
  one, and nothing here draws on it; the hereditary and productive behaviour of
  the separation axioms is developed later in the reading order. So nothing above
  asserts an answer and no false statement asserting
  one is planted here ([[rem-separation-axiom-conventions]]).

- **Normality is the axiom that behaves worst**, and the companion page shows
  one symptom: the deleted Tychonoff plank, a subspace of a product of two
  ordinal spaces each of which is $T_3$, is Hausdorff and not normal. Whether
  normality is inherited by subspaces or preserved by products is a question this
  page does not answer, and nothing here asserts an answer; the plank is
  presented only as a Hausdorff space that fails normality.

- **What the definition does *not* say.** It says nothing about separating a
  point from a closed set, because a point need not be closed; that is the
  content of the $T_1$ hypothesis in $T_4$, and the theorem two items below is
  where it is spent.
````

### `def-subspace-topology-top`

````markdown
---
id: def-subspace-topology-top
kind: definition
title: "Subspace topology: the traces of the open sets, its closed sets and its bases, the continuity of the inclusion, and the characteristic property of a map into a subspace"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-topology-basis-subbasis, def-continuous-map-top, thm-continuity-characterisations-top]
justified_by: []
aliases: [def-subspace-top, def-relative-topology]
landmark: true
short: "subspace topology"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Subspace topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subspace_topology"
    - title: "J. Munkres, Topology, 2nd ed., §16"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$S \subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is

$$\mathcal{T}_S := \{\, U \cap S : U \in \mathcal{T} \,\},$$

the family of **traces** on $S$ of the open sets of $X$. The pair
$(S, \mathcal{T}_S)$ is a **subspace** of $X$. A subset of $S$ that lies in
$\mathcal{T}_S$ is said to be **open in $S$**, and *relatively open* where the
ambient space needs emphasis.

**$\mathcal{T}_S$ is a topology, and this is discharged here.** (T1):
$\varnothing = \varnothing \cap S$ and $S = X \cap S$ are traces. (T2): if
$\mathcal{S}' \subseteq \mathcal{T}_S$, choose for each member a set of
$\mathcal{T}$ tracing to it — no choice principle is needed, since
$U' := \bigcup \{\, U \in \mathcal{T} : U \cap S \subseteq W \,\}$ is a canonical
such set for $W \in \mathcal{T}_S$, being open by (T2) in $X$ and satisfying
$U' \cap S = W$ — and then
$\bigcup_i (U_i \cap S) = (\bigcup_i U_i) \cap S \in \mathcal{T}_S$ by (T2) in
$X$. (T3): $(U \cap S) \cap (V \cap S) = (U \cap V) \cap S \in \mathcal{T}_S$ by
(T3) in $X$.

**Closed sets of a subspace are the traces of the closed sets.** A set
$C \subseteq S$ is closed in $S$ if and only if $C = F \cap S$ for some closed
$F \subseteq X$. Indeed $S \setminus (U \cap S) = (X \setminus U) \cap S$ and
$S \setminus (F \cap S) = (X \setminus F) \cap S$, so complementation inside $S$
matches complementation inside $X$ under tracing.

**Bases and subbases trace as well.** If $\mathcal{B}$ is a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) then
$\mathcal{B}_S := \{\, B \cap S : B \in \mathcal{B} \,\}$ is a basis for
$\mathcal{T}_S$: its members are open in $S$, and for $W = U \cap S$ open in $S$
and $x \in W$ there is $B \in \mathcal{B}$ with $x \in B \subseteq U$, whence
$x \in B \cap S \subseteq W$. The same computation with a subbasis $\mathcal{S}$
shows that $\{\, S_0 \cap S : S_0 \in \mathcal{S} \,\}$ is a subbasis for
$\mathcal{T}_S$, since tracing commutes with finite intersections and with
unions.

**The inclusion is continuous.** The inclusion map $\iota : S \to X$,
$\iota(s) = s$, satisfies $\iota^{-1}[U] = U \cap S$ for every $U \subseteq X$,
so preimages of open sets are open and $\iota$ is continuous
([[thm-continuity-characterisations-top]], clause (b)). Moreover
$\mathcal{T}_S$ is the **coarsest** topology on $S$ making $\iota$ continuous: any
topology on $S$ for which $\iota$ is continuous must contain every
$\iota^{-1}[U] = U \cap S$, hence contain $\mathcal{T}_S$.

**Characteristic property of a map into a subspace.** Let $(Z, \mathcal{T}_Z)$ be
a topological space and let $g : Z \to S$ be a function. Then

$$g \text{ is continuous as a map } Z \to (S,\mathcal{T}_S) \iff \iota \circ g \text{ is continuous as a map } Z \to (X,\mathcal{T}) .$$

*Proof.* For $U \in \mathcal{T}$ one has
$(\iota \circ g)^{-1}[U] = g^{-1}[\iota^{-1}[U]] = g^{-1}[U \cap S]$. If $g$ is
continuous then each $g^{-1}[U \cap S]$ is open, so $\iota \circ g$ is continuous;
conversely if $\iota \circ g$ is continuous then for any $W = U \cap S$ open in
$S$ the set $g^{-1}[W] = (\iota \circ g)^{-1}[U]$ is open, so $g$ is continuous.
Both directions use only clause (b) of [[thm-continuity-characterisations-top]].

**Restriction of a continuous map.** If $f : X \to Y$ is continuous and
$S \subseteq X$, then $f|_S : S \to Y$ is continuous, since
$(f|_S)^{-1}[V] = f^{-1}[V] \cap S$ is open in $S$ for every open $V \subseteq Y$
([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).

**When relative and ambient agree.** If $S$ is open in $X$ then a subset of $S$
is open in $S$ if and only if it is open in $X$: a trace $U \cap S$ is then an
intersection of two open sets of $X$, and conversely an open subset of $X$
contained in $S$ is its own trace. The same statement with "closed" throughout
holds when $S$ is closed in $X$. Both are used in the pasting lemma of the next
item, and both fail without the hypothesis: $S$ itself is always open and closed
in $S$, and need be neither in $X$.

## Remarks

- **The subspace topology is what makes a subset a space.** Before it, a statement
  such as "the restriction of $f$ to $C$ is continuous" has no meaning, because
  $C$ carries no topology. Every restriction below is taken with respect to the
  subspace topology and with no other convention available.

- **Openness and closedness are not absolute.** $[0,1)$ is open in $[0,2)$ and is
  neither open nor closed in $\mathbb{R}$; the interval $(0,1)$ is closed in
  itself. A sentence of the form "$A$ is open" is incomplete unless the space is
  named, and this library names it whenever more than one is in play.

- **Transitivity.** If $S \subseteq T \subseteq X$ then the subspace topology $S$
  inherits from $(T, \mathcal{T}_T)$ is the subspace topology it inherits from
  $X$, since $(U \cap T) \cap S = U \cap S$ for $U \in \mathcal{T}$. So no
  ambiguity arises from the route by which a subset is reached.
````

### `def-the-dyadic-rationals-of-the-unit-interval`

````markdown
---
id: def-the-dyadic-rationals-of-the-unit-interval
kind: definition
title: "The dyadic rationals of $[0,1]$, their finite levels $D_n$, and their density in $[0,1]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-interval, def-integer-power, def-canonical-natural, def-nat-power,
       cor-archimedean-reciprocal, def-ordered-field, def-natural-numbers,
       def-nat-order, thm-induction-principle, thm-well-ordering-principle,
       lem-of-naturals-positive, lem-of-inverse-positive, def-countable,
       lem-nat-nonzero-is-successor]
justified_by: []
aliases: [def-dyadic-rationals]
landmark: true
short: "dyadic rationals of $[0,1]$"
verification:
  precheck: n/a
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Dyadic rational (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dyadic_rational"
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Throughout, $\iota$ is the canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]),
and as is standard $\iota(k)$ is abbreviated to $k$ once no ambiguity results
([[cor-archimedean-reciprocal]]). For $m, n \in \mathbb{N}$, $m^n \in \mathbb{N}$ is the
natural-number power of [[def-nat-power]], distinct from but agreeing with the
real (integer) power $a^n$ of [[def-integer-power]] by that item's clause (d):
$\iota(m^n) = \iota(m)^n$. Writing $2$ for $\iota(2)$ as just agreed, this lets
$2^n$ be read as a natural number **or** as the real $\iota(2)^n$ interchangeably.

For $n \in \mathbb{N}$ put

$$D_n \;:=\; \Big\{\, \frac{k}{2^n} \;:\; k \in \mathbb{N},\ k \le 2^n \,\Big\} \;\subseteq\; [0,1],$$

the order $\le$ on the naturals $k$ and $2^n$ being that of [[def-nat-order]].
Each $D_n$ is
a finite subset of $[0,1]$ ([[def-interval]]) with $0, 1 \in D_n$ (the cases
$k=0$ and $k=2^n$); it has at most $2^n+1$ elements, so is finite in the sense
of [[def-countable]]. The **dyadic rationals of $[0,1]$** are

$$D \;:=\; \bigcup_{n \in \mathbb{N}} D_n \;\subseteq\; [0,1],$$

a countable union of finite sets. Each **level** $D_n$ is nested in the next:
if $k \le 2^n$ then $2k \le 2^{n+1}$ (multiplying the natural inequality by $2$),
and $\dfrac{k}{2^n} = \dfrac{2k}{2^{n+1}}$ in $\mathbb{R}$ (clearing the common
factor $\iota(2)$, licensed by [[def-ordered-field]]), so every element of $D_n$
is exhibited as an element of $D_{n+1}$; hence $D_0 \subseteq D_1 \subseteq
D_2 \subseteq \cdots$ and $D = \bigcup_n D_n$ is genuinely increasing, not
merely a union.

**The level decomposition, stated and discharged here because the recursion of
[[thm-urysohn-lemma]] consumes it.** For $n \in \mathbb{N}$,

$$D_{n+1} \;=\; D_n \,\cup\, \Big\{\, t_j := \frac{2j+1}{2^{n+1}} \;:\; j \in \mathbb{N},\ j < 2^n \,\Big\},$$

and the new points $t_j$ are pairwise distinct, none lies in $D_n$, and each
lies strictly between the $D_n$-consecutive pair $r_j := j/2^n$ and
$s_j := (j+1)/2^n$. *Strict betweenness:* $2j < 2j+1 < 2j+2$, and dividing by
the positive $2^{n+1}$ preserves strict order ([[def-ordered-field]]), so
$r_j = 2j/2^{n+1} < t_j < (2j+2)/2^{n+1} = s_j$. *Distinctness:* $j \mapsto
2j+1$ is injective. *Disjointness from $D_n$:* $t_j = k/2^n$ with
$k \le 2^n$ would give $2j+1 = 2k$ after clearing the positive factor
$1/2^{n+1}$ and applying injectivity of $\iota$; but $k \le j$ gives
$2k \le 2j < 2j+1$, and $k \ge j+1$ gives $2k \ge 2j+2 > 2j+1$, so no such $k$
exists. *The union is all of $D_{n+1}$:* given $k/2^{n+1}$ with
$k \le 2^{n+1}$, the set $\{\, i \in \mathbb{N} : 2i > k \,\}$ is nonempty
($2(k+1) = 2k+2 > k$), so by [[thm-well-ordering-principle]] it has a least
element $i_0$, and $i_0 \ge 1$ since $2 \cdot 0 = 0 \le k$; writing
$i_0 = j+1$ ([[lem-nat-nonzero-is-successor]]) gives $2j \le k < 2j+2$, so
$k = 2j$ or $k = 2j+1$. In the first case $k/2^{n+1} = j/2^n \in D_n$ (with
$j \le 2^n$ since $2j \le 2^{n+1}$); in the second it is $t_j$ (with $j < 2^n$
since $2j+1 \le 2^{n+1}$ forces $2j < 2^{n+1}$). Finally, **any two elements of
$D$ lie together in a common level**: one lies in some $D_m$ and the other in
some $D_{m'}$, and both then lie in $D_{\max(m,m')}$ by the nesting just
proved.

**$D$ is dense in $[0,1]$: for every $x \in [0,1]$ and every real
$\varepsilon > 0$ there is $r \in D$ with $|x - r| < \varepsilon$.** First, a
growth fact about natural-number powers, proved by induction on $n$
([[thm-induction-principle]]): $2^n \ge n+1$ for every $n \in \mathbb{N}$. At
$n=0$, $2^0 = 1 = 0+1$. If $2^n \ge n+1$, then $2^{n+1} = 2^n \cdot 2 = 2^n + 2^n
\ge (n+1) + (n+1) = 2n+2 \ge n+2 = (n+1)+1$, the middle inequality adding the
inductive hypothesis to itself and the last holding since $n \ge 0$; both steps
use only that the order of $\mathbb{N}$ is compatible with addition
([[def-nat-order]]). Transporting the inequality into $\mathbb{R}$ by the
order-preserving $\iota$ ([[lem-of-naturals-positive]]) gives $\iota(2^n) \ge
\iota(n+1) = \iota(n)+1$ for every $n$.

Now fix $x \in [0,1]$ and a real $\varepsilon > 0$. By
[[cor-archimedean-reciprocal]] fix a natural $m \ge 1$ with $1/m < \varepsilon$.
Put $n := m$; then $\iota(2^n) \ge \iota(n)+1 = \iota(m)+1 > \iota(m) > 0$, so by
[[lem-of-inverse-positive]] $0 < 1/2^n < 1/m < \varepsilon$. Consider
$S := \{\, k \in \mathbb{N} : x \le k/2^n \,\}$. It is nonempty, since $k=2^n$
satisfies $x \le 1 = 2^n/2^n$ because $x \in [0,1]$; so by
[[thm-well-ordering-principle]] $S$ has a least element $k_0$, and $k_0 \le 2^n$
because $2^n \in S$. If $k_0 = 0$ then $x \le 0$, and $x \ge 0$ since $x \in
[0,1]$, so $x = 0 = 0/2^n \in D_n \subseteq D$, within distance $0 < \varepsilon$
of itself. If $k_0 \ge 1$ then $k_0 - 1 \in \mathbb{N}$ and, by minimality of
$k_0$, $k_0 - 1 \notin S$, that is $x > (k_0-1)/2^n = k_0/2^n - 1/2^n$; combined
with $x \le k_0/2^n$ this gives $|x - k_0/2^n| \le 1/2^n < \varepsilon$, and
$r := k_0/2^n \in D_n \subseteq D$ since $k_0 \le 2^n$. Either way some $r \in D$
satisfies $|x-r| < \varepsilon$.

## Remarks

- **Every dyadic rational of $[0,1]$ other than $0$ and $1$ lies strictly
  between them**, since $0 < k/2^n < 1$ exactly when $0 < k < 2^n$.

- **The finite levels, not $D$ itself, are what the construction of Urysohn's
  lemma recurses on.** $D$ is presented here as the increasing union
  $\bigcup_n D_n$ precisely so that a family indexed by $D$ can be built one
  finite level at a time, each level adding only finitely many new indices to
  the one before.
````

### `def-topological-space`

````markdown
---
id: def-topological-space
kind: definition
title: "Topology on a set, open and closed sets, clopen sets, the closed-set axiomatisation, and the coarser/finer comparison"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-partial-order]
justified_by: []
aliases: [def-topology, def-open-set-top, def-closed-set-top]
landmark: true
short: "topology, open, closed, clopen"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Topological space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Topological_space"
    - title: "Comparison of topologies (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Comparison_of_topologies"
    - title: "J. Munkres, Topology, 2nd ed., §12"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $X$ be a set and write $\mathcal{P}(X)$ for its power set. A **topology** on
$X$ is a family $\mathcal{T} \subseteq \mathcal{P}(X)$ such that

- **(T1)** $\varnothing \in \mathcal{T}$ and $X \in \mathcal{T}$;
- **(T2)** $\bigcup \mathcal{S} \in \mathcal{T}$ for every $\mathcal{S} \subseteq \mathcal{T}$;
- **(T3)** $U \cap V \in \mathcal{T}$ for all $U, V \in \mathcal{T}$.

A **topological space** is a pair $(X, \mathcal{T})$ consisting of a set $X$ and
a topology $\mathcal{T}$ on it; the elements of $X$ are its **points**. When only
one topology is in play we write $X$ for the pair; when several are, the topology
is always named.

The members of $\mathcal{T}$ are the **open** sets of $(X,\mathcal{T})$. A subset
$F \subseteq X$ is **closed** when its complement $X \setminus F$ is open, and
**clopen** when it is both open and closed. By (T1) both $\varnothing$ and $X$
are clopen. *Open and closed are not opposites*: a set may be neither, and it may
be both, so "not open" is never a synonym for "closed".

**Finite intersections, and the empty one.** Axiom (T3) is stated for two sets
because that is all that is ever needed: if $n \ge 1$ and
$U_1, \dots, U_n \in \mathcal{T}$, then $U_1 \cap \dots \cap U_n \in \mathcal{T}$
follows by iterating (T3) $n-1$ times. The intersection of the **empty** family
of subsets of $X$ is $X$, since the condition "lies in every member of the empty
family" is vacuous; that case is covered by (T1) rather than by (T3), which is
one of the two reasons $X \in \mathcal{T}$ is demanded outright. The other is
that (T2) alone gives only $\bigcup \varnothing = \varnothing$.

**The closed sets, and the dual axiomatisation.** Put
$\mathcal{C} := \{\, X \setminus U : U \in \mathcal{T} \,\}$, the family of closed
sets. Then

- **(C1)** $\varnothing \in \mathcal{C}$ and $X \in \mathcal{C}$;
- **(C2)** $\bigcap \mathcal{D} \in \mathcal{C}$ for every **nonempty**
  $\mathcal{D} \subseteq \mathcal{C}$;
- **(C3)** $C \cup D \in \mathcal{C}$ for all $C, D \in \mathcal{C}$.

Conversely, if a family $\mathcal{C} \subseteq \mathcal{P}(X)$ satisfies (C1),
(C2) and (C3), then $\mathcal{T} := \{\, X \setminus C : C \in \mathcal{C} \,\}$
is a topology on $X$ whose closed sets are exactly the members of $\mathcal{C}$.
So a topology may be presented equally well by its open sets or by its closed
sets, and this library uses whichever is shorter.

*Both directions are one computation, and it is carried out here rather than
assumed.* The map $U \mapsto X \setminus U$ is an involution of
$\mathcal{P}(X)$, hence a bijection, and it carries the two De Morgan identities

$$X \setminus \bigcup_{i \in I} A_i = \bigcap_{i \in I} (X \setminus A_i) \quad (I \ne \varnothing), \qquad X \setminus \bigcap_{i \in I} A_i = \bigcup_{i \in I} (X \setminus A_i) \quad (I \ne \varnothing)$$

term by term into each other. Given (T1)–(T3): $\varnothing = X \setminus X$ and
$X = X \setminus \varnothing$ lie in $\mathcal{C}$, which is (C1); for nonempty
$\mathcal{D} \subseteq \mathcal{C}$ the family
$\mathcal{S} = \{\, X \setminus C : C \in \mathcal{D} \,\}$ lies in $\mathcal{T}$
and $\bigcap \mathcal{D} = X \setminus \bigcup \mathcal{S}$ is closed by (T2),
which is (C2); and $C \cup D = X \setminus ((X \setminus C) \cap (X \setminus D))$
is closed by (T3), which is (C3). Given (C1)–(C3) the same three lines run
backwards, the empty-union case $\bigcup \varnothing = \varnothing$ being supplied
by (C1) rather than by (C2); and $\{\, X \setminus C : C \in \mathcal{C} \,\}$ has
$\mathcal{C}$ as its family of complements because complementation is an
involution.

**Comparison of topologies.** If $\mathcal{T}_1$ and $\mathcal{T}_2$ are
topologies on the same set $X$ and $\mathcal{T}_1 \subseteq \mathcal{T}_2$, then
$\mathcal{T}_1$ is **coarser** than $\mathcal{T}_2$ and $\mathcal{T}_2$ is
**finer** than $\mathcal{T}_1$; the comparison is **strict** when the inclusion
is. Inclusion is a partial order on the set of topologies on $X$
([[def-partial-order]]), and it is not a total one: two topologies on the same
set may be incomparable.

## Remarks

- **The topology is part of the data.** Two different topologies on one set are
  two different topological spaces, exactly as two different metrics on one set
  are two different metric spaces. Every statement below that says "the space
  $X$" has a topology fixed in advance.

- **Nothing is assumed beyond (T1)–(T3).** In particular no separation property
  is built into the word *space* here: distinct points need not lie in disjoint
  open sets, singletons need not be closed, and both failures occur in the
  standard topologies defined on the next item. Where a separation property is
  used it is stated as a hypothesis.

- **This library always writes *coarser* and *finer*.** The synonyms
  *smaller/larger* are unambiguous, but *weaker/stronger* is used in both
  directions in the literature and is avoided here entirely.

- **Why "arbitrary unions, finite intersections" and not the reverse.** The
  asymmetry is not a convention: it is what makes the metric notion of open set
  ([[def-metric-topology]]) an instance, and an arbitrary intersection of open
  sets genuinely need not be open. The failure is recorded on this page as a
  false statement, with witnesses in two different spaces.
````

### `lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function`

````markdown
---
id: lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function
kind: lemma
title: "If $(U_r)_{r \\in D}$ are open with $\\overline{U_r} \\subseteq U_s$ whenever $r < s$ and $U_1 = X$, then $x \\mapsto \\inf\\{ r \\in D : x \\in U_r \\}$ is a continuous map $X \\to [0,1]$, and no choice principle is used"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-the-dyadic-rationals-of-the-unit-interval, def-topological-space,
       def-continuous-map-top, thm-continuity-characterisations-top,
       def-topology-basis-subbasis, thm-basis-criterion, def-subspace-topology-top,
       def-interval, def-infimum, thm-infimum-property,
       def-interior-closure-boundary-top, lem-real-line-is-a-metric-space,
       def-metrizable-space]
justified_by: []
aliases: [lem-dyadic-scale-continuous]
landmark: true
short: "a dyadic open scale defines a continuous function"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Bernard Badzioch, MTH 427 Topology I, Notes 10"
      url: "https://www.math.buffalo.edu/~badzioch/MTH427/_static/mth427_notes_10.pdf"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$D$ be the dyadic rationals of $[0,1]$ ([[def-the-dyadic-rationals-of-the-unit-interval]]).
Let $(U_r)_{r \in D}$ be a family of open subsets of $X$ such that

$$\overline{U_r} \subseteq U_s \quad \text{whenever } r < s \text{ in } D, \qquad \text{and} \qquad U_1 = X.$$

Then

$$f(x) \;:=\; \inf\big(\{\, r \in D : x \in U_r \,\} \cup \{1\}\big)$$

defines a map $f : X \to [0,1]$, and $f$ is continuous.

**No choice principle is used in passing from the family $(U_r)_{r \in D}$ to
$f$.** Every existential instantiation in the proof below is a single choice
from a single nonempty set of reals, never a simultaneous selection over an
infinite index; where the family $(U_r)_{r \in D}$ itself is later built by a
choice-consuming recursion, that cost is incurred in producing the family, not
in this lemma.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, the dyadic rationals $D$ of $[0,1]$, and a family $(U_r)_{r \in D}$ of open subsets of $X$ with $\overline{U_r} \subseteq U_s$ whenever $r < s$ in $D$, and $U_1 = X$.

[A1] Shrinking hypothesis: for $r < s$ in $D$, $\overline{U_r} \subseteq U_s$.

[A2] $U_1 = X$.

[L1] $D \subseteq [0,1]$, and $D$ is dense in $[0,1]$: for every $x \in [0,1]$ and every real $\varepsilon > 0$ there is $r \in D$ with $|x-r| < \varepsilon$ ([[def-the-dyadic-rationals-of-the-unit-interval]]).

[L2] Infimum: a nonempty $S \subseteq \mathbb{R}$ bounded below has $\inf S \in \mathbb{R}$ ([[thm-infimum-property]]), which is a lower bound of $S$ and is $\ge$ every other lower bound of $S$ ([[def-infimum]]). Consequently, for a real $a$: (i) if some $s \in S$ has $s < a$ then $\inf S \le s < a$; (ii) if $\inf S < a$ then some $s \in S$ has $s < a$, since otherwise $a$ would be a lower bound of $S$ forcing $a \le \inf S$; (iii) if $r < \inf S$ then $r < s$ for every $s \in S$, since $\inf S$ is itself a lower bound of $S$.

[L3] The traces on $[0,1]$ of the order rays, $[0,a) := (-\infty,a) \cap [0,1]$ and $(a,1] := (a,\infty) \cap [0,1]$ for $a \in \mathbb{R}$, form a subbasis for the subspace topology of $[0,1]$ ([[def-subspace-topology-top]]). Indeed each ray $(-\infty,a)$, $(a,\infty)$ is a union of bounded open intervals of $\mathbb{R}$, hence open in the usual topology ([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]), so the topology the rays generate is contained in the usual topology of $\mathbb{R}$; and every bounded open interval $(a,b)$ is the intersection $(a,\infty) \cap (-\infty,b)$ of two rays, so by [[thm-basis-criterion]] the finite intersections of the rays already form a basis containing every bounded open interval, hence the rays generate at least the usual topology. The two inclusions make the rays a subbasis for the usual topology of $\mathbb{R}$ ([[def-topology-basis-subbasis]]), and tracing a subbasis onto a subspace gives a subbasis for the subspace topology ([[def-subspace-topology-top]]).

[L4] Checking preimages of a fixed subbasis suffices for continuity ([[thm-continuity-characterisations-top]], clause (d)$\Leftrightarrow$(a)).

[L5] $A \subseteq \overline{A}$ for every $A \subseteq X$, and $X \setminus \overline{A}$ is open ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 For $x \in X$ put $S_x := \{\, r \in D : x \in U_r \,\} \cup \{1\}$; then $S_x$ is a nonempty subset of $[0,1]$, since $1 \in S_x$ and $D \subseteq [0,1]$ by [L1], so $S_x$ is bounded below by $0$ and above by $1$. [given, L1]

2.1 By step 1.1 and [L2], $\inf S_x$ exists in $\mathbb{R}$ for every $x \in X$, lies in $[0,1]$ since $0$ is a lower bound of $S_x$ and $\inf S_x \le 1$ as $1 \in S_x$; define $f : X \to [0,1]$ by $f(x) := \inf S_x$. [step 1.1, L2, construct]

3.1 For every $x \in X$ and real $a$ with $0 < a \le 1$: if there is $r \in D$ with $r < a$ and $x \in U_r$, then $r \in S_x$, so $f(x) \le r < a$ by [L2](i). [step 2.1, L2]

3.2 For every $x \in X$ and real $a$ with $0 < a \le 1$: if $f(x) < a$, then by [L2](ii) some $s \in S_x$ has $s < a \le 1$, so $s \ne 1$, hence $s \in D$ and $x \in U_s$, with $s < a$. [step 2.1, L2]

3.3 For real $a \le 0$: $\{x : f(x) < a\} = \varnothing$, since $f(x) \ge 0$ always by step 2.1; for real $a > 1$: $\{x : f(x) < a\} = X$, since $f(x) \le 1 < a$ always by step 2.1; both open. [step 2.1]

3.4 For every $x \in X$ and real $a$ with $0 \le a < 1$: if $f(x) > a$, put $x_0 := (a+f(x))/2 \in (a,f(x)) \subseteq [0,1]$ and $\delta := (f(x)-a)/2 > 0$; by [L1] fix $r_1 \in D$ with $|x_0 - r_1| < \delta$, so $r_1 \in (a,f(x))$. [step 2.1, L1, choose]

3.5 For every $x \in X$, real $a$ with $0 \le a < 1$, and $r \in D$ with $r > a$: if $x \notin \overline{U_r}$, then $r$ is a lower bound of $S_x$. Indeed, for $s = 1 \in S_x$: $r \le 1 = s$, since $r \in D \subseteq [0,1]$ by [L1]; for $s \in D$ with $x \in U_s$: if $s < r$ then [A1] gives $\overline{U_s} \subseteq U_r$, so $x \in U_s \subseteq \overline{U_s} \subseteq U_r \subseteq \overline{U_r}$ by [L5], contradicting $x \notin \overline{U_r}$, so $s \ge r$. [step 2.1, A1, L1, L5]

3.6 For real $a < 0$: $\{x : f(x) > a\} = X$, since $f(x) \ge 0 > a$ always by step 2.1; for real $a \ge 1$: $\{x : f(x) > a\} = \varnothing$, since $f(x) \le 1 \le a$ always. [step 2.1]

4.1 For real $a$ with $0 < a \le 1$: $\{\, x \in X : f(x) < a \,\} = \bigcup_{r \in D,\, r<a} U_r$, by steps 3.1 and 3.2 giving the two inclusions; a union of open sets, hence open. [step 3.1, step 3.2]

4.2 Continuing under the hypothesis of step 3.4: since $a < r_1$, by [L1] fix $r_2 \in D$ with $|(a+r_1)/2 - r_2| < (r_1-a)/2$, so $r_2 \in (a,r_1)$. [step 3.4, L1, choose]

4.3 Continuing under the hypothesis of step 3.5: since $r$ is a lower bound of $S_x$ by step 3.5, [L2] gives $r \le \inf S_x = f(x)$; combined with $r > a$, $f(x) > a$. [step 3.5, step 2.1, L2]

5.1 Continuing, with $r_1, r_2$ as in step 4.2: since $r_1 < f(x) = \inf S_x$, [L2](iii) gives $r_1 < s$ for every $s \in S_x$; in particular $r_1 \ne 1$, since $r_1 < f(x) \le 1$, so $r_1 \notin S_x$ forces $x \notin U_{r_1}$, as otherwise $r_1$ itself would lie in $S_x$. [step 3.4, step 2.1, L2]

6.1 Continuing: since $r_2 < r_1$ in $D$, [A1] gives $\overline{U_{r_2}} \subseteq U_{r_1}$; if $x \in \overline{U_{r_2}}$ then $x \in U_{r_1}$, contradicting step 5.1; so $x \notin \overline{U_{r_2}}$, and $r_2 > a$. [step 4.2, step 5.1, A1]

7.1 For real $a$ with $0 \le a < 1$: $\{\, x \in X : f(x) > a \,\} = \bigcup_{r \in D,\, r>a} \big(X \setminus \overline{U_r}\big)$. A point of the left side has, by steps 3.4 and 6.1, some $r = r_2 \in D$ with $r > a$ and $x \in X \setminus \overline{U_r}$; a point $x$ of the right side lies in $X \setminus \overline{U_r}$ for some such $r$, hence $x \notin \overline{U_r}$, giving $f(x) > a$ by step 4.3. Each $X \setminus \overline{U_r}$ is open by [L5], so the union is open. [step 6.1, step 4.3, L5]

8.1 By [L3], the sets $[0,a)$ and $(a,1]$, $a \in \mathbb{R}$, form a subbasis for the subspace topology of $[0,1]$; and $f^{-1}(\,[0,a)\,) = \{x : f(x) < a\}$, $f^{-1}(\,(a,1]\,) = \{x : f(x) > a\}$ are open in $X$ for every real $a$, by steps 4.1, 3.3, 7.1 and 3.6. [step 4.1, step 3.3, step 7.1, step 3.6, L3]

9.1 By [L4], since the preimage of every member of that subbasis is open, $f$ is continuous as a map $X \to [0,1]$; together with step 2.1 this proves the statement. [step 8.1, step 2.1, L4] ∎

## Remarks

- **Why the $\cup\{1\}$ in the definition of $f$.** It is what makes $S_x$ manifestly nonempty and bounded above by $1$ without first invoking $U_1 = X$; under that hypothesis $1 \in D$ already forces $1 \in S_x$ on its own (since every $x \in X = U_1$), so the union is not strictly necessary here, but it keeps well-definedness visible from the definition of $S_x$ alone, which matters when this lemma is quoted with a family for which the reader has not yet checked $U_1 = X$ line by line.

- **Where density of $D$ is spent, and only there.** The forward half of the "$f(x) > a$" characterisation (steps 3.4, 4.2, 5.1 and 6.1) is the only place two dyadic points strictly between $a$ and $f(x)$ are extracted; the "$f(x) < a$" half needs no density at all, only the defining property of an infimum. This asymmetry mirrors the asymmetry of the hypothesis: the shrinking clause $\overline{U_r} \subseteq U_s$ supplies a *closed* set inside an *open* one, and closing the resulting gap is what the second dyadic point is for.

- **The subbasis fact (Fact [L3]) has no home elsewhere in this library** at this point in the reading order: no earlier item states that the order rays generate the usual topology of $\mathbb{R}$, so it is derived here from the basis criterion rather than cited as a single fact.
````

### `lem-finite-choice`

````markdown
---
id: lem-finite-choice
kind: lemma
title: "Every natural-number-indexed list of nonempty sets has a choice function on its family of values"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-choice-function, thm-induction-principle, def-natural-numbers, def-nat-addition, def-axiom-of-choice]
justified_by: []
forward_refs: [def-countable, ex-finite-choice-by-induction, ex-russells-socks]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Choice function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Choice_function"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ and let $F$ be a function with domain $n$ all of whose
values are nonempty sets. Then the family of its values,
$\mathcal{F} = F[n] = \{\, F(i) : i \in n \,\}$, has a choice function
([[def-choice-function]]).

This is a theorem of ZF: its proof uses no form of the Axiom of Choice
([[def-axiom-of-choice]]).

What is proved below is exactly the displayed statement, by induction on $n$. The
natural number $n$ serves as the index set in the von Neumann sense,
$n = \{0, 1, \dots, n-1\}$ ([[def-natural-numbers]]), so "$F$ has domain $n$"
says precisely that the members of $\mathcal{F}$ are listed as
$F(0), \dots, F(n-1)$. The listing need not be injective, and $\mathcal{F}$ is the
set of values, so repetitions are harmless and are not counted.

The displayed statement and its proof use only a natural-number-indexed
function. They do not identify an arbitrary finite family with a particular
enumeration.

## Facts & Assumptions

**Given:** A natural number $n$, used as the index set $n = \{0, \dots, n-1\}$, and a function $F$ with domain $n$ such that $F(i) \ne \emptyset$ for every $i \in n$; write $F[n] = \{F(i) : i \in n\}$ for the family of values of $F$.

[A1] $P(n)$ denotes the statement: for every function $F$ with domain $n$ all of whose values are nonempty sets, the family $F[n]$ has a choice function.

[L1] Induction principle: if $P(0)$ holds and $P(n)$ implies $P(n+1)$ for every $n \in \mathbb{N}$, then $P(n)$ holds for every $n \in \mathbb{N}$, where $n + 1$ denotes the successor $\sigma(n)$ ([[thm-induction-principle]], [[def-nat-addition]]).

[L2] A choice function for a family $\mathcal{F}$ is a function $g$ with domain $\mathcal{F}$ such that $g(S) \in S$ for every $S \in \mathcal{F}$ ([[def-choice-function]]).

[L3] $0=\emptyset$ and $\sigma(n)=n\cup\{n\}$, so $n\subseteq\sigma(n)$ ([[def-natural-numbers]]). Thus a function $F$ with domain $\sigma(n)$ restricts to a function with domain $n$; moreover, directly from the definition of image, $y\in F[\sigma(n)]$ iff $y=F(i)$ for some $i\in n$ or $y=F(n)$, so $F[\sigma(n)]=F[n]\cup\{F(n)\}$.

## Proof

**Proof technique:** induction.

1.1 Base case: $0 = \emptyset$, so the only function with domain $0$ is the empty function, its family of values is $F[0] = \emptyset$, and the empty function has domain $\emptyset$ and satisfies the defining condition vacuously, so it is a choice function for $F[0]$; hence $P(0)$ holds. [base, A1, L2, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $P(n)$, that every function with domain $n$ whose values are all nonempty has a choice function for its family of values. [ih, A1]

1.3 Let $F$ be an arbitrary function with domain $\sigma(n) = n \cup \{n\}$ all of whose values are nonempty sets; write $S = F(n)$ and $\mathcal{G} = F[n]$, the family of values of the restriction $F \restriction n$, so that $F[\sigma(n)] = \mathcal{G} \cup \{S\}$. [given, L3]

2.1 The restriction $F \restriction n$ is a function with domain $n$, and every value of it is a value of $F$, hence nonempty; so the inductive hypothesis applies to it and supplies a choice function $h$ for $\mathcal{G}$, a function with domain $\mathcal{G}$ satisfying $h(T) \in T$ for every $T \in \mathcal{G}$. [step 1.3, step 1.2, L2, L3]

2.2 The set $S = F(n)$ is one of the values of $F$, hence nonempty, so there exists an element of $S$; fix one and call it $a$. [step 1.3, choose]

3.1 Define $g = (h \restriction (\mathcal{G} \setminus \{S\})) \cup \{(S, a)\}$; its two pieces are functions with the disjoint domains $\mathcal{G} \setminus \{S\}$ and $\{S\}$, so $g$ is a function, and its domain is $(\mathcal{G} \setminus \{S\}) \cup \{S\} = \mathcal{G} \cup \{S\} = F[\sigma(n)]$. [step 2.1, step 2.2, step 1.3, construct]

4.1 Every $T \in F[\sigma(n)]$ is either $S$ or a member of $\mathcal{G} \setminus \{S\}$; in the first case $g(S) = a \in S$, and in the second $g(T) = h(T) \in T$ because $h$ is a choice function for $\mathcal{G}$. So $g(T) \in T$ throughout. [step 3.1, step 2.1, step 2.2]

5.1 Hence $g$ is a choice function for $F[\sigma(n)]$, and since $F$ was an arbitrary function with domain $\sigma(n)$ with nonempty values, $P(n)$ implies $P(n+1)$. [step 4.1, step 3.1, step 1.3, L2, A1]

6.1 By the induction principle, $P(n)$ holds for every $n \in \mathbb{N}$: the family of values of any function whose domain is a natural number and whose values are nonempty has a choice function. [step 1.1, step 5.1, L1, discharge-induction] ∎

## Remarks

- **Later finiteness terminology.** A finite set is defined later as one
  equinumerous with a natural number ([[def-countable]]). That terminology is
  not used in the proof above, which keeps its exact indexed-family scope.
- **Where the Axiom of Choice would be needed, and why it is not needed here.** Step 2.2 picks one element out of one nonempty set. That is a single existential instantiation, licensed by first-order logic alone. The induction performs one such instantiation per stage, and the stages are indexed by a natural number, so the process terminates. ZF cannot in general turn an arbitrary infinite family of nonempty sets into a simultaneous choice function; that is the gap [[def-axiom-of-choice]] fills. An infinite family with a distinguished element in each member may still have an explicit choice function in ZF, as [[ex-russells-socks]] shows.
- **Why the family is presented as an indexed one.** Stated over "a family of exactly $n$ sets", the successor step would have to assert that deleting one member of a family of $n+1$ sets leaves exactly $n$, which is a claim about cardinality and needs a theory of finiteness this page does not have. Indexed by $n$, the same step is the restriction $F \restriction n$ of a function, which is immediate from $n \subseteq \sigma(n)$ and costs nothing. Nothing else in the argument changes.
- The listing may repeat, and the argument is arranged so that repetition needs no separate treatment: $g$ is built by overwriting rather than by adjoining, so it is a function whether or not $S$ already occurs among $F(0), \dots, F(n-1)$. In particular $\mathcal{F}$ may have strictly fewer than $n$ members.
- The lemma is not a special case of the Axiom of Choice that happens to be provable; it is the precise boundary of what is free. [[ex-russells-socks]] makes the boundary concrete, and [[ex-finite-choice-by-induction]] works this induction out on a small family.
````

### `lem-normality-via-shrinking`

````markdown
---
id: lem-normality-via-shrinking
kind: lemma
title: "A space is normal if and only if every closed $A$ inside an open $U$ admits an open $V$ with $A \\subseteq V \\subseteq \\overline{V} \\subseteq U$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-normal-and-t4-spaces, def-interior-closure-boundary-top,
       thm-closure-characterisation-top, def-topological-space]
justified_by: []
aliases: [lem-shrinking-lemma-normal]
landmark: true
short: "normality by shrinking"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 31: The Separation Axioms (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-31.pdf"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
closures as in [[def-interior-closure-boundary-top]]. The following two
conditions are equivalent.

- **(a)** $X$ is normal ([[def-normal-and-t4-spaces]]).
- **(b)** For every closed $A \subseteq X$ and every open $U$ with
  $A \subseteq U$ there is an open $V$ with
  $$A \subseteq V \subseteq \overline{V} \subseteq U .$$

In particular, in a normal space any two disjoint closed sets $A$ and $D$ admit
an open $V \supseteq A$ with $\overline{V} \cap D = \varnothing$: apply (b) to
$A$ and the open set $X \setminus D$. That corollary is the form in which
normality is used later on this page.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, a closed set $A$, an open set $U$ with $A \subseteq U$, and disjoint closed sets $A_0, B_0$.

[A1] $X$ is normal when disjoint closed sets admit disjoint open supersets ([[def-normal-and-t4-spaces]]).

[L1] $\overline{V}$ is the smallest closed superset of $V$: it is closed, contains $V$, and is contained in every closed set containing $V$ ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]]).

[L2] A set is closed exactly when its complement is open, and complementation reverses inclusion ([[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Assume (a), and let $A$ be closed with $A \subseteq U$ and $U$ open; then $B := X \setminus U$ is closed by [L2] and $A \cap B = \varnothing$, so [A1] gives disjoint open $V \supseteq A$ and $W \supseteq B$. [A1, L2, assume-hyp]

1.2 Assume (b), and let $A_0, B_0$ be disjoint closed sets; then $U_0 := X \setminus B_0$ is open by [L2] and contains $A_0$, so (b) gives an open $V_0$ with $A_0 \subseteq V_0 \subseteq \overline{V_0} \subseteq U_0$. [L2, assume-hyp]

2.1 Under step 1.1: $V \subseteq X \setminus W$, since $V \cap W = \varnothing$, and $X \setminus W$ is closed by [L2], so $\overline{V} \subseteq X \setminus W$ by [L1]; and $X \setminus W \subseteq X \setminus B = U$ because $B \subseteq W$ and complementation reverses inclusion. [step 1.1, L1, L2]

2.2 Under step 1.2: put $W_0 := X \setminus \overline{V_0}$, which is open by [L1] and [L2]; then $V_0 \cap W_0 = \varnothing$ because $V_0 \subseteq \overline{V_0}$, and $B_0 = X \setminus U_0 \subseteq X \setminus \overline{V_0} = W_0$ because $\overline{V_0} \subseteq U_0$. [step 1.2, L1, L2]

3.1 Step 2.1 gives $A \subseteq V \subseteq \overline{V} \subseteq U$ with $V$ open, so (a) implies (b). [step 2.1]

3.2 Step 2.2 gives disjoint open $V_0 \supseteq A_0$ and $W_0 \supseteq B_0$, so (b) implies (a) by [A1]. [step 2.2, A1]

4.1 Steps 3.1 and 3.2 make (a) and (b) equivalent. [step 3.1, step 3.2]

5.1 For the final assertion, let $A$ and $D$ be disjoint closed sets in a normal $X$; then $X \setminus D$ is open by [L2] and contains $A$, so (b) gives an open $V$ with $A \subseteq V \subseteq \overline{V} \subseteq X \setminus D$, whence $\overline{V} \cap D = \varnothing$. [step 4.1, L2] ∎

## Remarks

- **The name.** Statement (b) is the *shrinking* form: an open set containing a closed set can be shrunk so that even its closure stays inside. It is the exact analogue for closed sets of the clause of [[lem-regularity-via-closed-neighbourhoods]] that shrinks an open set around a point.

- **Iterating (b) is what proves Urysohn's lemma**, by indexing a family of open sets by the dyadic rationals; that iteration is a dependent choice and is not performed on this page ([[rem-separation-axiom-conventions]]). The single application above is choice free.

- **Nothing here uses a separation axiom.** In particular $A$ and $D$ may be empty, and the corollary reads correctly in that case with $V = \varnothing$ or $V = X$ respectively.
````

### `lem-real-line-is-a-metric-space`

````markdown
---
id: lem-real-line-is-a-metric-space
kind: lemma
title: "The absolute value makes $\\mathbb{R}$ a metric space: $d(x,y) = |x-y|$ is a metric, its open balls are the intervals $(x-r, x+r)$, and it is unbounded"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-space, def-metric-ball, def-metric-topology, def-metric-bounded-diameter,
       def-abs-value, lem-of-abs-value, lem-of-triangle-inequality, def-interval,
       thm-of-archimedean, def-complete-ordered-field, def-ordered-field,
       lem-of-add-order, lem-of-naturals-positive]
justified_by: []
aliases: [def-usual-metric-on-r]
landmark: true
short: "$(\\mathbb{R}, |x-y|)$"
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
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Real line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Real_line"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Statement

Define $d_{\mathbb{R}} : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ by
$d_{\mathbb{R}}(x,y) := |x - y|$ ([[def-abs-value]]). Then:

1. $d_{\mathbb{R}}$ is a metric on $\mathbb{R}$ ([[def-metric-space]]); it is
   called the **usual metric** of $\mathbb{R}$.
2. For $x \in \mathbb{R}$ and $r > 0$ the open ball is the bounded open interval
   ([[def-interval]], [[def-metric-ball]])
   $$B(x,r) = (x-r,\ x+r),$$
   and the closed ball is $\bar B(x,r) = [x-r,\ x+r]$.
3. Consequently $U \subseteq \mathbb{R}$ is open in the metric topology of
   $d_{\mathbb{R}}$ ([[def-metric-topology]]) exactly when for every $x \in U$
   there is $r > 0$ with $(x-r, x+r) \subseteq U$. This topology is called the
   **usual topology** of $\mathbb{R}$.
4. $(\mathbb{R}, d_{\mathbb{R}})$ is not a bounded metric space
   ([[def-metric-bounded-diameter]]): no ball contains $\mathbb{R}$, so
   $\operatorname{diam}(\mathbb{R})$ is not defined.

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]) with its absolute value ([[def-abs-value]]), and the function $d_{\mathbb{R}}(x,y) = |x-y|$; points $x, y, z \in \mathbb{R}$ and a real $r > 0$.

[L1] Absolute value: $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|-u| = |u|$; and for $c > 0$ one has $|u| < c$ if and only if $-c < u < c$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L2] Triangle inequality in an ordered field: $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L3] Intervals: $(a,b) = \{t : a < t < b\}$ and $[a,b] = \{t : a \le t \le b\}$ ([[def-interval]]).

[L4] Archimedean property: for every $w \in \mathbb{R}$ there is a natural $n \ge 1$ with $w < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]); and $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$ ([[lem-of-naturals-positive]]).

[L5] Adding a constant to an inequality, in strict and nonstrict form: the strict form is [[lem-of-add-order]] and the nonstrict form is that together with the case of equality, the order being total ([[def-ordered-field]]).

[L6] Trichotomy: for reals $a,b$ exactly one of $a < b$, $a = b$, $b < a$ holds ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Separation (M1): $d_{\mathbb{R}}(x,y) = |x-y| = 0$ holds if and only if $x - y = 0$, that is if and only if $x = y$. [L1]

1.2 Symmetry (M2): $d_{\mathbb{R}}(y,x) = |y-x| = |-(x-y)| = |x-y| = d_{\mathbb{R}}(x,y)$. [L1]

1.3 Triangle inequality (M3): $d_{\mathbb{R}}(x,z) = |x - z| = |(x-y) + (y-z)| \le |x-y| + |y-z| = d_{\mathbb{R}}(x,y) + d_{\mathbb{R}}(y,z)$. [L2]

1.4 For $y \in \mathbb{R}$ and $r > 0$: $y \in B(x,r)$ means $|x - y| < r$, which by [L1] holds if and only if $-r < x - y < r$, and adding $y - r$ respectively $y + r$ to the two halves shows this is equivalent to $x - r < y < x + r$. [L1, L5]

1.5 For $y \in \mathbb{R}$ and $r > 0$: $y \in \bar B(x,r)$ means $|x-y| \le r$, which by the same equivalence read with $\le$ in place of $<$ holds if and only if $x - r \le y \le x + r$. [L1, L5]

1.6 Let $x_0 \in \mathbb{R}$ and $r > 0$ be arbitrary, and use [L4] to fix a natural $n \ge 1$ with $x_0 + r < n \cdot 1_{\mathbb{R}}$; write $w := n \cdot 1_{\mathbb{R}}$. [L4, choose]

2.1 By steps 1.1, 1.2 and 1.3 the function $d_{\mathbb{R}}$ satisfies (M1), (M2) and (M3), so it is a metric on $\mathbb{R}$, which is claim 1. [step 1.1, step 1.2, step 1.3]

2.2 By step 1.4 and [L3] the set $B(x,r)$ has exactly the elements of $(x-r,x+r)$, and by step 1.5 and [L3] the set $\bar B(x,r)$ has exactly the elements of $[x-r,x+r]$; this is claim 2. [step 1.4, step 1.5, L3]

2.3 Since $r > 0$ we have $x_0 < x_0 + r < w$, so $w - x_0 > r > 0$ and hence $d_{\mathbb{R}}(x_0, w) = |x_0 - w| = |-(w - x_0)| = w - x_0 > r$; therefore $w \notin B(x_0,r)$. [step 1.6, L1, L5, L6]

3.1 Substituting claim 2 into the definition of open in the metric topology gives claim 3: $U$ is open exactly when every $x \in U$ admits $r > 0$ with $(x-r,x+r) = B(x,r) \subseteq U$. [step 2.2]

4.1 Since $x_0$ and $r$ were arbitrary, step 2.3 exhibits for every ball $B(x_0,r)$ a real not in it, so no ball contains $\mathbb{R}$; hence $\mathbb{R}$ is not a bounded subset of itself and $\operatorname{diam}(\mathbb{R})$ is not defined, which is claim 4. [step 2.1, step 2.3] ∎

## Remarks

- **This is the metric every later ceiling rests on.** Every real-line example on the companion page, and every subspace of $\mathbb{R}$ used there, takes its metric from $d_{\mathbb{R}}$ through the subspace construction of [[def-isometry-and-metric-embedding]].
- **Unboundedness needs no Archimedean input, and no completeness either.** No ordered field is bounded under $d(u,v) = |u-v|$, and the reason is a single element rather than any cofinality property: given a centre $c$ and a radius $r > 0$, the element $c + r + 1$ satisfies $d(c,\, c + r + 1) = |{-(r+1)}| = r + 1 > r$, because $1 > 0$ and $r + 1 > 0$ ([[lem-of-abs-value]], [[cor-of-one-positive]], [[lem-of-add-order]]); so it lies outside $B(c,r)$ and no ball contains the field. Step 1.6 above chooses its witness with [[thm-of-archimedean]] instead, which is a convenience and not a necessity: it delivers a witness that is a canonical natural, and claim 4 needs no such thing. Claim 4 therefore holds verbatim in every ordered field with this $d$, Archimedean or not. Note also that a radius is an element of $\mathbb{R}$, so "a ball of infinite radius" is not something that can be written here.
- **The claim that $\operatorname{diam}(\mathbb{R})$ is "not defined" is a claim about the conventions of this development** ([[rem-sup-conventions]], [[def-metric-bounded-diameter]]): suprema here are real numbers and the extended real line, which is introduced on a later page, is not used for them, so an unbounded set has no diameter at all rather than a diameter $+\infty$.
````

### `rem-urysohn-lemma-not-a-zf-theorem`

````markdown
---
id: rem-urysohn-lemma-not-a-zf-theorem
kind: remark
title: "Urysohn's lemma is not a theorem of ZF, nor of ZF plus countable choice"
status: published
origin: session
proved_here: false
deps: [rem-baire-category-choice-strength]
justified_by: []
forward_refs: [def-countable-choice, rem-choice-ledger]
aliases: []
landmark: true
short: "Läuchli 1962, Tachtsis 2019; DMC suffices, BPI does not"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "H. Läuchli, Auswahlaxiom in der Algebra, Comment. Math. Helv. 37 (1962/63), 1-18"
      url: "https://doi.org/10.1007/BF02566957"
    - title: "E. Tachtsis, The Urysohn Lemma is independent of ZF + Countable Choice, Proc. Amer. Math. Soc. 147 (2019), 4029-4038"
      url: "https://doi.org/10.1090/proc/14590"
    - title: "A. Blass, Injectivity, projectivity, and the axiom of choice, Trans. Amer. Math. Soc. 255 (1979), 31-59"
      url: "https://doi.org/10.1090/S0002-9947-1979-0542870-6"
    - title: "N. Brunner, Geordnete Läuchli Kontinuen, Fund. Math. 117 (1983), 67-73"
      url: "https://doi.org/10.4064/fm-117-1-67-73"
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
pipeline_run: null
---

## Statement

**Urysohn's lemma (UL).** If $X$ is a $T_4$ space and $A, B \subseteq X$ are
disjoint closed sets, there is a continuous $f : X \to [0,1]$ with
$A \subseteq f^{-1}(\{0\})$ and $B \subseteq f^{-1}(\{1\})$.

The following are all relative to the consistency of ZF.

**(a) UL is not a theorem of ZF.** Läuchli (1962/63) builds a permutation model
of ZF with atoms in which the set of atoms is densely linearly ordered, of the
order type of the rationals of the ground model, and in which that set with its
order topology is a $T_4$ space on which **every continuous real-valued function
is constant**; UL fails there. Since the negation of UL is a boundable statement,
the Jech-Sochor first embedding theorem transfers the failure to ZF proper.

**(b) UL is not a theorem of ZF + countable choice.** Tachtsis (2019) produces a
model of ZF in which $\mathrm{AC}_\omega$ holds and UL fails, and hence in which
the Tietze extension theorem fails as well.

**(c) What does suffice.** Dependent choice implies UL by the usual dyadic
construction. Blass (1979) proves the stronger statement that **dependent
multiple choice implies UL**. Whether UL implies DMC is open.

**(d) The Boolean prime ideal theorem does not suffice.** Brunner (1983) shows UL
fails in the Mostowski linearly ordered model, where BPI holds; Pincus's transfer
theorems carry this to ZF.

## Remarks

- **Not proved in this library.** None of (a) to (d) is proved here. Even the
  positive direction, that DC implies UL, is not proved here, because the
  library has no topology track yet at the point where this page sits.

- **What would prove it.** For (a), (b) and (d): permutation models of ZF with
  atoms, plus the Jech-Sochor and Pincus transfer theorems, that is, the same
  track named in [[rem-cohen-forcing-ac-independent]]. For (c): the tree
  combinatorics behind DMC, the same principle that appears in
  [[rem-baire-category-choice-strength]].

- **Why it matters here.** Urysohn's lemma is the workhorse of every separation
  and metrisation argument, and it looks like pure point-set topology. It is not:
  the usual proof indexes a family of open sets by the dyadic rationals and
  chooses one at each stage in terms of the previous stage, which is dependent
  choice. Any page in this library that proves Urysohn's lemma, Tietze extension,
  or a metrisation theorem must therefore record a choice principle in
  [[rem-choice-ledger]], and must not claim the argument is free merely because
  it never mentions a well-ordering. Note that the weakest standard principle,
  [[def-countable-choice]], is provably not enough, by (b).

- **Conditional discipline.** Clauses (a), (b) and (d) are relative to the
  consistency of ZF; clause (c) is an ordinary implication over ZF. Nothing here
  asserts that Urysohn's lemma is false.
````

### `thm-continuity-characterisations-top`

````markdown
---
id: thm-continuity-characterisations-top
kind: theorem
title: "For a map of spaces the following agree: continuity at every point, preimages of open sets open, preimages of closed sets closed, preimages of subbasic open sets open, and $f(\\overline{A}) \\subseteq \\overline{f(A)}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-continuous-map-top, thm-closure-characterisation-top, def-topology-basis-subbasis, thm-basis-criterion, def-interior-closure-boundary-top, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "five equivalent forms of continuity"
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
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "J. Munkres, Topology, 2nd ed., §18"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces, let
$f : X \to Y$ be a function, and let $\mathcal{S}$ be a subbasis for
$\mathcal{T}_Y$ ([[def-topology-basis-subbasis]]). The following five conditions
are equivalent.

- **(a)** $f$ is continuous at every point of $X$ ([[def-continuous-map-top]]).
- **(b)** $f^{-1}[V]$ is open in $X$ for every open $V \subseteq Y$.
- **(c)** $f^{-1}[F]$ is closed in $X$ for every closed $F \subseteq Y$.
- **(d)** $f^{-1}[S]$ is open in $X$ for every $S \in \mathcal{S}$.
- **(e)** $f[\overline{A}] \subseteq \overline{f[A]}$ for every $A \subseteq X$,
  closures being taken in $X$ and in $Y$ respectively
  ([[def-interior-closure-boundary-top]]).

Condition (d) is what makes continuity checkable against a generating family
rather than against every open set, and it holds for a *basis* as well, a basis
being in particular a subbasis for the topology it generates.

## Facts & Assumptions

**Given:** Topological spaces $(X,\mathcal{T}_X)$ and $(Y,\mathcal{T}_Y)$, a function $f : X \to Y$, a subbasis $\mathcal{S}$ for $\mathcal{T}_Y$, subsets $A \subseteq X$ and $V, F \subseteq Y$. Preimages satisfy $f^{-1}[Y \setminus W] = X \setminus f^{-1}[W]$, $f^{-1}[\bigcup_i W_i] = \bigcup_i f^{-1}[W_i]$ and $f^{-1}[\bigcap_i W_i] = \bigcap_i f^{-1}[W_i]$ for every family, with $f^{-1}[Y] = X$ for the empty intersection.

[A1] $f$ is continuous at $x$ when for every open $V \ni f(x)$ there is an open $U \ni x$ with $f[U] \subseteq V$ ([[def-continuous-map-top]]).

[A2] A set is closed exactly when its complement is open; a set is open exactly when it is a union of open sets containing each of its points ([[def-topological-space]]).

[L1] The topology generated by $\mathcal{S}$ has as a basis the family $\mathcal{B}_{\mathcal{S}}$ of intersections of finitely many members of $\mathcal{S}$, the empty intersection being $Y$; every open set is a union of members of $\mathcal{B}_{\mathcal{S}}$ ([[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

[L2] $x \in \overline{A}$ if and only if every open set containing $x$ meets $A$ ([[thm-closure-characterisation-top]], clause (c)).

[L3] $\overline{A}$ is the smallest closed superset of $A$, and $A$ is closed exactly when $A = \overline{A}$ ([[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** direct.

1.1 (a) implies (b): let $V \subseteq Y$ be open and let $x \in f^{-1}[V]$, so $f(x) \in V$; continuity at $x$ gives an open $U \ni x$ with $f[U] \subseteq V$, that is $U \subseteq f^{-1}[V]$. As $x$ was arbitrary, $f^{-1}[V]$ is a union of open sets, hence open. [A1, A2]

1.2 (b) implies (a): let $x \in X$ and let $V$ be open with $f(x) \in V$; then $U := f^{-1}[V]$ is open, contains $x$, and satisfies $f[U] \subseteq V$. [A1]

1.3 (b) and (c) are equivalent: $F \subseteq Y$ is closed exactly when $Y \setminus F$ is open, and $f^{-1}[Y \setminus F] = X \setminus f^{-1}[F]$, so $f^{-1}[F]$ is closed exactly when $f^{-1}[Y \setminus F]$ is open; as $F$ ranges over the closed sets, $Y \setminus F$ ranges over the open sets. [given, A2]

1.4 (b) implies (d): every $S \in \mathcal{S}$ is open, $\mathcal{S}$ being contained in the topology it generates. [L1]

1.5 (d) implies (b): let $V \subseteq Y$ be open; by [L1] $V$ is a union of sets of the form $S_1 \cap \dots \cap S_n$ with $n \ge 0$ and $S_i \in \mathcal{S}$, and $f^{-1}$ turns unions into unions and intersections into intersections, with $f^{-1}[Y] = X$ for $n = 0$; so $f^{-1}[V]$ is a union of finite intersections of the open sets $f^{-1}[S_i]$ together with $X$, hence open. [given, L1, A2]

1.6 (e) implies (c): let $F \subseteq Y$ be closed and put $A := f^{-1}[F]$; then $f[A] \subseteq F$, so $f[\overline{A}] \subseteq \overline{f[A]} \subseteq \overline{F} = F$ by (e), monotonicity of the closure and [L3]; hence $\overline{A} \subseteq f^{-1}[F] = A$, and with $A \subseteq \overline{A}$ this gives $A = \overline{A}$, so $A$ is closed. [L3]

2.1 (b) implies (e): let $A \subseteq X$ and $x \in \overline{A}$, and let $V$ be open with $f(x) \in V$; then $f^{-1}[V]$ is open and contains $x$, so it meets $A$ by [L2], say at $a$; then $f(a) \in V \cap f[A]$, so $V$ meets $f[A]$. As $V$ was arbitrary, $f(x) \in \overline{f[A]}$ by [L2]. [step 1.1, L2]

3.1 Steps 1.1 and 1.2 make (a) and (b) equivalent; step 1.3 makes (b) and (c) equivalent; steps 1.4 and 1.5 make (b) and (d) equivalent; step 2.1 gives (b) implies (e) and step 1.6 gives (e) implies (c), which closes the cycle through (c) and (b). Hence all five conditions are equivalent. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 2.1, step 1.6] ∎

## Remarks

- **Only (a) is pointwise.** Conditions (b) to (e) are global, and none of them has a pointwise version that is equivalent to continuity at a single point: the preimage of an open set containing $f(x)$ can fail to be open while still being a neighbourhood of $x$, which is exactly what continuity at $x$ asserts.

- **The inclusion in (e) may be strict for a continuous map.** For the inclusion of $(0,1)$ into $\mathbb{R}$ and $A = (0,1)$, the image of the closure is $(0,1)$ while the closure of the image is $[0,1]$. Equality for all $A$ is a strictly stronger condition, equivalent to $f$ being a closed map, and closed maps are defined three items below. Note that no map into a **discrete** space can witness strictness: there every subset is closed, so $f[\overline{A}] = f[A] = \overline{f[A]}$ always.

- **What the theorem does not say.** It says nothing about images of open sets: a continuous map need not carry open sets to open sets, and the failure is exactly what separates a continuous bijection from a homeomorphism. That separation is recorded on this page as a false statement with an explicit two-point witness.
````

