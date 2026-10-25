---
id: thm-cg-crystallographic-finite-type-and-lattice-stability
kind: theorem
title: "Crystallographic finite type: the Weyl types, reduced realizations and lattice stability"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 15
deps: [def-cg-crystallographic-scaling-coroot-and-lattice, lem-cg-integer-pairings-and-allowed-dihedral-labels, def-cg-real-coxeter-form-and-reflection, def-cg-canonical-reflection-homomorphism, lem-cg-reflection-representation-descends-and-root-norms, thm-cg-root-length-criterion-and-faithfulness, def-cg-coxeter-diagram-components-and-finite-type, lem-cg-positive-definite-diagram-exclusions, thm-cg-finite-type-positive-definite-criterion, thm-cg-finite-coxeter-classification-including-h-and-dihedral, def-reduced-crystallographic-euclidean-root-system, def-coroot-and-dual-root-system, def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice, def-weyl-group-of-a-root-system, prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system, def-positive-system-and-base-of-simple-roots, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, thm-rank-two-root-system-classification, def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention, def-cartan-matrix-of-a-based-root-system, prop-duality-exchanges-b-n-and-c-n-and-fixes-the-other-types, def-definiteness-inertia-and-signature-data-over-the-reals, def-real-and-complex-inner-product-space, def-orthogonality-and-orthogonal-complement, thm-finite-dimensional-orthogonal-decomposition, thm-rank-nullity]
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Lie Algebras, Algebraic Groups, and Lie Groups (course notes, version 2.00)"
      url: "https://www.jmilne.org/math/CourseNotes/LAG.pdf"
      locator: "Chapter I, Section 7: Theorem 7.18 and the closing list of Dynkin diagrams (printed pp. 74-75), Propositions 7.6-7.13 (root systems, components, reducedness, bases, generation, highest root) and 7.22-7.25 (root and weight lattices, printed p. 76)"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed. (author-hosted digital edition)"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, Section 5, Propositions 2.48-2.49 and the classification of Dynkin diagrams, printed pp. 152-162; Chapter II, Section 6, Weyl groups, printed pp. 162-168; Chapter IV, Section 7, Propositions 4.62 and 4.64, printed pp. 266-268"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press; author's full institutional PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Section 6.9 with Table 6.1, printed pp. 103-104, and Appendix C.1, Theorems C.1.2-C.1.4, printed pp. 433-438: the finite-type classification including H_3, H_4 and the dihedral types"
proof_strategy: direct
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Statement

Let $S$ be a finite set, $m$ a Coxeter matrix, $W$ the presented group, $V=\mathbb R^S$, $B$ the Coxeter form, $\rho$ the canonical reflection homomorphism and $\Gamma$ the diagram, with the scaled data and Cartan numbers $a_{st}$ of [[def-cg-crystallographic-scaling-coroot-and-lattice]]. Assume that $W$ is finite, equivalently that $B$ is positive definite ([[thm-cg-finite-type-positive-definite-criterion]]).

**(1) Criterion.** There exists a crystallographic scaling if and only if every edge label of $\Gamma$ lies in $\{3,4,6\}$, if and only if every connected component of $\Gamma$ is of type $A_n$ ($n\ge1$), $B_n$ ($n\ge2$), $D_n$ ($n\ge4$), $E_6$, $E_7$, $E_8$, $F_4$, or $G_2=I_2(6)$. In particular the finite types $H_3$, $H_4$ and $I_2(m)$ with $m\notin\{2,3,4,6\}$ admit no crystallographic scaling.

**(2) Reduced realizations and Weyl groups.** If $c$ is a crystallographic scaling with scaled root set $\Phi_c$, then $\Phi_c$ is a reduced crystallographic Euclidean root system in the inner product space $(V,B)$ ([[def-reduced-crystallographic-euclidean-root-system]]); its Weyl group $W(\Phi_c)=\langle s_\beta:\beta\in\Phi_c\rangle$ ([[def-weyl-group-of-a-root-system]]) equals $\rho(W)$, and $\rho$ is an isomorphism $W\to W(\Phi_c)$ carrying $s$ to the reflection $r_{a_s}$ in $a_s$. Consequently every finite Coxeter system of one of the types listed in (1) is isomorphic to the Weyl group of a reduced crystallographic Euclidean root system, with the standard generators corresponding to the reflections in a base. No other finite Coxeter system has this property: if $(W,S)$ is isomorphic to $(W(\Psi),\{s_\alpha:\alpha\in\Delta\})$ for a reduced crystallographic Euclidean root system $\Psi$ with base $\Delta$, then all labels of $\Gamma$ lie in $\{2,3,4,6\}$ and the type is one of those listed in (1).

