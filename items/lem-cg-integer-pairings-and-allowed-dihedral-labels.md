---
id: lem-cg-integer-pairings-and-allowed-dihedral-labels
kind: lemma
title: "Cartan-number products, allowed edge labels, tree scalings and reflection stability"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 9
deps: [def-cg-crystallographic-scaling-coroot-and-lattice, def-hh-coxeter-matrix-word-group-and-length, def-cg-real-coxeter-form-and-reflection, lem-cg-reflection-form-invariance-and-rank-two-orders, def-cg-canonical-reflection-homomorphism, lem-cg-reflection-representation-descends-and-root-norms, thm-cg-root-sign-and-simple-reflection-positivity, def-cg-coxeter-diagram-components-and-finite-type, lem-cg-positive-definite-diagram-exclusions, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-definiteness-inertia-and-signature-data-over-the-reals, def-real-and-complex-inner-product-space, def-linear-basis, thm-quarter-turn-values-and-shift-formulas, thm-sine-cosine-signs-monotonicity-and-ranges, def-sine-and-cosine-by-power-series, def-pi-via-first-positive-cosine-zero, thm-double-angle-and-power-reduction-identities, thm-cofunction-supplementary-and-reflection-identities, def-tree-forest-and-leaf, thm-tree-characterisations]
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed. (author-hosted digital edition)"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, Section 5, Proposition 2.48 (b)-(d), printed pp. 152-153: proportional roots and the integral Cartan integers with Schwarz product bound at most 3, and Lemma 2.56/Proposition 2.54 for Dynkin data; Chapter II, Section 6 for the Weyl group of a root system"
    - title: "J. S. Milne, Lie Algebras, Algebraic Groups, and Lie Groups (course notes, version 2.00)"
      url: "https://www.jmilne.org/math/CourseNotes/LAG.pdf"
      locator: "Chapter I, Section 7, the rank-two discussion and Proposition 7.16, printed/PDF pp. 71-73: the table of possible Cartan-integer pairs 0,1,2,3 for distinct simple roots, hence angles 90, 120, 135, 150 degrees"
    - title: "Jean Michel, Lectures on Coxeter groups (Beijing lecture notes, April-May 2014)"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/cox.pdf"
      locator: "Section 5, the cosine table for m=2,3,4,5,6 (printed p. 13): -cos(pi/m) and cos^2(pi/m) values 0, 1/4, 1/2, (3+sqrt5)/8, 3/4 used in the label restriction"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $S$ be a finite set, $m$ a Coxeter matrix, $W$ the presented group, $V=\mathbb R^S$, $B$ the Coxeter form, $\rho$ the canonical reflection homomorphism and $\Gamma$ the diagram ([[def-hh-coxeter-matrix-word-group-and-length]], [[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]], [[def-cg-coxeter-diagram-components-and-finite-type]]), and let $c$ be a scaling with scaled simple roots $a_s$, coroots $a_s^\vee$ and Cartan numbers $a_{st}=B(a_s,a_t^\vee)$ ([[def-cg-crystallographic-scaling-coroot-and-lattice]]).

**(1) Products.** $a_{ss}=2$ for every $s$; for distinct $s,t$ with $m(s,t)<\infty$,
$$a_{st}=-2\frac{c_s}{c_t}\cos\frac{\pi}{m(s,t)}\le0,\qquad a_{st}a_{ts}=4\cos^2\frac{\pi}{m(s,t)},$$
and for $m(s,t)=\infty$ one has $a_{st}=-2c_s/c_t$ and $a_{st}a_{ts}=4$. Moreover $a_{st}=0$ if and only if $m(s,t)=2$.

