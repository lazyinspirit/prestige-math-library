---
id: ex-cg-b2-c2-dual-realizations-and-lattices
kind: example
title: "The two realizations of $I_2(4)$: $B_2$ and $C_2$ with their lattices and duality"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 10
deps: [def-cg-crystallographic-scaling-coroot-and-lattice, lem-cg-integer-pairings-and-allowed-dihedral-labels, def-cg-real-coxeter-form-and-reflection, def-cg-canonical-reflection-homomorphism, def-hh-coxeter-matrix-word-group-and-length, ex-classical-root-systems-in-euclidean-coordinates, def-positive-system-and-base-of-simple-roots, def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice, def-coroot-and-dual-root-system, def-cartan-matrix-of-a-based-root-system, lem-viete-finite-cosine-product-and-nested-radicals]
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct rank-two reflection-orbit and coordinate-lattice calculations
sources:
  references:
    - title: "J. S. Milne, Lie Algebras, Algebraic Groups, and Lie Groups (course notes, version 2.00)"
      url: "https://www.jmilne.org/math/CourseNotes/LAG.pdf"
      locator: "Chapter I, Section 7, 7.22-7.25, printed pp. 75-76: root and weight lattices, P(R) dual to Q(R^vee), the correct inclusion Q(R) contained in P(R), and fundamental weights. Milne notes that some proofs are omitted; all indices here are calculated locally."
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed. (author-hosted digital edition)"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, (2.43) and (2.50), printed pp. 150 and 155, for the standard B2/C2 coordinate root sets; Chapter IV, Section 7, Proposition 4.64, printed p. 267, for index context only (the indices here are calculated locally)."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $S=\{s,t\}$ with $m(s,t)=4$, $V=\mathbb R^S$ and Coxeter form
$B(e_s,e_s)=B(e_t,e_t)=1$, $B(e_s,e_t)=-\cos(\pi/4)=-\sqrt2/2$. Then
$W=I_2(4)$ is finite and $B$ is positive definite. Consider the two
crystallographic scalings
$$c=(c_s,c_t)=(1,2\cos\tfrac\pi4)=(1,\sqrt2),\qquad c'=(c'_s,c'_t)=(2\cos\tfrac\pi4,1)=(\sqrt2,1).$$

**(1) Both scalings and their Cartan matrices.** For $c$ the scaled Cartan
matrix is $A=\begin{pmatrix}2&-1\\-2&2\end{pmatrix}$; for $c'$ it is
$A'=\begin{pmatrix}2&-2\\-1&2\end{pmatrix}=A^T$.

