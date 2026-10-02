---
id: lem-smooth-curve-coherent-torsion-free-locally-free
kind: lemma
title: Torsion-free coherent modules on a smooth curve are locally free
status: published
origin: pipeline
deps:
  - cor-dvr-is-a-pid
  - cor-finitely-generated-torsion-free-modules-over-a-pid-are-free
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-finite-type-finite-presentation-module-sheaf
  - def-integral-scheme
  - def-irreducible-topological-space-and-subset
  - def-locally-free-sheaf-finite-rank
  - def-locally-noetherian-and-noetherian-scheme
  - def-module-on-ringed-space
  - def-sheaf-on-topological-space
  - def-stalk-of-presheaf
  - def-subsheaf
  - lem-curve-closed-subsets-finite
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-locally-free-locus-finite-presentation-open
  - thm-local-ring-smooth-curve-dvr
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Michael Artin, MIT 18.721 Introduction to Algebraic Geometry (July 20, 2020 notes), Ch. 8"
      url: "https://math.mit.edu/classes/18.721/ag-jul20.pdf"
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
pipeline_run: frontier-37-owner-30
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the DVR and coherence suppliers.
Let $k$ be a field, let $C$ be a smooth curve over $k$
([[def-algebraic-curve-over-field]]) and let $\mathcal M$ be a coherent
$\mathcal O_C$-module ([[def-coherent-module-scheme]]). Then:

1. $\mathcal M$ is finite locally free
   ([[def-locally-free-sheaf-finite-rank]]) if and only if $\mathcal M$ is
   torsion-free in the following local sense: there are no open
   $U\subseteq C$, nonzero $m\in\mathcal M(U)$ and nonzero
   $a\in\mathcal O_C(U)$ with $a\,m=0$.
2. If $\mathcal M$ is not torsion-free in that sense, then $\mathcal M$ has a
   nonzero global section; in particular a nonzero coherent module killed
   locally by a nonzerodivisor has a nonzero global section.
3. A subsheaf of a locally free $\mathcal O_C$-module is torsion-free, and a
   coherent torsion-free $\mathcal O_C$-module is finite locally free.

## Facts & Assumptions

**Given:** a field $k$, a smooth curve $C$ over $k$, and a coherent $\mathcal O_C$-module $\mathcal M$.

[F1] $C$ is a nonempty integral scheme, so $C$ is irreducible and every two nonempty open subsets of $C$ meet. Every nonempty open $W\subseteq C$ has an injective restriction map $\Gamma(W,\mathcal O_C)\to k(C)$: on any affine open $\operatorname{Spec}A\subseteq W$, this is the injection from the domain $A$ into its fraction field. Thus a nonzero regular section on $W$ has nonzero image in $k(C)$, and its germ at every point of $W$ maps to that same nonzero element. Every point of $C$ is either its generic point or a closed point ([[lem-curve-closed-subsets-finite]]); at a closed point $x$ the local ring $\mathcal O_{C,x}$ is a discrete valuation ring, hence a principal ideal domain ([[def-algebraic-curve-over-field]], [[def-integral-scheme]], [[thm-local-ring-smooth-curve-dvr]], [[cor-dvr-is-a-pid]]), while at the generic point $\eta$ the local ring $\mathcal O_{C,\eta}=k(C)$ is the function field, a field and hence also a principal ideal domain; in either case $\mathcal O_{C,x}$ is a principal ideal domain.

[F2] A finitely generated torsion-free module over a principal ideal domain is free ([[cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]]).

[F3] $\mathcal M$ is quasi-coherent of finite type; a stalk relation $a_xm_x=0$ with $a_x,m_x\ne0$ is represented by sections $a,m$ over some open neighbourhood with $am=0$, and a section with nonzero germ at a point is a nonzero section ([[def-stalk-of-presheaf]], [[def-module-on-ringed-space]]).

[F4] Coherent modules on the locally Noetherian scheme $C$ are finitely presented, and for a finitely presented quasi-coherent module the locus of points at which the stalk is free of a given rank is open, with the module free of that rank on a neighbourhood of each such point ([[thm-coherent-sheaves-abelian-noetherian-scheme]], [[def-finite-type-finite-presentation-module-sheaf]], [[def-locally-noetherian-and-noetherian-scheme]], [[thm-locally-free-locus-finite-presentation-open]]).

[F5] Sections of a sheaf over two open sets that agree on the intersection glue to a section over the union, and a section is nonzero once it is nonzero on one member of a cover ([[def-sheaf-on-topological-space]], [[def-subsheaf]]).