**(2) Allowed labels and length ratios.** Assume that $B$ is positive definite and that $c$ is crystallographic. Then for all distinct $s,t$
$$0\le a_{st}a_{ts}<4,\qquad\text{so}\qquad a_{st}a_{ts}\in\{0,1,2,3\},$$
and $m(s,t)\in\{2,3,4,6\}$, according to $a_{st}a_{ts}=4\cos^2(\pi/m(s,t))=0,1,2,3$. If $\Gamma$ is connected and has an edge of label $4$ (respectively $6$), then that is its only edge of label $\ge4$, and $c_s^2/c_t^2\in\{1,2,2^{-1}\}$ (respectively $\{1,3,3^{-1}\}$) for all $s,t\in S$; if $\Gamma$ has no edge of label $\ge4$, then $c_s=c_t$ for all $s,t$ in the same connected component.

**(3) Realizations on trees.** Let $\Gamma$ be a forest (disjoint union of trees) all of whose edge labels lie in $\{3,4,6\}$. Choose a root vertex in each component, set $c_{s_0}:=1$ at each root, and for every edge $\{s,t\}$ with $s$ on the root side and $t$ the other endpoint set $c_t:=2c_s\cos(\pi/m(s,t))$. Then $c$ is positive and crystallographic: on every edge $\{s,t\}$ with $s$ the root-side endpoint,
$$a_{st}=-1,\qquad a_{ts}=-4\cos^2\frac{\pi}{m(s,t)}\in\{-1,-2,-3\},$$
while $a_{st}=0$ for non-adjacent $s,t$ and $a_{ss}=2$.

**(4) Lattices, integrality and stability.** Assume that $c$ is crystallographic. Then for all $s,t$
$$r_s(a_t)=a_t-a_{ts}a_s,\qquad r_s(a_t^\vee)=a_t^\vee-a_{st}a_s^\vee,$$
hence $r_s(Q)=Q$ and $r_s(Q^\vee)=Q^\vee$. Consequently $Q$ and $Q^\vee$ are $\rho(W)$-stable lattices of rank $|S|$, $\Phi_c\subseteq Q$, $Q=\mathbb Z\Phi_c$, $Q^\vee=\mathbb Z\Phi_c^\vee$, and $Q\subseteq P$. Here, for $\beta=\rho(w)a_s\in\Phi_c$, write $\beta^\vee:=2\beta/B(\beta,\beta)$; this is defined because $\rho$ preserves $B$ and $B(a_s,a_s)=c_s^2>0$, and $\Phi_c^\vee:=\{\beta^\vee:\beta\in\Phi_c\}$. Moreover every element of $\Phi_c$ is an integral linear combination of the $a_s$ whose nonzero coefficients all have the same sign, and $B(\beta,\gamma^\vee)\in\mathbb Z$ for all $\beta,\gamma\in\Phi_c$.

## Facts & Assumptions

**Given:** A finite set $S$, a Coxeter matrix $m$ on $S$, the presented group $W$, the space $V=\mathbb R^S$ with its Coxeter form $B$, the canonical reflection homomorphism $\rho$, the diagram $\Gamma$, and a scaling $c$ with scaled simple roots $a_s$, coroots $a_s^\vee$ and Cartan numbers $a_{st}$. In (2) and in the ratio clause below, $B$ is assumed positive definite and $c$ crystallographic; in (3) $\Gamma$ is assumed to be a forest with all edge labels in $\{3,4,6\}$; in (4) $c$ is assumed crystallographic.

[F1] $S$ is finite and $m(s,s)=1$, while $m(s,t)=m(t,s)\in\{2,3,\dots\}\cup\{\infty\}$ for $s\ne t$ ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F2] Every element of $W$ is a product of elements of $S$, by the definition of the length function ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F3] $B$ is the unique symmetric bilinear form on $V$ with $B(e_s,e_s)=1$, $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for finite $m(s,t)$ and $B(e_s,e_t)=-1$ for $m(s,t)=\infty$ ([[def-cg-real-coxeter-form-and-reflection]]).

[F4] For $B(a,a)\ne0$, the reflection with normal $a$ is $r_a(v)=v-\frac{2B(v,a)}{B(a,a)}a$ ([[def-cg-real-coxeter-form-and-reflection]]).