**(2) Root systems and duality.** Under the isometry
$\psi:V\to\mathbb R^2$ with
$$\psi(e_s)=\frac{\varepsilon_1-\varepsilon_2}{\sqrt2},\qquad \psi(e_t)=\varepsilon_2,$$
the scaled root sets are $\psi(\Phi_c)=\frac1{\sqrt2}\Phi(C_2)$ and
$\psi(\Phi_{c'})=\Phi(B_2)$, where
$$\Phi(B_2)=\{\pm\varepsilon_i\}\cup\{\pm\varepsilon_1\pm\varepsilon_2\},\qquad \Phi(C_2)=\{\pm2\varepsilon_i\}\cup\{\pm\varepsilon_1\pm\varepsilon_2\}.$$
Both are reduced crystallographic Euclidean root systems. Moreover
$\Phi_{c'}=\frac1{\sqrt2}\Phi_c^\vee$, so the two length assignments realize
the dual $B_2/C_2$ systems of the same Coxeter diagram $I_2(4)$.

**(3) Root and coroot lattices.** In the standard coordinates,
$$Q(B_2)=\mathbb Z\varepsilon_1+\mathbb Z\varepsilon_2,\qquad Q^\vee(B_2)=\mathbb Z(\varepsilon_1-\varepsilon_2)+\mathbb Z(2\varepsilon_2)=Q(C_2),$$
$$Q(C_2)=\mathbb Z(\varepsilon_1-\varepsilon_2)+\mathbb Z(2\varepsilon_2),\qquad Q^\vee(C_2)=\mathbb Z\varepsilon_1+\mathbb Z\varepsilon_2=Q(B_2).$$
Thus duality exchanges the root and coroot lattices.

**(4) Weight lattices.** The weight lattices dual to the coroot lattices are
$$P(B_2)=\mathbb Z\varepsilon_1+\mathbb Z\frac{\varepsilon_1+\varepsilon_2}{2},\qquad P(C_2)=\mathbb Z\varepsilon_1+\mathbb Z\varepsilon_2.$$
Consequently $[P(B_2):Q(B_2)]=[P(C_2):Q(C_2)]=2$, while a direct $A_2$
coordinate calculation gives $[P(A_2):Q(A_2)]=3$.

## Facts & Assumptions

**Given:** the rank-two Coxeter system with $m(s,t)=4$, its Coxeter form $B$, the two positive scalings in the Statement, and the standard coordinate root sets $A_2$, $B_2$, and $C_2$.

[F1] For a scaling, $a_s=c_se_s$, $a_s^\vee=2a_s/B(a_s,a_s)$, and $a_{st}=B(a_s,a_t^\vee)$ ([[def-cg-crystallographic-scaling-coroot-and-lattice]]).

[F2] In the crystallographic case, $Q$ and $Q^\vee$ are the spans of the scaled simple roots and coroots, $P$ is dual to $Q^\vee$, and $\Phi_c=\{\rho(w)a_s:w\in W,s\in S\}$ ([[def-cg-crystallographic-scaling-coroot-and-lattice]]).

[F3] For a forest with labels in $\{3,4,6\}$, rooting each component and setting $c_t=2c_s\cos(\pi/m(s,t))$ along root-oriented edges gives a positive crystallographic scaling ([[lem-cg-integer-pairings-and-allowed-dihedral-labels]]).

[F4] For a crystallographic scaling, $r_s(a_t)=a_t-a_{ts}a_s$ and $r_s(a_t^\vee)=a_t^\vee-a_{st}a_s^\vee$ ([[lem-cg-integer-pairings-and-allowed-dihedral-labels]]).

[F5] $B(e_s,e_s)=1$ and $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for finite labels ([[def-cg-real-coxeter-form-and-reflection]]).

[F6] For a nonisotropic normal $a$, $r_a(v)=v-2B(v,a)a/B(a,a)$ ([[def-cg-real-coxeter-form-and-reflection]]).

[F7] The canonical reflection homomorphism satisfies $\rho(s)=r_s$ with $r_s=r_{e_s}$ ([[def-cg-canonical-reflection-homomorphism]]).

[F8] The presented Coxeter group is the quotient by the relators $s^2=1$ and $(st)^{m(s,t)}=1$ for finite labels ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F9] Every element of the presented Coxeter group $W$ is the value of a finite word in $S$ ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F10] The standard $A_2$ coordinate root set is $\{\varepsilon_i-\varepsilon_j:i\ne j\}$ in the sum-zero hyperplane ([[ex-classical-root-systems-in-euclidean-coordinates]]).

[F11] The standard $B_2$ coordinate root set is $\{\pm\varepsilon_i\}\cup\{\pm\varepsilon_1\pm\varepsilon_2\}$ ([[ex-classical-root-systems-in-euclidean-coordinates]]).

[F12] The standard $C_2$ coordinate root set is $\{\pm2\varepsilon_i\}\cup\{\pm\varepsilon_1\pm\varepsilon_2\}$ ([[ex-classical-root-systems-in-euclidean-coordinates]]).

[F13] Each displayed coordinate set is a reduced crystallographic Euclidean root system with standard simple roots ([[ex-classical-root-systems-in-euclidean-coordinates]]).

[F14] For a reduced crystallographic root system, $Q$ and $Q^\vee$ are the integer spans of roots and coroots and $P$ is the lattice dual to $Q^\vee$ ([[def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice]]).

[F15] A root $\alpha$ has coroot $\alpha^\vee=2\alpha/(\alpha,\alpha)$ ([[def-coroot-and-dual-root-system]]).

[F16] For a regular vector $v$, the positive roots are those with $(v,\alpha)>0$, and a positive root is simple when it is not a sum of two positive roots ([[def-positive-system-and-base-of-simple-roots]]).

[F17] The Cartan matrix of a based root system uses rows indexed by coroots: $C_{ij}=(\alpha_j,\alpha_i^\vee)$ ([[def-cartan-matrix-of-a-based-root-system]]). Thus it is the transpose of the scaled matrix $A_{ij}=(a_i,a_j^\vee)$ of [F1].

[F18] $\cos(\pi/4)=\sqrt2/2$ ([[lem-viete-finite-cosine-product-and-nested-radicals]], Statement).

## Proof

**Proof technique:** finite reflection-orbit calculations followed by direct coordinate calculations of root, coroot and weight lattices.

1.1 Put $u=st$. The relators in [F8] give $s^2=t^2=1$ and $u^4=1$; also $sus=u^{-1}$. Replacing $t$ by $su$ and moving each $s$ to the right with $s u=u^{-1}s$, every word reduces to $u^k$ or $u^ks$, with $0\le k<4$. Every $W$-element is such a word by [F9], so $W$ has at most eight elements and is finite. In coordinates $x e_s+y e_t$, the form is $x^2-\sqrt2xy+y^2=(x-\frac{\sqrt2}{2}y)^2+\frac12y^2$, so it is positive definite. [F5, F8, F9, algebra, F18]

1.2 The single edge is a tree with label $4$. Rooting first at $s$ and then at $t$, [F3] gives $c=(1,\sqrt2)$ and $c'=(\sqrt2,1)$; both are crystallographic. Their scaled simple roots and coroots are $a_s=e_s$, $a_t=\sqrt2e_t$, $a_s^\vee=2e_s$, $a_t^\vee=a_t$ and $a'_s=\sqrt2e_s$, $a'_t=e_t$, $a_s'^\vee=a'_s$, $a_t'^\vee=2e_t$. Using [F1] and [F5] gives $A=\begin{pmatrix}2&-1\\-2&2\end{pmatrix}$ and $A'=\begin{pmatrix}2&-2\\-1&2\end{pmatrix}=A^T$. [F1, F2, F3, F5, algebra, F18]

1.3 For $c$, [F4] gives $r_s(a_s)=-a_s$, $r_s(a_t)=d:=a_t+2a_s$, $r_t(a_t)=-a_t$, and $r_t(a_s)=p:=a_s+a_t$. By linearity of the reflections, $r_s(p)=p$, $r_t(p)=a_s$, $r_s(d)=a_t$, and $r_t(d)=d$, so $R=\{\pm a_s,\pm a_t,\pm p,\pm d\}$ is stable under $r_s,r_t$. By [F6], these maps are linear and invariant under nonzero rescaling of their normals; since $a_s=c_se_s$ and $a_t=c_te_t$, $r_s=r_{a_s}$ and $r_t=r_{a_t}$. Then [F7] identifies them with $\rho(s),\rho(t)$, and [F9] gives $\Phi_c\subseteq R$. For $w=r_sr_t$ one has $w(a_s)=p$, $w(a_t)=-d$, $w(p)=-a_s$, and $w(d)=a_t$, hence $w^2=-I$ on the basis $(a_s,a_t)$. The four positive listed vectors are $a_s,a_t$, $p=\rho(t)a_s$, and $d=\rho(s)a_t$; applying $w^2$ supplies their negatives. Therefore $\Phi_c=R$. [F1, F2, F4, F6, F7, F9, algebra]

1.4 Put $\beta_1=\varepsilon_1-\varepsilon_2$, $\beta_2=\varepsilon_2$, $\gamma_1=\varepsilon_1-\varepsilon_2$ and $\gamma_2=2\varepsilon_2$. In $B_2$, choose $v=(2,1)$, which pairs nontrivially with every root in [F11]. Its positive roots are $\varepsilon_2$, $\varepsilon_1-\varepsilon_2$, $\varepsilon_1$ and $\varepsilon_1+\varepsilon_2$; the latter two are $\beta_1+\beta_2$ and $\beta_1+2\beta_2$, while $\beta_1,\beta_2$ are not sums of two listed positive roots. Thus they are simple by [F16]. In $C_2$, the same $v$ pairs nontrivially with every root in [F12] and gives positive roots $\varepsilon_1-\varepsilon_2$, $2\varepsilon_2$, $\varepsilon_1+\varepsilon_2$ and $2\varepsilon_1$; the latter two are $\gamma_1+\gamma_2$ and $2\gamma_1+\gamma_2$, while $\gamma_1,\gamma_2$ are not sums of two listed positive roots. Thus $\gamma_1,\gamma_2$ are simple by [F16]. The reflections in the first roots swap the coordinates and those in the second roots negate the second coordinate by [F6]; the second reflection is the same for normals $\varepsilon_2$ and $2\varepsilon_2$. Their product is a quarter-turn of order four. Therefore both coordinate root systems have Coxeter diagram $I_2(4)$. [F6, F11, F12, F13, F16, algebra]

1.5 In $A_2$, put $\alpha_1=\varepsilon_1-\varepsilon_2$ and $\alpha_2=\varepsilon_2-\varepsilon_3$. The vector $v=(1,0,-1)$ pairs nontrivially with every root in [F10], and its positive roots are $\alpha_1,\alpha_2,\alpha_1+\alpha_2$, so [F16] makes $\alpha_1,\alpha_2$ simple. All roots have squared length $2$, so their coroots equal the roots by [F15], and $Q_0=\mathbb Z\alpha_1+\mathbb Z\alpha_2=\{x\in\mathbb Z^3:\sum_i x_i=0\}$. By [F14] the dual weight lattice is $P_0=\{x\in E:(x,\alpha_1),(x,\alpha_2)\in\mathbb Z\}$. If $m=x_1-x_2$ and $n=x_2-x_3$, then $m,n\in\mathbb Z$ and $x=m\omega_1+n\omega_2$, where $\omega_1=(2\varepsilon_1-\varepsilon_2-\varepsilon_3)/3$ and $\omega_2=(\varepsilon_1+\varepsilon_2-2\varepsilon_3)/3$; these vectors are in $P_0$, and every $x\in P_0$ has the same pairings with $\alpha_1,\alpha_2$ as $m\omega_1+n\omega_2$, so equality follows because $\alpha_1,\alpha_2$ span $E$. Thus they form a basis. In this basis $\alpha_1=2\omega_1-\omega_2$ and $\alpha_2=-\omega_1+2\omega_2$, so $P_0/Q_0$ is generated by $[\omega_1]$, with $3[\omega_1]=0$ and $[\omega_1]\ne0$ because $\omega_1\notin Q_0$. Thus $[P(A_2):Q(A_2)]=3$. [F10, F13, F14, F15, F16, algebra]

2.1 For $c'$, [F4] gives $r_s(a'_s)=-a'_s$, $r_s(a'_t)=p':=a'_s+a'_t$, $r_t(a'_t)=-a'_t$, and $r_t(a'_s)=d':=a'_s+2a'_t$. The further images are $r_s(p')=a'_t$, $r_t(p')=p'$, $r_s(d')=d'$, and $r_t(d')=a'_s$, so $R'=\{\pm a'_s,\pm a'_t,\pm p',\pm d'\}$ is stable under both generators. The normal-scaling identity from step 1.3 applies to this scaling as well. For $w'=r_sr_t$, $w'(a'_s)=d'$, $w'(a'_t)=-p'$, $w'(p')=a'_t$ and $w'(d')=-a'_s$, hence $w'^2=-I$. The positive listed vectors are generator roots or their images: $a'_s,a'_t$ are generator roots, $p'=r_s(a'_t)$, and $d'=r_t(a'_s)$. Applying $w'^2$ supplies their negatives. As in 1.3, $\Phi_{c'}=R'$. [F1, F2, F4, F6, F7, F9, step 1.3, algebra]

