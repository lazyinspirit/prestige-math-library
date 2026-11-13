---
id: def-coxeter-arrangement-artin-tits-normalisers
kind: definition
title: Reflecting hyperplanes, fundamental chamber and Tits cone
status: published
domain: mathematics
origin: pipeline
deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-real-coxeter-interface-artin-tits-prerequisites
  - def-arrangement-topology-interface-artin-tits-prerequisites
  - math:lem-cg-reflection-representation-descends-and-root-norms
dependency_roles:
  def-coxeter-data-artin-tits-normalisers: mathematical-premise
  def-real-coxeter-interface-artin-tits-prerequisites: mathematical-premise
  def-arrangement-topology-interface-artin-tits-prerequisites: mathematical-premise
  math:lem-cg-reflection-representation-descends-and-root-norms: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
proof_strategy: definition
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: §2.2, PDF pp. 4–5; Proposition 3.6 proof, PDF p. 9
      statement: The article defines root hyperplanes, the strict-positive fundamental
        chamber, the union of translates of its closure as the Tits cone, and
        its interior. Its Proposition 3.6 proof explicitly works in a
        finite-dimensional vector space.
      hypotheses: The Coxeter notation in §2.2; no spherical-type assumption for these
        geometric definitions. The article does not explicitly state a global
        finite-rank hypothesis.
      reading_limits: Original PDF images pp. 4, 5 and 9 and extracted text §§2.1–2.2
        and §3.1 through Proposition 3.6 inspected for convention and
        attribution. This citation attributes the article formulation, not an
        independent proof input; no article-defect judgment is made.
    - title: Osamu Iyama and Michael Wemyss, Tits Cone Intersections and Applications
      url: https://www.maths.gla.ac.uk/~mwemyss/MainFile_for_web.pdf
      locator: §1.1, printed p. 3 / PDF p. 27; §1.2 and §1.3, printed p. 4 / PDF p.
        28; §1.3, printed p. 5 / PDF p. 29
      statement: The Coxeter matrix is an n by n matrix and its Coxeter graph has
        vertex set {1,...,n}. The group need not be finite. The geometric
        representation has the simple-root basis, its dual Θ has the dual basis,
        and the fundamental chamber consists of strictly positive dual
        coordinates. The Tits cone is the union of translates of the nonnegative
        chamber.
      hypotheses: Finite Coxeter graph, with arbitrary Coxeter matrix labels and
        without requiring the Coxeter group to be finite.
      reading_limits: Read the extracted text of §§1.1–1.3 for these definitions and
        rank convention, and visually inspected PDF p. 27. This source supplies
        the finite-rank convention and geometric definitions only; no subsequent
        theorem or proof is imported here.
dependency_level: 2
---

## Definition

For the geometry in this item, let the vertex set $\Gamma_0$ be finite. This is the finite-rank Coxeter-graph convention of Iyama–Wemyss, §§1.1–1.3; the Coxeter group $W$ may be infinite. Use the geometric representation, roots and algebraic dual $\Theta=V^*$ of [[def-coxeter-data-artin-tits-normalisers]], specialized to this finite vertex set, and the finite-rank realization of [[def-real-coxeter-interface-artin-tits-prerequisites]].

The coordinate map $\Theta\longrightarrow\mathbb R^{\Gamma_0}$, $f\longmapsto(f(\alpha_i))_{i\in\Gamma_0}$, is a linear isomorphism. Give $\Theta$ its transported Euclidean topology, as in [[def-arrangement-topology-interface-artin-tits-prerequisites]]. For a subset $A\subseteq\Theta$, its closure $\overline A$ consists of points every open neighbourhood of which meets $A$; its interior $A^\circ$ is the union of open subsets contained in $A$.

For each root $\alpha\in\Phi$ define the reflecting hyperplane and the set of distinct such hyperplanes by
$$H_\alpha=\{f\in\Theta:f(\alpha)=0\},\qquad\mathcal H=\{H_\alpha:\alpha\in\Phi\}.$$
Define the open fundamental chamber and its closure by
$$C=\{f\in\Theta:f(\alpha_i)>0\text{ for every }i\in\Gamma_0\},\qquad\overline C=\{f\in\Theta:f(\alpha_i)\geq0\text{ for every }i\in\Gamma_0\}.$$
The Tits cone and its interior in $\Theta$ are
$$\mathrm{Cone}=\bigcup_{w\in W}w\overline C,\qquad\mathrm{Cone}^\circ=\operatorname{int}_{\Theta}(\mathrm{Cone}).$$
The notation $w\overline C$ uses the contragredient action: $wf=f\circ\rho(w)^{-1}$. The family $\mathcal H$ is a set, so coincident hyperplanes are included only once.

## Justification

The finite simple-root basis identifies each functional with its freely prescribed coordinates, giving the asserted coordinate isomorphism. The transported Euclidean topology and its neighbourhood and closure conventions are those of [[def-arrangement-topology-interface-artin-tits-prerequisites]]. Each coordinate evaluation is continuous, so the finite intersection defining $C$ is open. Its closure is contained in the nonnegative coordinate orthant. Conversely, for any functional in that orthant, adding $\varepsilon>0$ to every coordinate gives a point of $C$ converging to it as $\varepsilon\to0$. This proves the stated formula for $\overline C$, including the empty-vertex case.

Every root is nonzero in the finite-rank representation of [[def-real-coxeter-interface-artin-tits-prerequisites]]: by clause (3) of [[math:lem-cg-reflection-representation-descends-and-root-norms]], its Coxeter-form norm is $B(\alpha,\alpha)=1$. If a coordinate of $\alpha$ is nonzero, the corresponding coordinate functional evaluates nontrivially on $\alpha$. Thus $f\mapsto f(\alpha)$ is a nonzero linear functional on $\Theta$, and its kernel is a linear hyperplane. The contragredient action is already well-defined by [[def-coxeter-data-artin-tits-normalisers]]; its translates and their union therefore define subsets of $\Theta$, whose interior is specified by the chosen topology. These definitions do not require $W$ to be finite. Convexity, fundamental-domain and local-finiteness assertions are separate results.

## Source notes

The article calls $C$ open in §2.2 and explicitly invokes a finite-dimensional vector space in the proof of Proposition 3.6. Its §2.2 follows Iyama–Wemyss for $\Theta$, and §3 follows their construction. Iyama–Wemyss §1.1 explicitly starts with an $n\times n$ Coxeter matrix and the vertex set $\{1,\ldots,n\}$. The finite-rank geometric convention is made explicit here; it does not change the arbitrary-rank algebraic definitions in [[def-coxeter-data-artin-tits-normalisers]] or assert an infinite-rank topological extension.