**(3) Lattice stability.** For every crystallographic scaling the lattices $Q=\mathbb Z\Phi_c$ and $Q^\vee=\mathbb Z\Phi_c^\vee$ are $\rho(W)$-stable of rank $|S|$ and $Q\subseteq P$; every root of $\Phi_c$ is an integral combination of the scaled simple roots $a_s$ with coefficients of one sign, and all pairings $B(\beta,\gamma^\vee)$, $\beta,\gamma\in\Phi_c$, are integers.

**(4) Dual length choices.** Suppose $\Gamma$ is connected, has edge labels in $\{3,4,6\}$ and has an edge of label $p\in\{4,6\}$. Then that is its only edge of label $\ge4$, and the two scalings that differ only by inverting the length ratio across it (with $c_t=2c_s\cos(\pi/p)$ at one end versus $c_s=2c_t\cos(\pi/p)$, all other edge ratios as in [[lem-cg-integer-pairings-and-allowed-dihedral-labels]] (3)) are both crystallographic and have mutually transposed scaled Cartan matrices $A'=A^{T}$. These are the two dual length assignments of the diagram: the $B_n/C_n$ alternative for a label-$4$ path, and the two $F_4$ and $G_2$ orientations; the companion examples page verifies the identification explicitly for $B_2/C_2$ and for $G_2$.

## Facts & Assumptions

**Given:** A finite set $S$, a Coxeter matrix $m$, the presented group $W$ (assumed finite), the space $V=\mathbb R^S$ with Coxeter form $B$ (then positive definite) and canonical reflection homomorphism $\rho$, the diagram $\Gamma$, and the scaled data $a_s$, $a_s^\vee$, $a_{st}$, $Q$, $Q^\vee$, $P$, $\Phi_c$ of a scaling $c$. In (2), (3) and (4) a crystallographic scaling is considered; in the converse part of (2) a reduced crystallographic Euclidean root system $\Psi$ with base $\Delta$ is considered.

[F1] By convention, $m(s,t)$ is the order of $st$ in $W$ ([[def-cg-coxeter-diagram-components-and-finite-type]]).

[F2] The Coxeter diagram $\Gamma$ has vertex set $S$, and $s\ne t$ are joined by an edge exactly when $m(s,t)\ge3$, labelled $m(s,t)$ ([[def-cg-coxeter-diagram-components-and-finite-type]]).

[F3] The components of $\Gamma$ are the connected components of its underlying graph, and their vertex sets partition $S$ ([[def-cg-coxeter-diagram-components-and-finite-type]]).

[F4] An isomorphism of Coxeter systems carries the generators onto the generators, so the two diagrams correspond ([[def-cg-coxeter-diagram-components-and-finite-type]]).

[F5] For finite type, every connected component of $\Gamma$ is isomorphic as a labelled graph to one of $A_n$ (path, all labels $3$), $B_n$ (path with labels $3,\dots,3,4$), $D_n$, $E_6,E_7,E_8$ (stars with arms $1,1,n-3$; $1,2,2$; $1,2,3$; $1,2,4$, all labels $3$), $F_4$ (path with labels $3,4,3$), $H_3$ (path with labels $3,5$), $H_4$ (path with labels $3,3,5$) or $I_2(m)$ (two vertices joined by one edge labelled $m\ge3$) ([[thm-cg-finite-coxeter-classification-including-h-and-dihedral]]).

[F6] As Coxeter systems $A_2=I_2(3)$, $B_2=C_2=I_2(4)$ and $G_2=I_2(6)$ ([[thm-cg-finite-coxeter-classification-including-h-and-dihedral]]).

[F7] For a scaling, $a_{st}=0$ if and only if $m(s,t)=2$ ([[lem-cg-integer-pairings-and-allowed-dihedral-labels]]).