2.2 In $B_2$, the roots $\varepsilon_1,\varepsilon_2$ generate $Q(B_2)=\mathbb Z^2$. The coroots of $\pm\varepsilon_i$ are $\pm2\varepsilon_i$; the mixed roots are their own coroots. These coroots span exactly $Q^\vee(B_2)=\mathbb Z(\varepsilon_1-\varepsilon_2)+\mathbb Z(2\varepsilon_2)$: both displayed generators occur, and every other coroot is an integer combination of them. In $C_2$, the roots $\varepsilon_1-\varepsilon_2$ and $2\varepsilon_2$ generate $Q(C_2)$, and the remaining roots lie in that span. Its coroot set contains $\varepsilon_1-\varepsilon_2,\varepsilon_2$ and is contained in $\mathbb Z^2$, so $Q^\vee(C_2)=\mathbb Z^2$. Hence $Q^\vee(B_2)=Q(C_2)$ and $Q(B_2)=Q^\vee(C_2)$. [F11, F12, F13, F14, F15, step 1.4, algebra]

2.3 By [F14], the dual of $Q^\vee(B_2)$ is $P(B_2)=\{(x,y):x-y\in\mathbb Z,\ 2y\in\mathbb Z\}$; writing $y=k/2$, $x-y=m$ gives $P(B_2)=\mathbb Z\varepsilon_1+\mathbb Z(\varepsilon_1+\varepsilon_2)/2$. Since $Q(B_2)=\mathbb Z^2$, the quotient is generated by the nontrivial class of $(\varepsilon_1+\varepsilon_2)/2$; it is not in $Q(B_2)$ and its double lies in $Q(B_2)$, so it has order two. For $C_2$, $Q^\vee(C_2)=\mathbb Z^2$, so $P(C_2)=\mathbb Z^2$; the quotient by $Q(C_2)=\mathbb Z(\varepsilon_1-\varepsilon_2)+\mathbb Z(2\varepsilon_2)$ is generated by $[\varepsilon_2]$, which is nonzero because $\varepsilon_2\notin Q(C_2)$ and has order two because $2\varepsilon_2\in Q(C_2)$. With the simple systems of step 1.4, [F15] gives coroots $\beta_1^\vee=\beta_1$, $\beta_2^\vee=2\varepsilon_2$, $\gamma_1^\vee=\gamma_1$, $\gamma_2^\vee=\varepsilon_2$. In the row-coroot convention [F17], $(\beta_2,\beta_1^\vee)=-1$, $(\beta_1,\beta_2^\vee)=-2$, $(\gamma_2,\gamma_1^\vee)=-2$ and $(\gamma_1,\gamma_2^\vee)=-1$, yielding Cartan matrices $\begin{pmatrix}2&-1\\-2&2\end{pmatrix}$ and $\begin{pmatrix}2&-2\\-1&2\end{pmatrix}$, both with determinant $2$. [F11, F12, F13, F14, F15, step 1.4, algebra, F17]

