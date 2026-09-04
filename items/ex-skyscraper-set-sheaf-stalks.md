---
id: ex-skyscraper-set-sheaf-stalks
kind: example
title: "A set-valued skyscraper sheaf and its stalks"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-sheaf-on-topological-space, def-stalk-of-presheaf, def-germ-of-section]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Section 27"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
---

## Example

Fix a point $x_0\in X$ and a set $A$. Define a presheaf $\mathcal S_{x_0,A}$ by
$$\mathcal S_{x_0,A}(U)=\begin{cases} A,&x_0\in U,\\ \{\ast\},&x_0\notin U, \end{cases}$$
with identity restrictions between opens containing $x_0$ and the unique map to
$\{\ast\}$ when the target does not contain $x_0$. Then $\mathcal S_{x_0,A}$ is
a sheaf. Its stalk at $x_0$ is canonically $A$, and its stalk at any
$y\in X$ with an open neighbourhood $V$ satisfying $x_0\notin V$ is the
singleton $\{\ast\}$. In particular, this holds for every $y\neq x_0$ in a
$T_1$ space.

## Facts & Assumptions

**Given:** A point $x_0\in X$, a set $A$, and a point $y\in X$. For the second stalk computation, also assume $y$ has an open neighbourhood $V$ with $x_0\notin V$.

[L1] The sheaf condition is locality and unique gluing on open covers ([[def-sheaf-on-topological-space]]).

[F1] Stalks are colimits over neighbourhoods, and germs are represented by local sections ([[def-stalk-of-presheaf]], [[def-germ-of-section]]).

## Verification

**Proof technique:** direct.

1.1 If an open set $U$ does not contain $x_0$, then every section of $\mathcal S_{x_0,A}(U)$ is the unique element $\ast$, so locality and gluing are trivial. If $x_0\in U$ and $U=\bigcup_iU_i$, then at least one $U_i$ contains $x_0$. Compatibility forces all sections on such $U_i$ to be the same element of $A$, and every $U_j$ not containing $x_0$ contributes only the unique section $\ast$. Thus there is a unique glued section on $U$. Therefore [L1] holds and $\mathcal S_{x_0,A}$ is a sheaf. [L1, given]

1.2 For the stalk at $x_0$, every neighbourhood of $x_0$ has section set $A$ and every transition map is the identity on $A$. Hence the colimit in [F1] is canonically $A$. [F1, given]

2.1 If $y$ has an open neighbourhood $V$ with $x_0\notin V$, then every smaller neighbourhood of $y$ inside $V$ also has section set $\{\ast\}$. Hence the stalk diagram is eventually constant at $\{\ast\}$, so [F1] gives $(\mathcal S_{x_0,A})_y\cong\{\ast\}$. [F1, given] ∎