[F5] Such a reflection $r_a$ is linear, satisfies $r_a^2=\mathrm{id}_V$, $r_a(a)=-a$ and $B(r_au,r_aw)=B(u,w)$ for all $u,w$ ([[lem-cg-reflection-form-invariance-and-rank-two-orders]]).

[F6] $\rho(s)=r_s$ for every $s\in S$ ([[def-cg-canonical-reflection-homomorphism]]).

[F7] $V_+=\{\sum_{s\in S}\lambda_se_s:\lambda_s\ge0\}$ is the positive cone ([[def-cg-canonical-reflection-homomorphism]]).

[F8] $\rho$ preserves $B$: $B(\rho(w)u,\rho(w)w')=B(u,w')$ for all $w\in W$ and $u,w'\in V$ ([[lem-cg-reflection-representation-descends-and-root-norms]]).

[F9] Every root of $\Phi=\{\rho(w)e_s\}$ lies in $V_+\setminus\{0\}$ or in $-V_+\setminus\{0\}$ ([[thm-cg-root-sign-and-simple-reflection-positivity]]).

[F10] The scaling data: $a_s=c_se_s$, $a_s^\vee=2a_s/B(a_s,a_s)=2e_s/c_s$, and $a_{st}=B(a_s,a_t^\vee)=2B(a_s,a_t)/B(a_t,a_t)$ ([[def-cg-crystallographic-scaling-coroot-and-lattice]]).

[F11] The scaling is crystallographic when all $a_{st}$ are integers ([[def-cg-crystallographic-scaling-coroot-and-lattice]]).

[F12] $Q=\sum_s\mathbb Za_s$, $Q^\vee=\sum_s\mathbb Za_s^\vee$, $P=\{\lambda:B(\lambda,q^\vee)\in\mathbb Z\ \forall q^\vee\in Q^\vee\}$ and $\Phi_c=\{\rho(w)a_s:w\in W,\ s\in S\}$ ([[def-cg-crystallographic-scaling-coroot-and-lattice]]).

[F13] A basis of $V$ is linearly independent and spans $V$ ([[def-linear-basis]]).

[F14] The functions $e_s$ ($s\in S$) form a basis of $V$ ([[lem-cg-reflection-form-invariance-and-rank-two-orders]]).

[F15] In a real inner product space, $|\langle u,v\rangle|\le\|u\|\,\|v\|$, with equality if and only if $u,v$ are linearly dependent ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[F16] A real inner product space is a real vector space with a positive definite inner product ([[def-real-and-complex-inner-product-space]]).

[F17] A symmetric bilinear form $B$ is positive definite when $B(v,v)>0$ for every $v\ne0$ ([[def-definiteness-inertia-and-signature-data-over-the-reals]]).

[F18] The Coxeter diagram has vertex set $S$, with an edge between $s\ne t$ exactly when $m(s,t)\ge3$, labelled $m(s,t)$; connectivity and components are those of the underlying graph ([[def-cg-coxeter-diagram-components-and-finite-type]]).

[F19] A connected positive definite diagram has at most one edge of label $\ge4$ ([[lem-cg-positive-definite-diagram-exclusions]]).

[F20] A forest is a graph containing no cycle, and a tree is a connected forest ([[def-tree-forest-and-leaf]]).

[F21] Every two vertices of a finite nonempty tree are joined by a unique path ([[thm-tree-characterisations]]).

[F22] $\sin$ and $\cos$ are the power series functions, so $\cos0=1$ ([[def-sine-and-cosine-by-power-series]]).

[F23] $\pi>0$ ([[def-pi-via-first-positive-cosine-zero]]).

[F24] $\cos(\pi/2)=0$ and $\cos\pi=-1$ ([[thm-quarter-turn-values-and-shift-formulas]]).

[F25] Cosine is strictly decreasing on $[0,\pi]$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[F26] $\cos(2x)=2\cos^2x-1$ for all real $x$ ([[thm-double-angle-and-power-reduction-identities]]).