[F8] If $B$ is positive definite and $c$ crystallographic then for all distinct $s,t$ one has $0\le a_{st}a_{ts}<4$, so $a_{st}a_{ts}\in\{0,1,2,3\}$, and $m(s,t)\in\{2,3,4,6\}$ ([[lem-cg-integer-pairings-and-allowed-dihedral-labels]]).

[F9] If $\Gamma$ is connected and has an edge of label $4$ or $6$, then that is its only edge of label $\ge4$ and $c_s^2/c_t^2\in\{1,2,2^{-1}\}$ respectively $\{1,3,3^{-1}\}$ for all $s,t$; if there is no edge of label $\ge4$ then $c_s=c_t$ on each connected component ([[lem-cg-integer-pairings-and-allowed-dihedral-labels]]).

[F10] If $\Gamma$ is a forest with all edge labels in $\{3,4,6\}$ and roots are chosen, then the prescription $c_{\text{root}}:=1$, $c_t:=2c_s\cos(\pi/m(s,t))$ along each edge with root-side endpoint $s$ is positive and crystallographic ([[lem-cg-integer-pairings-and-allowed-dihedral-labels]]).

[F11] For every crystallographic scaling: $r_s(a_t)=a_t-a_{ts}a_s$, $r_s(a_t^\vee)=a_t^\vee-a_{st}a_s^\vee$, hence $r_s(Q)=Q$ and $r_s(Q^\vee)=Q^\vee$; $Q$ and $Q^\vee$ are $\rho(W)$-stable lattices of rank $|S|$, $\Phi_c\subseteq Q$, $Q=\mathbb Z\Phi_c$, $Q^\vee=\mathbb Z\Phi_c^\vee$ with $\Phi_c^\vee=\{2\beta/B(\beta,\beta):\beta\in\Phi_c\}$, $Q\subseteq P$; every root of $\Phi_c$ is an integral combination of the $a_s$ with all nonzero coefficients of one sign, and $B(\beta,\gamma^\vee)\in\mathbb Z$ for all $\beta,\gamma\in\Phi_c$ ([[lem-cg-integer-pairings-and-allowed-dihedral-labels]]).

[F12] A connected positive definite diagram contains no cycle ([[lem-cg-positive-definite-diagram-exclusions]]).

[F13] A connected positive definite diagram has at most one edge of label $\ge4$ ([[lem-cg-positive-definite-diagram-exclusions]]).

[F14] $a_s=c_se_s$ and $a_{st}=B(a_s,a_t^\vee)=2B(a_s,a_t)/B(a_t,a_t)$ ([[def-cg-crystallographic-scaling-coroot-and-lattice]]).

[F15] The $a_s$ form a basis of $V$ ([[def-cg-crystallographic-scaling-coroot-and-lattice]]).

[F16] The scaling is crystallographic when all $a_{st}$ are integers ([[def-cg-crystallographic-scaling-coroot-and-lattice]]).

[F17] $Q=\sum_s\mathbb Za_s$, $Q^\vee=\sum_s\mathbb Za_s^\vee$, $P=\{\lambda:B(\lambda,q^\vee)\in\mathbb Z\ \forall q^\vee\in Q^\vee\}$, $\Phi_c=\{\rho(w)a_s\}$ ([[def-cg-crystallographic-scaling-coroot-and-lattice]]).

[F18] For $B(a,a)\ne0$ the reflection with normal $a$ is $r_a(v)=v-\frac{2B(v,a)}{B(a,a)}a$ ([[def-cg-real-coxeter-form-and-reflection]]).

[F19] $\rho$ preserves $B$ ([[lem-cg-reflection-representation-descends-and-root-norms]]).

[F20] $\rho(wsw^{-1})=\rho(w)r_s\rho(w)^{-1}=r_{\rho(w)e_s}$ for all $w\in W$ and $s\in S$ ([[lem-cg-reflection-representation-descends-and-root-norms]]).

[F21] $\rho(s)=r_s$ for every $s\in S$ ([[def-cg-canonical-reflection-homomorphism]]).

[F22] The Weyl group of a reduced crystallographic root system $\Phi$ is $W(\Phi)=\langle s_\alpha:\alpha\in\Phi\rangle$ ([[def-weyl-group-of-a-root-system]]).