[F6] The Axiom of Choice enters only through the coherence and local-ring suppliers of [F1] and [F4]; the points selected below are chosen from sets known to be nonempty, and the proof makes no further choice ([[def-axiom-of-choice]]).

[F7] Every proper closed subset of an integral finite-type curve is a finite set of closed points, and every point other than the generic point is closed ([[lem-curve-closed-subsets-finite]]).

## Proof

**Proof technique:** direct; reduce the torsion-freeness question to the stalks, which are finitely generated modules over principal ideal domains (discrete valuation rings at closed points, the function field at the generic point), and use the structure of modules over a principal ideal domain.

1.1 Local freeness implies torsion-freeness. Suppose $\mathcal M$ is finite locally free and let $U$, $m\ne0$, $a\ne0$ satisfy $am=0$. Since $m\ne0$, choose $x\in U$ with $m_x\ne0$. By [F1], the nonzero section $a$ maps to a nonzero element of $k(C)$, and its germ $a_x$ maps to that same element, so $a_x\ne0$. Shrink to an open neighbourhood of $x$ on which $\mathcal M$ is free. The relation gives $a_xm_x=0$ in a free module over the domain $\mathcal O_{C,x}$; multiplication by the nonzero scalar $a_x$ is injective coordinatewise, forcing $m_x=0$, a contradiction. So a finite locally free module has no such $a,m$. [F1]

1.2 Torsion-freeness implies free stalks. Suppose $\mathcal M$ has no relation $am=0$ as in the statement, and let $x\in C$. The stalk $\mathcal M_x$ is a finitely generated module over the principal ideal domain $\mathcal O_{C,x}$ (a discrete valuation ring when $x$ is closed, the field $k(C)$ when $x$ is the generic point) [F1], and it is torsion-free: if $a_xm_x=0$ in $\mathcal M_x$ with $a_x\ne0$ and $m_x\ne0$, then by [F3] the relation is represented over an open $U$ by nonzero sections $a,m$ with $am=0$, contradicting the hypothesis. By [F2] the stalk $\mathcal M_x$ is free, say of rank $r_x\ge0$. [F1, F2, F3]

1.3 Part (2). Suppose $am=0$ with $U$ open, $m\in\mathcal M(U)$ nonzero and $a\in\mathcal O_C(U)$ nonzero. Choose $x\in U$ with $m_x\ne0$, and then an affine open neighbourhood $W=\operatorname{Spec}A$ with $x\in W\subseteq U$. The restriction $a|_W$ is nonzero by [F1]. Let $Z=\{y\in W:a_y\in\mathfrak m_y\}$, the vanishing locus of the residue of $a|_W$; it is the proper closed subset $V(a|_W)$ of $W$, proper because $a|_W$ has nonzero image in the function field [F1]. Since $W$ is an integral curve, [F7] says that $Z$ is a finite set of closed points of $W$. None is the generic point of $C$, and [F7] also says every such point is closed in $C$, so $Z$ is a finite closed subset of $C$. Put $V=C\setminus Z$. Then $V$ is open and $W\cup V=C$. On $W\cap V=W\setminus Z$, the residue of $a$ is nonzero at every point, hence $a$ is a unit in every stalk and $m|_{W\cap V}=0$. The sections $m|_W$ and $0$ over $V$ agree on the intersection, so by [F5] they glue to a global section of $\mathcal M$, which is nonzero because $m_x\ne0$. [F1, F5, F7]

2.1 Conclusion of (1). If $\mathcal M$ is torsion-free then by step 1.2 every stalk is free; by [F4] each point has an open neighbourhood on which $\mathcal M$ is free of the rank of its stalk, so $\mathcal M$ is finite locally free. With step 1.1 this proves the equivalence (1). [F4, step 1.1, step 1.2]

3.1 Part (3). A subsheaf $\mathcal N\subseteq\mathcal E$ of a locally free module $\mathcal E$ is torsion-free: a relation $am=0$ with $m\ne0$ and $a\ne0$ in $\mathcal N$ is also a relation in $\mathcal E$, which is impossible by step 1.1; and a coherent torsion-free module is finite locally free by step 2.1. [step 1.1, step 2.1]

4.1 Conclusion. Step 2.1 proves (1), step 1.3 proves (2) and step 3.1 proves (3). The points chosen in steps 1.1 and 1.3 exist because the corresponding sections are nonzero; the Axiom of Choice enters only through the suppliers recorded in [F6]. [F6, step 1.1, step 2.1, step 1.3, step 3.1] ∎