[F27] $\cos(\pi-x)=-\cos x$ for all real $x$ ([[thm-cofunction-supplementary-and-reflection-identities]]).

[F28] A connected positive definite diagram contains no cycle ([[lem-cg-positive-definite-diagram-exclusions]] (2)).

## Proof

**Proof technique:** direct.

1.1 For all $s,t\in S$ one has $a_{st}=2\frac{c_s}{c_t}B(e_s,e_t)$; in particular $a_{ss}=2$ and $a_s^\vee=\frac{2e_s}{c_s}$. [F3, F10, given, algebra]

1.2 For distinct $s,t$ with $m(s,t)<\infty$ one has $a_{st}=-2\frac{c_s}{c_t}\cos\frac{\pi}{m(s,t)}\le0$ and $a_{st}a_{ts}=4\cos^2\frac{\pi}{m(s,t)}$; for $m(s,t)=\infty$ one has $a_{st}=-2c_s/c_t<0$ and $a_{st}a_{ts}=4$; and $a_{st}=0$ exactly when $m(s,t)=2$. Indeed $2\le m(s,t)<\infty$ gives $\pi/m(s,t)\in(0,\pi/2]$, where $\cos\ge0$ and $\cos=0$ only at $\pi/2$ because $\cos$ is strictly decreasing on $[0,\pi]$ with $\cos(\pi/2)=0$. [F1, F3, F10, F23, F24, F25, algebra]

1.3 The values $\cos\frac{\pi}{2}=0$, $\cos\frac{\pi}{3}=\frac12$, $\cos^2\frac{\pi}{4}=\frac12$ and $\cos^2\frac{\pi}{6}=\frac34$ hold, and $\cos x>0$ for $0<x<\frac{\pi}{2}$. For the first, $\cos(\pi/2)=0$; putting $c:=\cos(\pi/3)$, the supplementary identity at $x=\pi/3$ gives $\cos(2\pi/3)=-c$ while the double-angle identity gives $\cos(2\pi/3)=2c^2-1$, so $2c^2+c-1=(2c-1)(c+1)=0$ and $c>0$ (as $0<\pi/3<\pi/2$ and $\cos$ decreases from $\cos(\pi/2)=0$) force $c=\frac12$; the double-angle identity at $x=\pi/4$ gives $2\cos^2(\pi/4)-1=\cos(\pi/2)=0$, and at $x=\pi/6$ it gives $2\cos^2(\pi/6)-1=\cos(\pi/3)=\frac12$. [F22, F23, F24, F25, F26, F27, algebra]

1.4 If $B$ is positive definite then $(V,B)$ is a real inner product space, and for linearly independent $u,v\in V$ one has $B(u,v)^2<B(u,u)B(v,v)$; moreover for distinct $s,t$ the vectors $a_s=c_se_s$ and $a_t=c_te_t$ are linearly independent. [F3, F10, F13, F14, F15, F16, F17, algebra]

1.5 Let $\Gamma$ be a forest whose edge labels lie in $\{3,4,6\}$, with a root chosen in each component. Then each component is a tree, every vertex $t$ other than its root has a unique neighbour $s$ on its path to that root, and the prescription $c_{s_0}:=1$, $c_t:=2c_s\cos(\pi/m(s,t))$ determines a unique positive value $c_t$ for every vertex. [F18, F20, F21, F23, F24, F25, algebra]

1.6 Writing $r_s:=\rho(s)=r_{e_s}$ for $s\in S$, the reflection formula gives, for all $s,t$, $r_s(a_t)=a_t-a_{ts}a_s$ and $r_s(a_t^\vee)=a_t^\vee-a_{st}a_s^\vee$. [F3, F4, F6, F10, algebra]