[F23] A reduced crystallographic Euclidean root system is a finite spanning set $\Phi\subseteq E\setminus\{0\}$ closed under its reflections, with integral Cartan integers $2(\beta,\alpha)/(\alpha,\alpha)$ and $\mathbb R\alpha\cap\Phi=\{\alpha,-\alpha\}$ ([[def-reduced-crystallographic-euclidean-root-system]]).

[F24] A positive root is simple when it is not a sum of two positive roots, and $\Delta$ denotes the set of simple roots ([[def-positive-system-and-base-of-simple-roots]]).

[F25] For a reduced crystallographic root system with simple roots $\Delta$, the set $\Delta$ is a basis of $E$, so $|\Delta|=\dim E$ ([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).

[F26] $W$ is finite if and only if $B$ is positive definite ([[thm-cg-finite-type-positive-definite-criterion]]).

[F27] For finite $W$ the homomorphism $\rho$ is injective ([[thm-cg-root-length-criterion-and-faithfulness]]).

[F28] The Weyl group of a reduced crystallographic root system is finite ([[prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system]]).

[F29] For nonproportional roots of a reduced crystallographic system, $n_{\alpha\beta}n_{\beta\alpha}=4\cos^2\theta\in\{0,1,2,3\}$ where $\theta$ is the angle ([[thm-rank-two-root-system-classification]]).

[F30] Distinct simple roots of a reduced crystallographic system relative to a positive system satisfy $(\alpha,\beta)\le0$ ([[thm-rank-two-root-system-classification]]).

[F31] Coroots of a reduced crystallographic root system are $\alpha^\vee=2\alpha/(\alpha,\alpha)$ ([[def-coroot-and-dual-root-system]]).

[F32] For a reduced crystallographic root system with base, $Q=\sum_\alpha\mathbb Z\alpha$, $Q^\vee=\sum_\alpha\mathbb Z\alpha^\vee$ and $P=\{\lambda:(\lambda,\alpha^\vee)\in\mathbb Z\text{ for all }\alpha\}$ ([[def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice]]).

[F33] The Cartan matrix of a based root system has entries $a_{ij}=(\alpha_j,\alpha_i^\vee)=2(\alpha_j,\alpha_i)/(\alpha_i,\alpha_i)$ ([[def-cartan-matrix-of-a-based-root-system]]).

[F34] In a Dynkin diagram, a double edge carries an arrow pointing from the longer root to the shorter root ([[def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention]]).

[F35] Duality exchanges $B_n$ and $C_n$ and fixes $A_n,D_n,E_6,E_7,E_8,F_4,G_2$, exchanging long and short roots for $F_4$ and $G_2$ ([[prop-duality-exchanges-b-n-and-c-n-and-fixes-the-other-types]]).

[F36] A symmetric bilinear form is positive definite when $B(v,v)>0$ for every $v\ne0$ ([[def-definiteness-inertia-and-signature-data-over-the-reals]]).

[F37] A real inner product space is a real vector space with a positive definite inner product ([[def-real-and-complex-inner-product-space]]).

[F38] For a linear map with finite-dimensional domain, the dimension of the domain is the sum of the dimensions of its kernel and image; in particular, an injective linear map between finite-dimensional spaces of equal dimension is surjective ([[thm-rank-nullity]]).

[F39] For a subspace $U$ of a finite-dimensional real inner product space $E$, $E=U\oplus U^\perp$ ([[thm-finite-dimensional-orthogonal-decomposition]]).

[F40] $U^\perp=\{x\in E:(x,u)=0\text{ for every }u\in U\}$ ([[def-orthogonality-and-orthogonal-complement]]).

## Proof

**Proof technique:** direct.

1.1 If some scaling of the geometry is crystallographic, then every edge label of $\Gamma$ lies in $\{3,4,6\}$: by the label restriction every distinct pair satisfies $m(s,t)\in\{2,3,4,6\}$, and edges are exactly the pairs with $m(s,t)\ge3$. [F2, F8, F16]

1.2 Since $W$ is finite, classification clauses (1)–(2) in [F5] give that every connected component of $\Gamma$ is one of the standard diagrams: $A_n$, $B_n$, $D_n$, $E_6,E_7,E_8,F_4,H_3,H_4$ or $I_2(m)$; the diagrams $A_n$, $B_n$, $D_n$, $E_6,E_7,E_8,F_4$ and $I_2(m)$ with $m\in\{3,4,6\}$ are paths, stars or single edges, hence trees, and have all labels in $\{3,4,6\}$, while $H_3$ and $H_4$ contain a label $5$ and $I_2(m)$ has label $m$; and the coincidences (4) in [F6] give $I_2(3)=A_2$, $I_2(4)=B_2$, $I_2(6)=G_2$, so the Weyl-type list is $A_n,B_n,D_n,E_6,E_7,E_8,F_4,G_2$. [F5, F6]

1.3 $\Phi_c$ is finite, contains the basis $\{a_s:s\in S\}$ of $V$ and hence spans $V$, omits $0$ because every $\beta=\rho(w)a_s$ has $B(\beta,\beta)=B(a_s,a_s)=c_s^2\ne0$, is closed under negation because $\rho(ws)a_s=-\rho(w)a_s$, and is $\rho(W)$-invariant because $\rho(w')\rho(w)a_s=\rho(w'w)a_s$. [F14, F15, F17, F19, F21]

1.4 For $\beta=\rho(w)a_s\in\Phi_c$ the conjugation identity gives $r_\beta=\rho(w)r_s\rho(w)^{-1}=\rho(wsw^{-1})\in\rho(W)$, so every root reflection maps $\Phi_c$ into itself and $W(\Phi_c)=\langle s_\beta:\beta\in\Phi_c\rangle\subseteq\rho(W)$; conversely $\rho(s)=r_s$ is the reflection $s_{a_s}$ in the root $a_s\in\Phi_c$, so $\rho(W)\subseteq W(\Phi_c)$. Hence $W(\Phi_c)=\rho(W)$. [F18, F20, F21, F22]

1.5 For all $\beta,\alpha\in\Phi_c$ one has $2B(\beta,\alpha)/B(\alpha,\alpha)=B(\beta,\alpha^\vee)\in\mathbb Z$. [F11]

1.6 Let $S_1,\dots,S_k$ be the components of $\Gamma$ and $V_i=\operatorname{span}\{e_s:s\in S_i\}$, so $V=V_1\oplus\cdots\oplus V_k$; each generator $r_u$ fixes $e_v$ for $v$ outside the component of $u$, because $B(e_u,e_v)=0$ there by the vanishing criterion for $m=2$, and maps each $V_i$ into itself; hence every $\rho(w)$ preserves every $V_i$, and $a_s\in V_{S(s)}$. [F3, F7, F14, F18, F21]

1.7 Suppose $\Gamma$ is connected, all edge labels lie in $\{3,4,6\}$, and $\{s,t\}$ is an edge of label $p\in\{4,6\}$. Then $\{s,t\}$ is the only edge of label $\ge4$ and $\Gamma$ contains no cycle; applying the tree construction with the root vertex on the $s$-side gives a crystallographic scaling $c$ with $c_t=2c_s\cos(\pi/p)$, and applying it with the root on the $t$-side gives a crystallographic scaling $c'$ with $c_s'=2c_t'\cos(\pi/p)$; these two scalings differ only by inverting the length ratio across $\{s,t\}$. [F12, F13, F10]

1.8 For every crystallographic scaling the conclusions of the last clause of the lemma hold: $r_s(a_t)=a_t-a_{ts}a_s$ and $r_s(a_t^\vee)=a_t^\vee-a_{st}a_s^\vee$ with $r_s(Q)=Q$ and $r_s(Q^\vee)=Q^\vee$; $Q$ and $Q^\vee$ are $\rho(W)$-stable free abelian groups of rank $|S|$; $\Phi_c\subseteq Q$, $Q=\mathbb Z\Phi_c$, $Q^\vee=\mathbb Z\Phi_c^\vee$ with $\Phi_c^\vee=\{2\beta/B(\beta,\beta):\beta\in\Phi_c\}$ and $Q\subseteq P$; every element of $\Phi_c$ is an integral combination of the $a_s$ whose nonzero coefficients have one sign; and all pairings $B(\beta,\gamma^\vee)$ with $\beta,\gamma\in\Phi_c$ are integers. [F11]

1.9 Since $B$ is symmetric bilinear and positive definite, $(V,B)$ is a real inner product space, and for $\beta\in\Phi_c$ one has $B(\beta,\beta)\ne0$ so that $r_\beta(x)=x-\frac{2B(x,\beta)}{B(\beta,\beta)}\beta$ is the orthogonal reflection in $\beta$, coinciding for $\beta=a_s$ with the generator reflection $\rho(s)$ because $a_s=c_se_s$ with $c_s>0$. [F14, F18, F21, F26, F36, F37]

1.10 Let $\Psi$ be a reduced crystallographic Euclidean root system in the real inner product space $E$ with base $\Delta$, and let $(W,S)\cong(W(\Psi),\{s_\alpha:\alpha\in\Delta\})$ be an isomorphism of Coxeter systems; write $\alpha_s$ for the simple root corresponding to $s\in S$. Then $W(\Psi)$ is finite, so $W$ is finite and $B$ is positive definite. For distinct $s,t$ the roots $\alpha_s,\alpha_t$ are positive, hence nonproportional: $\alpha_s=\lambda\alpha_t$ with $\lambda>0$ forces $\lambda=1$ and $\alpha_s=\alpha_t$ by reducedness, while $\lambda<0$ contradicts positivity. By the rank-two classification $(\alpha_s,\alpha_t)\le0$ and $n_{st}n_{ts}=4\cos^2\theta\in\{0,1,2,3\}$, where $n_{st}=2(\alpha_t,\alpha_s)/(\alpha_s,\alpha_s)$ and $\theta$ is the angle between $\alpha_s$ and $\alpha_t$; hence $u:=\cos\theta$ satisfies $u\le0$ and $u^2=n_{st}n_{ts}/4\in\{0,1/4,1/2,3/4\}$. [F1, F4, F23, F26, F28, F29, F30]

2.1 If every edge label of $\Gamma$ lies in $\{3,4,6\}$, then by 1.2 every connected component of $\Gamma$ is one of the Weyl-type diagrams $A_n,B_n,D_n,E_6,E_7,E_8,F_4,G_2$, each of which is a tree; so $\Gamma$ is a forest with all edge labels in $\{3,4,6\}$ and the tree construction produces a crystallographic scaling of the geometry. [step 1.2, F10]

2.2 Assume $c$ crystallographic. If $\beta=\lambda\gamma$ with $\beta,\gamma\in\Phi_c$ and $\lambda>0$, then $2\lambda=B(\beta,\gamma^\vee)\in\mathbb Z$ and $2/\lambda=B(\gamma,\beta^\vee)\in\mathbb Z$ by 1.5; writing $\lambda=p/q$ in lowest terms, $q\mid2$ and $p\mid2$, so $\lambda\in\{1/2,1,2\}$. [step 1.5]

2.3 If $\beta=\rho(w)a_s$ and $\gamma=\rho(v)a_t$ are nonzero and proportional, then $s,t$ lie in one component by 1.6, and applying the ratio clause to that connected component gives $\lambda^2=B(\beta,\beta)/B(\gamma,\gamma)=c_s^2/c_t^2\in\{1,2,1/2,3,1/3\}$, since $\rho$ preserves $B$ and $B(a_s,a_s)=c_s^2$. [step 1.6, F9, F14, F19]

2.4 For the two scalings of 1.7 put $\lambda_{uv}:=c_u/c_v$ and $\lambda_{uv}':=c_u'/c_v'$. Label-$3$ edges have equal lengths in both scalings, while the constructions invert the ratio across $\{s,t\}$, so $\lambda_{uv}'=1/\lambda_{uv}$ for all $u,v$; since $a_{uv}=2\lambda_{uv}B(e_u,e_v)$ and $a_{uv}'=2\lambda_{uv}'B(e_u,e_v)$ one has $a_{uv}'=(\lambda_{uv}'/\lambda_{uv})a_{uv}=a_{uv}/\lambda_{uv}^2$, and also $a_{vu}=2\lambda_{vu}B(e_v,e_u)=(1/\lambda_{uv})\cdot2B(e_u,e_v)=a_{uv}/\lambda_{uv}^2$; hence $a_{uv}'=a_{vu}$ for all $u,v$, that is $A'=A^{T}$. These are the two dual length assignments, the $B_n/C_n$ alternative on a label-$4$ path and the two orientations of $F_4$ and $G_2$, with the arrow pointing from the longer to the shorter root. [step 1.2, step 1.7, F9, F14, F33, F34, F35]

