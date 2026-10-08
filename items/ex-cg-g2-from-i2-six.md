---
id: ex-cg-g2-from-i2-six
kind: example
title: "G2 from I2(6): the scaled realization and its twelve roots"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 10
deps: [def-cg-crystallographic-scaling-coroot-and-lattice, lem-cg-integer-pairings-and-allowed-dihedral-labels, def-hh-coxeter-matrix-word-group-and-length, def-cg-real-coxeter-form-and-reflection, def-cg-canonical-reflection-homomorphism, thm-sine-cosine-signs-monotonicity-and-ranges, thm-quarter-turn-values-and-shift-formulas, thm-double-angle-and-power-reduction-identities, thm-cofunction-supplementary-and-reflection-identities, def-pi-via-first-positive-cosine-zero, def-reduced-crystallographic-euclidean-root-system, def-reducible-and-irreducible-root-system, def-positive-system-and-base-of-simple-roots, thm-rank-two-root-system-classification, def-weyl-group-of-a-root-system]
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Lie Algebras, Algebraic Groups, and Lie Groups (course notes, version 2.00)"
      url: "https://www.jmilne.org/math/CourseNotes/LAG.pdf"
      locator: "Chapter I, Section 7, Proposition 7.16 and the rank-two Dynkin diagrams, printed/PDF p. 73: the allowed Cartan integer pairs and the G2 rank-two diagram"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed. (author-hosted digital edition)"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, Section 5, Figure 2.2 and Proposition 2.48(c), printed pp. 151-153: the G2 root configuration and Cartan integer products"
    - title: "Jean Michel, Lectures on Coxeter groups (Beijing lecture notes, April-May 2014)"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/cox.pdf"
      locator: "Printed p. 3 preview of the finite irreducible Coxeter groups and the Weyl-type identification G2 := I2(6); Section 5 cosine table, printed p. 13. Both facts are independently derived in this item."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $S=\{s,t\}$ with $m(s,t)=6$, let $V=\mathbb R^S$ with Coxeter form $B$, and let $W$ and $\rho:W\to\mathrm{GL}(V)$ be the presented Coxeter group and canonical reflection homomorphism. Then $B$ is positive definite and $W=I_2(6)$ has order $12$. The scaling $c_s=1$, $c_t=\sqrt3$ has Cartan matrix $A=\begin{pmatrix}2&-1\\-3&2\end{pmatrix}$ and scaled root set
$$\Phi_c=\{\pm a_s,\pm a_t,\pm(a_s+a_t),\pm(2a_s+a_t),\pm(3a_s+a_t),\pm(3a_s+2a_t)\},$$
where $a_s=e_s$ and $a_t=\sqrt3e_t$. The squared $B$-norms are $1$ on $a_s,a_s+a_t,2a_s+a_t$ and $3$ on $a_t,3a_s+a_t,3a_s+2a_t$; every root-coroot pairing is integral, including $B(a_s,(2a_s+a_t)^\vee)=1$, $B(2a_s+a_t,(3a_s+2a_t)^\vee)=1$ and $B(a_t,(3a_s+a_t)^\vee)=-1$. This is the irreducible reduced crystallographic root system of type $G_2$, and its Weyl group is $W(\Phi_c)=\rho(W)$. The other scaling $c'_s=\sqrt3$, $c'_t=1$ gives $A^T$ and satisfies $\Phi_{c'}=(\sqrt3/2)\Phi_c^\vee$, the dual orientation of the same $G_2$ diagram.

## Facts & Assumptions

**Given:** $S=\{s,t\}$, $m(s,t)=6$, $V=\mathbb R^S$, the Coxeter form $B$, the presented Coxeter group $W$, its canonical reflection homomorphism $\rho$, and the scaling conventions of [[def-cg-crystallographic-scaling-coroot-and-lattice]].

[F1] The presentation has generators $s,t$ and relators $s^2=t^2=1$ and $(st)^6=1$ ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F2] $B(e_s,e_s)=B(e_t,e_t)=1$ and $B(e_s,e_t)=-\cos(\pi/6)$ ([[def-cg-real-coxeter-form-and-reflection]]).

[F3] The canonical homomorphism $\rho:W\to\mathrm{GL}(V)$ satisfies $\rho(i)=r_{e_i}$ for each $i\in S$ ([[def-cg-canonical-reflection-homomorphism]]).

[F4] For a scaling $c$, $a_i=c_ie_i$, $a_i^\vee=2a_i/B(a_i,a_i)$, and $a_{ij}=B(a_i,a_j^\vee)$ ([[def-cg-crystallographic-scaling-coroot-and-lattice]]).

[F5] Cosine is strictly decreasing on $[0,\pi]$, $\cos(\pi/2)=0$, $\cos(\pi-x)=-\cos x$, and $\cos(2x)=2\cos^2x-1$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-quarter-turn-values-and-shift-formulas]], [[thm-cofunction-supplementary-and-reflection-identities]], [[thm-double-angle-and-power-reduction-identities]], [[def-pi-via-first-positive-cosine-zero]]).

