---
id: ex-r-cycle-filter-for-nu-three-two-and-r-three
kind: example
title: "The 3-cycle filter for ν=(3,2) on S_8"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [prop-r-cycle-virtual-character-filter,
       def-removable-border-strip-and-height,
       lem-character-value-on-a-full-cycle-is-supported-on-hooks,
       thm-murnaghan-nakayama-character-rule,
       thm-hook-length-formula,
       def-hook-arm-leg-and-hook-length,
       def-permutation-support-disjoint-cycles-and-cycle-type,
       def-column-antisymmetrizer-polytabloid-and-specht-module]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Springer 1978 (complete author-hosted scan, 161 pp.)"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§21.7–21.8(i), printed pp. 83–84: the generalised character χ^(6,2)−χ^(4,4)−χ^(3,2,2,1)+χ^(3,2,1,1,1) is zero on all classes of S_8 except those containing a 3-cycle, with the four ways of wrapping a skew 3-hook onto [3,2] displayed"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995 (complete author-hosted scan, 486 pp.)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §3 Example 11 (2), printed p. 48, and §7 Example 5, printed p. 117: the border-strip expansion underlying the filter and the values checked here"
---

## Example

For $\nu=(3,2)\vdash5$ and $r=3$ the filter
[[prop-r-cycle-virtual-character-filter]] gives the virtual character of $S_8$
$$\Psi_{(3,2)}=\chi^{(6,2)}-\chi^{(4,4)}-\chi^{(3,2,2,1)}+\chi^{(3,2,1,1,1)},$$
because the four partitions $\lambda\vdash8$ with $\lambda/(3,2)$ a removable
$3$-border strip are $(6,2)$ (height $0$), $(4,4)$ (height $1$),
$(3,2,2,1)$ (height $1$) and $(3,2,1,1,1)$ (height $2$), with signs
$+,-,-,+$. It vanishes on every class of $S_8$ whose cycle type has no part
$3$; the computations below verify this on the classes without $3$-cycles that
are displayed in the statement: the identity class, where $\Psi_{(3,2)}$ has
degree $20-14-70+64=0$, the class of $8$-cycles, where all four characters
vanish because none of the four shapes is a hook
([[lem-character-value-on-a-full-cycle-is-supported-on-hooks]]), and the class
$(4,4)$, where the rule gives $\chi^{(6,2)}=0$, $\chi^{(4,4)}=2$,
$\chi^{(3,2,2,1)}=-2$, $\chi^{(3,2,1,1,1)}=0$, so that
$\Psi_{(3,2)}=0-2-(-2)+0=0$.

## Facts & Assumptions

