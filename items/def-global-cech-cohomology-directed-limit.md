---
id: "def-global-cech-cohomology-directed-limit"
kind: "definition"
title: "Refinement-colimit Čech cohomology"
status: draft
origin: pipeline
deps: [def-cech-cohomology-open-cover, thm-refinement-map-independent-on-cohomology, def-refinement-open-cover, def-axiom-of-choice, def-filtered-category-and-filtered-colimit]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
    - title: "Jiahui Gao and Shuwu Zhang, Lectures on Algebraic Geometry"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a topological
space and let $\mathcal F$ be a sheaf of abelian groups on $X$. The topology
$\mathcal T_X$ is a set of open subsets. Fix a well-order of $\mathcal T_X$
using the Axiom of Choice, and let $\operatorname{Cov}(X)$ consist of all
subsets $\mathcal U\subseteq\mathcal T_X$ whose union is $X$, each indexed by
its distinct members in the inherited well-order. This is a set of ordered
covers. An arbitrary indexed open cover is represented by its distinct-member
cover: under Choice, one may choose an index for each distinct member, so the
two cover presentations refine one another and yield canonically isomorphic
Čech cohomology under refinement independence. For
$\mathcal U\in\operatorname{Cov}(X)$ write $\check H^p(\mathcal U,\mathcal F)$
for its fixed-cover Čech cohomology
([[def-cech-cohomology-open-cover]]).

Say that $\mathcal U\preceq\mathcal V$, or that $\mathcal V$ **refines**
$\mathcal U$, when there is a refinement function from $\mathcal V$ to
$\mathcal U$, that is, a map $c$ from the index set of $\mathcal V$ to the index
set of $\mathcal U$ with $V\subseteq c(V)$ for every $V\in\mathcal V$
([[def-refinement-open-cover]]). This relation is a preorder: it is reflexive
through the identity map, and it is transitive because a composite of refinement
functions is a refinement function. It is **directed**: for covers
$\mathcal U,\mathcal V\in\operatorname{Cov}(X)$ the set of distinct intersections
$\mathcal W=\{U\cap V:U\in\mathcal U,\ V\in\mathcal V\}$ is another member of
$\operatorname{Cov}(X)$, indexed by the same inherited well-order, and covers
$X$. For each $W\in\mathcal W$, choose the least $U\in\mathcal U$ and the
least $V\in\mathcal V$ with $W=U\cap V$; the resulting maps refine
$\mathcal W$ to both covers. Repeating this construction stays within the same
set $\operatorname{Cov}(X)$.

The Axiom of Choice is used to fix transition data: for every pair
$\mathcal U\preceq\mathcal V$ choose one refinement function
$c_{\mathcal V\mathcal U}$ from $\mathcal V$ to $\mathcal U$. By
[[thm-refinement-map-independent-on-cohomology]] any two refinement functions
from $\mathcal V$ to $\mathcal U$ induce the same homomorphism
$\check H^p(\mathcal U,\mathcal F)\to\check H^p(\mathcal V,\mathcal F)$ in every
degree, so the chosen data give well-defined maps
$$\check H^p(\mathcal U,\mathcal F)\longrightarrow\check H^p(\mathcal V,\mathcal F)\qquad(\mathcal U\preceq\mathcal V),$$
and these maps are compatible with composition and with identities: the composite
of the chosen refinement functions along $\mathcal U\preceq\mathcal V\preceq\mathcal W$
is again a refinement function from $\mathcal W$ to $\mathcal U$ and hence
induces the composite of the two induced maps, while the identity is a refinement
function of a cover to itself and induces the identity. Thus
$\mathcal U\mapsto\check H^p(\mathcal U,\mathcal F)$ is a functor from the
directed preorder $\operatorname{Cov}(X)$ to the category of abelian groups.

The **Čech cohomology of $X$ with values in $\mathcal F$** is the filtered colimit
$$\check H^p(X,\mathcal F):=\varinjlim_{\mathcal U\in\operatorname{Cov}(X)}\check H^p(\mathcal U,\mathcal F),$$
taken in the category of abelian groups, of that functor ([[def-filtered-category-and-filtered-colimit]]). A class of
$\check H^p(X,\mathcal F)$ is represented by a pair $(\mathcal U,\alpha)$ with
$\mathcal U\in\operatorname{Cov}(X)$ and
$\alpha\in\check H^p(\mathcal U,\mathcal F)$, and two such pairs represent the
same class exactly when the two classes agree after refinement to a common cover.
A morphism $\varphi:\mathcal F\to\mathcal G$ of abelian sheaves induces the
maps $\check H^p(\mathcal U,\varphi)$ on fixed covers, which commute with the
refinement maps because the cochain maps of
[[def-refinement-open-cover]] are defined componentwise from the values of the
cochains; these maps pass to the filtered colimit and give
$$\check H^p(X,\varphi):\check H^p(X,\mathcal F)\longrightarrow\check H^p(X,\mathcal G),$$
so that $\check H^p(X,-)$ is a functor on the abelian sheaves on $X$ with
$\check H^p(X,\mathcal F)=0$ for $p<0$.