[F6] On a one-edge tree labelled $6$, the tree construction with root scale $1$ gives the positive crystallographic scaling $c_s=1$, $c_t=2\cos(\pi/6)$ ([[lem-cg-integer-pairings-and-allowed-dihedral-labels]], clause (3)).

[F7] If $c$ is crystallographic, then $B(\beta,\gamma^\vee)\in\mathbb Z$ for every $\beta,\gamma\in\Phi_c$, where $\Phi_c^\vee=\{\beta^\vee:\beta\in\Phi_c\}$ and $\beta^\vee=2\beta/B(\beta,\beta)$ ([[lem-cg-integer-pairings-and-allowed-dihedral-labels]], clause (4)).

[F8] A reduced crystallographic Euclidean root system is finite, spans its inner-product space, is stable under reflection in every root, has integral Cartan pairings, and has only $\pm\alpha$ on each root line ([[def-reduced-crystallographic-euclidean-root-system]]).

[F9] Reducibility is an orthogonal decomposition of the root set into two nonempty parts; irreducibility means no such decomposition ([[def-reducible-and-irreducible-root-system]]).

[F10] For a regular vector $v$, positive roots are those with positive inner product with $v$, and a positive root is simple if it is not a sum of two positive roots ([[def-positive-system-and-base-of-simple-roots]]).

[F11] An irreducible reduced crystallographic root system of rank two with six positive roots is of type $G_2$; the other irreducible rank-two types have three positive roots ($A_2$) or four ($B_2\cong C_2$) ([[thm-rank-two-root-system-classification]], clause (iv)).

[F12] The Weyl group $W(\Phi_c)$ is generated by the reflections in all roots of $\Phi_c$ ([[def-weyl-group-of-a-root-system]]).

[F13] Every element of $W$ is the value of a finite word in $S$ ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F14] For $B(a,a)\ne0$, $r_a(x)=x-2B(x,a)a/B(a,a)$ ([[def-cg-real-coxeter-form-and-reflection]]).

[F15] $\Phi_c=\{\rho(w)a_i:w\in W,\ i\in S\}$ ([[def-cg-crystallographic-scaling-coroot-and-lattice]]).

## Verification

**Given:** $S=\{s,t\}$ and $m(s,t)=6$.

**Proof technique:** direct presentation and orbit computations, followed by verification of the root-system axioms.

1.1 Since $V=\mathbb R^{\{s,t\}}$, evaluating functions at $s$ and $t$ shows that $(e_s,e_t)$ is a basis. Put $z=\cos(\pi/3)$. Since $0<\pi/3<\pi/2$, [F5] gives $z>0$. The supplementary and double-angle identities give $-z=\cos(2\pi/3)=2z^2-1$, so $(2z-1)(z+1)=0$ and hence $z=1/2$. Applying the double-angle identity at $\pi/6$ and using positivity again gives $\cos(\pi/6)=\sqrt3/2$. Thus $B(xe_s+ye_t,xe_s+ye_t)=x^2-\sqrt3xy+y^2=(x-\frac{\sqrt3}{2}y)^2+\frac14y^2$, which is positive for every nonzero $(x,y)$, so $B$ is positive definite. Set $u=st$; then $u^6=1$, $sus=u^{-1}$ and $t=su$. Moving each $s$ to the right shows every word is $u^ks$ or $u^k$, with $0\le k<6$, so $|W|\le12$. [F1, F2, F5, F13, algebra]

2.1 By [F6] and step 1.1, $c_s=1$ and $c_t=2\cos(\pi/6)=\sqrt3$ give a crystallographic scaling. Hence $a_s=e_s$, $a_t=\sqrt3e_t$, $B(a_s,a_t)=-3/2$, $a_{st}=B(a_s,a_t^\vee)=-1$, and $a_{ts}=B(a_t,a_s^\vee)=-3$, so $A=\begin{pmatrix}2&-1\\-3&2\end{pmatrix}$. Choosing $t$ as the tree root gives the other scaling $c'_s=\sqrt3$, $c'_t=1$; the same Cartan formula gives $A'=\begin{pmatrix}2&-3\\-1&2\end{pmatrix}=A^T$. [F2, F4, F6, step 1.1, algebra]