3.1 The map $\psi$ in the Statement is an isometry: the images of $e_s,e_t$ have squared lengths $1,1$ and inner product $-1/\sqrt2=-\sqrt2/2$, which matches [F5]. It sends $a_s,a_t,p,d$ to $(\varepsilon_1-\varepsilon_2)/\sqrt2$, $2\varepsilon_2/\sqrt2$, $(\varepsilon_1+\varepsilon_2)/\sqrt2$, $2\varepsilon_1/\sqrt2$; it sends $a'_s,a'_t,p',d'$ to $\varepsilon_1-\varepsilon_2$, $\varepsilon_2$, $\varepsilon_1$, $\varepsilon_1+\varepsilon_2$. By [F11,F12], these are exactly $\frac1{\sqrt2}\Phi(C_2)$ and $\Phi(B_2)$; [F13] states that these coordinate root sets are reduced crystallographic systems. Positive scaling preserves those axioms: finiteness, spanning and reducedness are preserved, reflection normal lines are unchanged, and Cartan integers are unchanged by a common scalar. Thus both $\Phi_c$ and $\Phi_{c'}$ are reduced crystallographic root systems. The coroots of $\pm2\varepsilon_i$ in $C_2$ are $\pm\varepsilon_i$, while mixed roots have squared length $2$ and are their own coroots; hence $\Phi(C_2)^\vee=\Phi(B_2)$. Since $(\lambda\Phi)^\vee=\lambda^{-1}\Phi^\vee$ for $\lambda>0$ by [F15], $\psi(\Phi_c^\vee)=\sqrt2\Phi(B_2)$ and $\psi(\Phi_{c'})=\frac1{\sqrt2}\psi(\Phi_c^\vee)$. [F5, F11, F12, F13, F15, step 1.3, step 2.1, algebra, F18]

4.1 All calculations use the fixed two-generator data and explicit finite coordinate root sets. No Choice is used. [step 1.1, step 1.2, step 1.3, step 2.1, step 3.1, step 1.4, step 2.2, step 2.3, step 1.5, algebra] ∎