2.1 Assume $B$ positive definite and $c$ crystallographic. Then for distinct $s,t$ one has $0\le a_{st}a_{ts}<4$, so $a_{st}a_{ts}\in\{0,1,2,3\}$; and $m(s,t)\in\{2,3,4,6\}$, with $4\cos^2(\pi/m(s,t))=0,1,2,3$ for $m=2,3,4,6$ respectively. The bound $<$ uses strict Cauchy-Schwarz in the basis-independent pair $a_s,a_t$; the four values use step 1.3; and no other $m$ occurs because $m=5$ gives $1/2<\cos^2(\pi/5)<3/4$ (from $\pi/6<\pi/5<\pi/4$ by decrease of $\cos$), so $4\cos^2(\pi/5)\in(2,3)$, while $7\le m<\infty$ gives $3/4<\cos^2(\pi/m)<1$, so $4\cos^2(\pi/m)\in(3,4)$, and $m=\infty$ gives the product $4$. [step 1.2, step 1.3, step 1.4, F11, F25, algebra]

2.2 Let $\Gamma$ be a forest with edge labels in $\{3,4,6\}$ and let $c$ be the tree scaling of step 1.5. Then $c$ is crystallographic: on every edge $\{s,t\}$ with $s$ the root-side endpoint, $a_{st}=-1$ and $a_{ts}=-4\cos^2(\pi/m(s,t))\in\{-1,-2,-3\}$; for non-adjacent distinct $s,t$ one has $a_{st}=0$; and $a_{ss}=2$. [step 1.1, step 1.2, step 1.3, step 1.5, F18, algebra]

2.3 Assume $c$ crystallographic. In the formulas of step 1.6, the coefficients $a_{ts}$ and $a_{st}$ are integers by [F11], so each generator matrix $r_s$ has integer entries in both bases $(a_t)$ and $(a_t^\vee)$. Every $w\in W$ is a finite product of elements of $S$ [F2], and $\rho$ is a homomorphism with $\rho(s)=r_s$ [F6]; therefore the matrices of $\rho(w)$ in both bases have integer entries. In particular, for every $w\in W$ and $t\in S$, $\rho(w)a_t$ is an integral linear combination of the $a_s$. The $a$-basis coefficients of $\rho(w)a_s$ all have one sign because $\rho(w)a_s=c_s\rho(w)e_s$ has, in the $e$-basis, coefficients of one sign by [F9] and [F7], and re-expressing in the $a$-basis multiplies the $t$-th coefficient by the positive factor $c_s/c_t$. [step 1.6, F2, F6, F7, F9, F10, F11, algebra]

2.4 Assume $c$ crystallographic. Step 1.6 and [F11] give $r_s(a_t)\in Q$ and $r_s(a_t^\vee)\in Q^\vee$ for all $s,t$, hence $r_s(Q)\subseteq Q$ and $r_s(Q^\vee)\subseteq Q^\vee$; since $r_s^2=\mathrm{id}$ by [F5], applying $r_s$ gives the reverse inclusions, so both are equalities. Since $W$ is generated by $S$ and $\rho(s)=r_s$ [F2, F6], every $\rho(w)$ preserves $Q$ and $Q^\vee$. Because $(a_s)$ and $(a_s^\vee)$ are bases of $V$, their $\mathbb Z$-spans $Q$ and $Q^\vee$ are free abelian groups of rank $|S|$ and are $\rho(W)$-stable. [step 1.6, F2, F5, F6, F10, F11, F12, F13, F14, algebra]

3.1 Assume $B$ positive definite and $c$ crystallographic, and let $\{s,t\}$ be an edge of $\Gamma$ with label $m\in\{3,4,6\}$; put $p:=4\cos^2(\pi/m)\in\{1,2,3\}$. Then $a_{st}$ and $a_{ts}$ are negative integers with product $p$, so $\{|a_{st}|,|a_{ts}|\}=\{1,p\}$ and $\frac{c_s^2}{c_t^2}=\frac{a_{st}^2}{p}\in\{1/p,p\}$; in particular every edge of label $3$ has $c_s=c_t$. [step 1.1, step 1.2, step 1.3, step 2.1, algebra]