2.2 In coordinates $(x,y)$ relative to $(a_s,a_t)$, the reflection formula [F14] gives $r_{a_s}(x,y)=(-x+3y,y)$ and $r_{a_t}(x,y)=(x,x-y)$; each matrix squares to the identity. These maps preserve $R:=\{\pm(1,0),\pm(0,1),\pm(1,1),\pm(2,1),\pm(3,1),\pm(3,2)\}$: on the six displayed positive pairs their respective images are $((-1,0),(3,1),(2,1),(1,1),(0,1),(3,2))$ and $((1,1),(0,-1),(1,0),(2,1),(3,2),(3,1))$, and the images of their negatives are the negatives of these. Conversely $(1,1)=r_{a_t}(1,0)$, $(2,1)=r_{a_s}(1,1)$, $(3,1)=r_{a_s}(0,1)$ and $(3,2)=r_{a_t}(3,1)$. For every orbit vector $\beta=\rho(w)a_i$, the element $\rho(ws_iw^{-1})$ sends $\beta$ to $-\beta$, so all twelve pairs lie in the orbit of the simple roots. Substituting positive scalar multiples in the reflection formula gives $r_{a_s}=r_{e_s}=\rho(s)$ and $r_{a_t}=r_{e_t}=\rho(t)$; hence $R=\Phi_c$ by [F15]. The squared norm of $(x,y)$ is $x^2-3xy+3y^2$, whose values on $(1,0),(0,1),(1,1),(2,1),(3,1),(3,2)$ are respectively $1,3,1,1,3,3$. The product $U=\rho(st)=r_{a_s}r_{a_t}$ has matrix $\begin{pmatrix}2&-3\\1&-1\end{pmatrix}$, with $U^2=\begin{pmatrix}1&-3\\1&-2\end{pmatrix}$ and $U^3=-I$; hence $U$ has exact order $6$. The six maps $U^k$ are distinct, as are $U^k\rho(s)$, and the two lists are disjoint since their determinants are $1$ and $-1$. Thus $|\rho(W)|\ge12$; with step 1.1 this gives $|W|=12$ and $\rho$ is injective. [F2, F3, F4, F14, F15, step 1.1, algebra]

3.1 For every nonisotropic $a$, expansion of [F14] gives $B(r_au,r_av)=B(u,v)-\frac{2B(u,a)B(a,v)}{B(a,a)}-\frac{2B(v,a)B(u,a)}{B(a,a)}+\frac{4B(u,a)B(v,a)}{B(a,a)}=B(u,v)$; applying this to $a_s,a_t$ shows the generators of $\rho(W)$ preserve $B$, hence so does every $\rho(w)$. If $\beta=\rho(w)a_i\in\Phi_c$ by [F15], then $B(\beta,\beta)=B(a_i,a_i)>0$, and conjugating the reflection formula by the $B$-isometry $\rho(w)$ gives $r_\beta=\rho(w)r_{a_i}\rho(w)^{-1}$, so $r_\beta(\Phi_c)=\Phi_c$. The set $\Phi_c=R$ is finite, nonzero and spans $V$; its root-coroot pairings are integral by [F7] and its reducedness follows from the six distinct root slopes. Therefore $\Phi_c$ is a reduced crystallographic Euclidean root system. [F2, F3, F4, F7, F8, F14, F15, step 2.1, step 2.2, algebra]

4.1 Let $v=6a_s+\frac{10}{3}a_t$; the Gram matrix from [F2], [F4] and step 1.1 gives $B(v,a_s)=B(v,a_t)=1$. The vectors $a_s=e_s$ and $a_t=\sqrt3e_t$ form a basis. Thus for each listed pair $(x,y)$ with $x,y\ge0$, $B(v,xa_s+ya_t)=x+y>0$, and the six listed vectors are exactly the positive roots. Neither $a_s$ nor $a_t$ is a sum of two positive roots, since the only positive root with second coordinate zero is $a_s$ and the only one with first coordinate zero is $a_t$; the other positive roots decompose as $a_s+a_t$, $a_s+(a_s+a_t)$, $a_s+(2a_s+a_t)$ and $a_t+(3a_s+a_t)$. Hence $\{a_s,a_t\}$ is a base. Since $B(a_s,a_t)=-3/2\ne0$, these two spanning roots cannot belong to different orthogonal parts in a decomposition, while they already span $V$; [F9] therefore gives irreducibility. By [F11], the root system is of type $G_2$. [F2, F4, F9, F10, F11, step 1.1, step 2.1, step 2.2, step 3.1, algebra]

5.1 Every root reflection is $\rho(w)r_{a_i}\rho(w)^{-1}$ as in step 3.1, so [F12] gives $W(\Phi_c)\subseteq\rho(W)$; conversely $r_{a_s}=\rho(s)$ and $r_{a_t}=\rho(t)$ generate $\rho(W)$, so $W(\Phi_c)=\rho(W)$ and it has order $12$. For the second scaling, $a'_s=\sqrt3e_s=(\sqrt3/2)a_s^\vee$ and $a'_t=e_t=(\sqrt3/2)a_t^\vee$; because $\rho(w)$ preserves $B$, $(\rho(w)a_i)^\vee=\rho(w)a_i^\vee$, whence $\Phi_{c'}=(\sqrt3/2)\Phi_c^\vee$ by [F7]. This construction uses only the two fixed generators and finitely many roots, so no form of the Axiom of Choice is used. [F3, F4, F7, F12, step 2.1, step 3.1, algebra] ∎

No form of the Axiom of Choice is used; all choices and computations involve the two fixed generators and finite sets.