2.5 For a pair as in 1.10 put $P=\operatorname{span}(\alpha_s,\alpha_t)$, $e_1=\alpha_s/|\alpha_s|$, $z=\alpha_t-(\alpha_t,e_1)e_1\ne0$ and $e_2=z/|z|$. Then $(e_1,e_2)$ is an orthonormal basis of $P$ and $\alpha_t=|\alpha_t|(u e_1+v e_2)$ with $u=\cos\theta$, $v=|z|/|\alpha_t|>0$ and $u^2+v^2=1$. The reflection formula gives $s_{\alpha_s}(e_1)=-e_1$, $s_{\alpha_s}(e_2)=e_2$, $s_{\alpha_t}(e_1)=-(2u^2-1)e_1-2uve_2$ and $s_{\alpha_t}(e_2)=-2uve_1+(2u^2-1)e_2$, so $R:=s_{\alpha_s}s_{\alpha_t}$ acts on $P$ by the matrix $\begin{pmatrix}c&d\\-d&c\end{pmatrix}$ with $c=2u^2-1$, $d=2uv$, and fixes $P^\perp$ pointwise. Since $E=P\oplus P^\perp$, a power of $s_{\alpha_s}s_{\alpha_t}$ is the identity exactly when its restriction $R^k$ to $P$ is the identity. Products of such matrices add the pairs $(c,d)$ by $(c,d)(c',d')=(cc'-dd',cd'+dc')$, so by induction $R^k=\begin{pmatrix}C_k&D_k\\-D_k&C_k\end{pmatrix}$ with $(C_1,D_1)=(c,d)$ and the same recursion; from $c^2+d^2=1$ one gets $C_2=c^2-d^2$, $D_2=2cd$, $C_3=4c^3-3c$ and $D_3=d(4c^2-1)$. Since $u\le0$ and $u^2\in\{0,1/4,1/2,3/4\}$, four cases occur: $u^2=0$ gives $c=-1$, $d=0$ and $R=-I$, of order $2$; $u^2=1/4$ gives $c=-1/2$, $d^2=3/4$, hence $C_3=1$, $D_3=0$, so $R^3=I$ while $R\ne I$ and $R^2\ne I$, of order $3$; $u^2=1/2$ gives $c=0$, $d^2=1$ and $R^2=-I$, of order $4$; and $u^2=3/4$ gives $c=1/2$, $d^2=3/4$, hence $C_3=-1$, $D_3=0$, so $R^3=-I$ and $R^6=I$ while $R,R^2,R^3,R^4=-R,R^5=-R^2$ all differ from $I$, of order $6$. [step 1.10, F39, F40]