3.2 Assume $c$ crystallographic. By step 2.3, $\Phi_c\subseteq Q$, hence $\mathbb Z\Phi_c\subseteq Q$, and since each $a_s\in\Phi_c$ also $Q\subseteq\mathbb Z\Phi_c$, so $Q=\mathbb Z\Phi_c$. Likewise, for $\beta=\rho(w)a_s$ the identity $\beta^\vee=\frac{2\beta}{B(\beta,\beta)}=\rho(w)\frac{2a_s}{B(a_s,a_s)}=\rho(w)a_s^\vee$ (using preservation of $B$) shows that each element of $\Phi_c^\vee$ lies in $Q^\vee$ by step 2.4, so $\mathbb Z\Phi_c^\vee\subseteq Q^\vee$, while $a_s^\vee=\frac{2a_s}{B(a_s,a_s)}$ with $a_s\in\Phi_c$ gives the reverse inclusion; hence $Q^\vee=\mathbb Z\Phi_c^\vee$. Finally $Q\subseteq P$, since $B(a_s,q^\vee)=\sum_t n_ta_{st}\in\mathbb Z$ for $q^\vee=\sum_tn_ta_t^\vee\in Q^\vee$ by bilinearity and integrality of the $a_{st}$, so each $a_s$ lies in $P$ and $P$ is an additive subgroup. [step 1.1, step 2.3, step 2.4, F3, F8, F10, F12, algebra]

3.3 Assume $c$ crystallographic. For $\beta=\rho(w)a_s$ and $\gamma=\rho(v)a_t$ in $\Phi_c$ one has $\frac{2\gamma}{B(\gamma,\gamma)}=\rho(v)a_t^\vee$ and $B(\beta,\rho(v)a_t^\vee)=B(\rho(v)^{-1}\beta,a_t^\vee)=\sum_um_ua_{ut}\in\mathbb Z$, where $\rho(v)^{-1}\beta=\rho(v^{-1}w)a_s=\sum_um_ua_u$ has integer coefficients $m_u$ by step 2.3. [step 2.3, F3, F8, F10, algebra]

4.1 Assume $B$ positive definite, $c$ crystallographic and $\Gamma$ connected. Then $\Gamma$ has at most one edge of label $\ge4$, every other edge has label $3$ and hence squared length ratio $1$; for any two vertices the squared ratio $c_s^2/c_t^2$ is the product of the edge ratios along a path, and by [F28] $\Gamma$ contains no cycle, so such a path meets the unique multi-edge at most once and the product equals $1$ when the path avoids the multi-edge and $2^{\pm1}$ or $3^{\pm1}$ when it crosses a label-$4$ or label-$6$ edge. Consequently $c_s^2/c_t^2\in\{1,2,2^{-1}\}$ for all $s,t$ when an edge of label $4$ exists, $c_s^2/c_t^2\in\{1,3,3^{-1}\}$ when an edge of label $6$ exists, and $c_s=c_t$ for all $s,t\in S$ when no edge of label $\ge4$ exists. [step 3.1, F18, F19, F28, algebra]

5.1 This completes all four clauses: (1) is steps 1.1 and 1.2; (2) is step 2.1 together with the ratio alternatives of steps 3.1 and their global form 4.1; (3) is steps 1.5 and 2.2; and (4) is steps 1.6, 2.3, 2.4, 3.2 and 3.3. [step 1.1, step 1.2, step 1.5, step 1.6, step 2.1, step 2.2, step 2.3, step 2.4, step 3.1, step 3.2, step 3.3, step 4.1] ∎

## Remarks

No Axiom of Choice is used. The forest in step 1.5 is finite, so its components form a finite family; choosing one vertex from each nonempty component is finite choice, provable by induction on the number of components. Every path and sum used in the proof is finite, and no arbitrary-index selection is made.