**Given:** The partitions $(3,2)\vdash5$ and $(6,2),(4,4),(3,2,2,1),(3,2,1,1,1)\vdash8$, and for every partition of an integer the character $\chi^\lambda$ of the complex Specht module $S^\lambda$ ([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F1] Filter proposition: $\Psi_{(3,2)}:=\sum_{\lambda/(3,2)}(-1)^{\operatorname{ht}(\lambda/(3,2))}\chi^\lambda\in R(S_8)$ is the outer product $\chi^{(3,2)}\circ\psi_3$ with $\psi_3=\chi^{(3)}-\chi^{(2,1)}+\chi^{(1,1,1)}$, and it vanishes on every class of $S_8$ whose cycle type has no part $3$; $\psi_3$ vanishes off the class of $3$-cycles, so $\psi_3(1)=0$ ([[prop-r-cycle-virtual-character-filter]]).

[F2] Removable border strip: a removable $3$-strip of $\lambda$ is a connected, $2\times2$-free skew diagram $\lambda/\nu$ with $3$ nodes and $\nu=(3,2)$; its height is its number of rows minus one, equivalently $3-c$ where $c$ is its number of columns ([[def-removable-border-strip-and-height]], [[def-hook-arm-leg-and-hook-length]]).

[F3] Murnaghan–Nakayama rule: $\chi^\lambda(\sigma c)=\sum_{\lambda/\mu}(-1)^{\operatorname{ht}(\lambda/\mu)}\chi^\mu(\sigma)$ for a cycle $c$ of length $r$ on a specified set of points fixed by $\sigma$ (a specified fixed point for length $1$), summed over the removable $r$-strips of $\lambda$ ([[thm-murnaghan-nakayama-character-rule]]).

[F4] Full-cycle values: for an $8$-cycle $\rho\in S_8$, $\chi^\lambda(\rho)=(-1)^{8-x}$ if $\lambda=(x,1^{8-x})$, and $0$ otherwise; in particular $\chi^\lambda(\rho)=0$ whenever $[\lambda]$ contains a $2\times2$ block ([[lem-character-value-on-a-full-cycle-is-supported-on-hooks]]).

[F5] Dimensions by the hook length formula: $f^{(6,2)}=8!/(7\cdot6\cdot4\cdot3\cdot2\cdot1\cdot2\cdot1)=20$, $f^{(4,4)}=14$, $f^{(3,2,2,1)}=70$, $f^{(3,2,1,1,1)}=64$ ([[thm-hook-length-formula]]).

[F6] Class language: a class contains a $3$-cycle exactly when its cycle type has a part $3$, and the identity class is the class of cycle type $(1^8)$ ([[def-permutation-support-disjoint-cycles-and-cycle-type]]).

## Verification

**Proof technique:** direct.

1.1 A partition $\lambda\vdash8$ contains $(3,2)$ exactly when $\lambda_1\ge3$ and $\lambda_2\ge2$, leaving the eleven candidates $(6,2),(5,2,1),(4,2,2),(4,2,1,1),(3,2,2,1),(3,2,1,1,1),(5,3),(4,3,1),(3,3,2),(3,3,1,1),(4,4)$; among their skew differences $\lambda/(3,2)$, which all have $3$ nodes, exactly four are edge-connected and contain no $2\times2$ block, namely the horizontal strip $\{(1,4),(1,5),(1,6)\}$ with $c=3$ columns in $\lambda=(6,2)$, the corners $\{(1,4),(2,3),(2,4)\}$ and $\{(3,1),(3,2),(4,1)\}$ with $c=2$ in $\lambda=(4,4)$ and $\lambda=(3,2,2,1)$, and the vertical strip $\{(3,1),(4,1),(5,1)\}$ with $c=1$ in $\lambda=(3,2,1,1,1)$; the other seven differences are disconnected, for instance $\lambda=(5,3)$, where the node $(2,3)$ is not adjacent to $(1,4)$ or $(1,5)$. The heights are $3-c$, namely $0,1,1,2$, so the four signs $+,-,-,+$ and the displayed expression for $\Psi_{(3,2)}$ follow. [F1, F2, given, algebra]

2.1 The four dimensions of [F5] give $\Psi_{(3,2)}(1)=20-14-70+64=0$; equivalently $\Psi_{(3,2)}=\chi^{(3,2)}\circ\psi_3$ by [F1] and $\psi_3(1)=0$ because the identity of $S_3$ is not a $3$-cycle, so the degree vanishes. [step 1.1, F1, F5, algebra]

2.2 On the class of $8$-cycles each of the four shapes contains a $2\times2$ block (rows $1$ and $2$, columns $1$ and $2$), so none is a hook and $\chi^\lambda=0$ on that class for all four $\lambda$ by the full-cycle lemma [F4]; hence $\Psi_{(3,2)}$ vanishes there. [F4, step 1.1, algebra]

2.3 On the class $(4,4)$ the rule [F3] gives: $\chi^{(6,2)}=0$, since the unique $4$-strip takes $(6,2)$ to $(2,2)$ with height $0$ and $(2,2)$ has no $4$-strip; $\chi^{(4,4)}=+1-(-1)=2$ from the strips to $(4)$ (height $0$) and to $(3,1)$ (height $1$), with $\chi^{(4)}(4)=1$ and $\chi^{(3,1)}(4)=-1$; $\chi^{(3,2,2,1)}=(-1)+(-1)=-2$ from the strips to $(3,1)$ and to $(1^4)$, both of height $2$, with $\chi^{(3,1)}(4)=\chi^{(1^4)}(4)=-1$; and $\chi^{(3,2,1,1,1)}=0$ because $(3,2,1,1,1)$ has no $4$-strip. Hence $\Psi_{(3,2)}=+0-2-(-2)+0=0$ on the class $(4,4)$, whose cycle type has no part $3$. [step 1.1, F3, algebra]

3.1 Steps 2.1, 2.2 and 2.3 verify the vanishing predicted by [F1] on the identity class, the class of $8$-cycles and the class $(4,4)$, all of which are classes of $S_8$ without a $3$-cycle, confirming the displayed value $\Psi_{(3,2)}=0$ there. [step 2.1, step 2.2, step 2.3, F1, F6, algebra] ∎

## Remarks

- **Consistency of the four shapes with the hook-length list.** The removable $3$-strips found in step 1.1 correspond to the hook lengths of the four shapes: for instance the strip to $(6,2)$ is the hook of the node $(1,4)$, of length $3$; the full hook-length multiset of $(6,2)$ is $7,6,4,3,2,1,2,1$, and the other strips arise from further hooks of length $3$ in the respective shapes.