3.1 Combining 1.1, 1.2 and 2.1: there exists a crystallographic scaling if and only if every edge label of $\Gamma$ lies in $\{3,4,6\}$, if and only if every connected component of $\Gamma$ is one of the Weyl types $A_n,B_n,D_n,E_6,E_7,E_8,F_4,G_2=I_2(6)$; in particular $H_3$, $H_4$ and $I_2(m)$ with $m\notin\{2,3,4,6\}$ admit none, while $I_2(3)=A_2$, $I_2(4)=B_2$ and $I_2(6)=G_2$ do. [step 1.1, step 1.2, step 2.1]

3.2 If $\beta=\lambda\gamma$ with $\beta,\gamma\in\Phi_c$ and $\lambda>0$, then 2.2 gives $\lambda\in\{1/2,1,2\}$ and 2.3 gives $\lambda^2\in\{1,2,1/2,3,1/3\}$; hence $\lambda=1$ and $\beta=\gamma$. [step 2.2, step 2.3]

3.3 By 2.5 the order of $s_{\alpha_s}s_{\alpha_t}$ lies in $\{2,3,4,6\}$ for every pair of distinct $s,t$; since $m(s,t)$ is the order of $st$ and the isomorphism carries $st$ to $s_{\alpha_s}s_{\alpha_t}$, the label $m(s,t)$ lies in $\{2,3,4,6\}$ whenever $s,t$ are distinct; in particular every edge label of $\Gamma$ lies in $\{3,4,6\}$. [step 2.5, F1, F4]

