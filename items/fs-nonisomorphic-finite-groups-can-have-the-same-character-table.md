---
id: fs-nonisomorphic-finite-groups-can-have-the-same-character-table
kind: false-statement
title: "FALSE: nonisomorphic finite groups always have different character tables"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-dihedral-groups-as-semidirect-products, ex-the-character-table-of-dih-c-four, ex-the-character-table-of-q-eight, prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two]
justified_by: []
aliases: []
proof_strategy: construct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Chapter 3"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

The statement "nonisomorphic finite groups always have different character
tables" is false: the quaternion group $Q_8$ and the dihedral group
$\operatorname{Dih}(C_4)$ are nonisomorphic finite groups with the same
character table.

## Facts & Assumptions

**Given:** The groups $Q_8$ and $\operatorname{Dih}(C_4)$, both of order $8$.

[F1] The character table of $Q_8$ has five rows with values
$(1,1,1,1,1)$, $(1,1,1,-1,-1)$, $(1,1,-1,1,-1)$, $(1,1,-1,-1,1)$, and
$(2,-2,0,0,0)$ on the classes of $1$, $-1$, $i$, $j$, $k$
([[ex-the-character-table-of-q-eight]]).

[F2] The character table of $\operatorname{Dih}(C_4)$ has five rows with
values $(1,1,1,1,1)$, $(1,1,-1,1,-1)$, $(1,1,1,-1,-1)$, $(1,1,-1,-1,1)$, and
$(2,-2,0,0,0)$ on the classes of $1$, $r^{2}$, $r$, $s$, $sr$
([[ex-the-character-table-of-dih-c-four]]).

[F3] $-1$ is the only element of order $2$ in $Q_8$
([[prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two]]).

[F4] In $\operatorname{Dih}(C_4)$, the elements $r^{2}$ and $s$ both have
order $2$
([[cor-dihedral-groups-as-semidirect-products]]).

## Refutation

**Proof technique:** construct.

1.1 The row sets of [F1] and [F2] are identical as multisets of tuples, so
after a row permutation the two tables agree entry for entry. [F1, F2, given]

2.1 The two tables have the same number of rows and columns with the same
class sizes $1$, $1$, $2$, $2$, $2$, so they are the same character table up
to the labelling of the groups. [step 1.1, algebra]

3.1 By [F3], $Q_8$ has exactly one element of order $2$, while by [F4]
$\operatorname{Dih}(C_4)$ has at least the two elements $r^{2}$ and $s$ of
order $2$. The number of elements of order $2$ is invariant under
isomorphism, so the two groups are not isomorphic. [F3, F4, given]

4.1 Steps 2.1 and 3.1 exhibit nonisomorphic finite groups with the same
character table, so the claimed statement is refuted. [step 2.1, step 3.1,
discharge-construct: counterexample] ∎