4.1 For every $\gamma\in\Phi_c$ one has $\mathbb R\gamma\cap\Phi_c=\{\gamma,-\gamma\}$: if $\beta=\lambda\gamma\in\Phi_c$ with $\lambda\ne0$, then $-\gamma\in\Phi_c$ by 1.3; if $\lambda>0$, step 3.2 gives $\beta=\gamma$, while if $\lambda<0$, applying step 3.2 to $\beta=(-\lambda)(-\gamma)$ gives $\beta=-\gamma$. [step 1.3, step 3.2]

4.2 By 3.3 every edge label of $\Gamma$ lies in $\{3,4,6\}$; since $W$ is finite, 1.2 now shows that every connected component of $\Gamma$ is one of $A_n,B_n,D_n,E_6,E_7,E_8,F_4,G_2=I_2(6)$, so the type of $(W,S)$ is one of the types listed in 3.1, and all labels lie in $\{2,3,4,6\}$. [step 1.2, step 3.1, step 3.3]

5.1 The $a_s$ are exactly the simple roots of the positive system of $\Phi_c$ defined by a regular vector. By 1.8 every root is an integral combination $\sum_sm_sa_s$ whose nonzero coefficients have one sign, so $(V,\Phi_c)$ satisfies the axioms of a reduced crystallographic Euclidean root system by 1.3, 1.4, 1.5 and 4.1. Because $B$ is positive definite, the map $v\mapsto(B(v,a_s))_s$ is injective on $V$ (a nonzero kernel vector would have $B(v,v)=\sum_sv_sB(v,a_s)=0$) and hence an isomorphism onto $\mathbb R^S$ by [F38]; choose $v$ mapping to $(1,\dots,1)$. Then $B(v,\beta)=\sum_sm_sB(v,a_s)$ has the sign of the nonzero coefficients of $\beta$, so $v$ is regular and $\Phi_c^{+}=\{\beta\in\Phi_c:m_s\ge0\}$, with simple roots $\Delta_c$ by definition. Each $a_s$ is simple: a decomposition $a_s=\beta'+\gamma'$ into positive roots would split the coordinate vector of $a_s$ into nonnegative integer coordinate vectors, forcing one summand to be $a_s$ and the other to be $0\notin\Phi_c$. By the basis theorem $\Delta_c$ is a basis of $V$, so $|\Delta_c|=\dim V=|S|=|\{a_s:s\in S\}|$; since $\{a_s\}\subseteq\Delta_c$, equality $\Delta_c=\{a_s:s\in S\}$ follows. [step 1.3, step 1.4, step 1.5, step 1.8, step 4.1, F15, F23, F24, F25, F36, F37, F38]

6.1 Therefore $\Phi_c$ is a reduced crystallographic Euclidean root system in the inner product space $(V,B)$: it is finite, spans $V$ and omits $0$ (1.3), is closed under its root reflections (1.4), has integral Cartan integers (1.5) and is reduced (4.1). Its Weyl group is $W(\Phi_c)=\rho(W)$ (1.4), and $\rho:W\to W(\Phi_c)$ is an isomorphism because it is surjective by 1.4 and injective, carrying $s$ to $r_{a_s}$; the base is $\{a_s:s\in S\}$ (5.1), so the standard generators correspond to the reflections in a base, and by 3.1 every finite Coxeter system of the listed types is isomorphic to the Weyl group of such a system. Moreover the root, coroot and weight lattices of $\Phi_c$ are the sets $Q,Q^\vee,P$ of the scaling, its coroots are $\alpha^\vee=2\alpha/B(\alpha,\alpha)$, and its Cartan matrix relative to the base $\{a_s\}$ has entries $(a_t,a_s^\vee)=a_{ts}$, the transpose of $A$. [step 1.3, step 1.4, step 1.5, step 3.1, step 4.1, step 5.1, F23, F27, F31, F32, F33]

7.1 All four clauses are established: (1) by 1.1, 2.1 and 3.1; (2) by 6.1 and 4.2; (3) by 1.8; and (4) by 1.7 and 2.4. No axiom of Choice is used. The construction in 2.1 selects a root vertex from each of the finitely many components of a finite forest; this finite selection follows by induction on the number of components, and no other non-unique selection is used. [step 1.1, step 1.7, step 1.8, step 2.1, step 2.4, step 3.1, step 4.2, step 6.1] ∎
