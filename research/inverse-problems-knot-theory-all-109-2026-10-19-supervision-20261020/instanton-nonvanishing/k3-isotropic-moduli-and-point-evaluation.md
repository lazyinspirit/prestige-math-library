# Constructed K3 isotropic moduli and point-class evaluation

This continues the spherical-seed note. Its previously uncomputed **algebraic** degree-four evaluation is supplied below. Its ASD/Hermitian–Yang–Mills and orientation bridges remain unproved. No repaired supplier is checked, no canonical source is changed, and no final review cycle is consumed.

Use precisely its elliptic K3, Picard lattice and ample polarization:

$$\operatorname{Pic}(X)=\mathbb Z\sigma\oplus\mathbb ZF,\quad \sigma^2=-2,\quad \sigma F=1,\quad F^2=0,\quad H=\sigma+tF,\quad 3<t<4.$$

Retain the explicit complex-geometric inputs: K3 Riemann–Roch, Serre duality, and the specified K3/polarization. These are not inferred from instanton trajectory results. The preceding effective-cone argument says every effective class is $c\sigma+dF$ with $c,d\ge0$.

## The actual stable bundles

Put $D=\sigma-F$. Neither $D$ nor $-D$ is effective. Since $D^2=-4$, both $\mathcal O(D)$ and $\mathcal O(-D)$ are acyclic: their Euler characteristic is zero, their $H^0$ vanish, and duality kills $H^2$. For every $p\in X$ the ideal sequence gives $H^1(I_p(D))=\mathbb C$, with its other cohomology zero. Duality gives a one-dimensional $\operatorname{Ext}^1(I_p(\sigma),\mathcal O(F))$. Its nonzero class defines

$$0\longrightarrow\mathcal O(F)\longrightarrow E_p\longrightarrow I_p(\sigma)\longrightarrow0.$$

The middle term is locally free even at $p$. The local-to-global Ext sequence identifies the class with the nonzero local class, since the adjacent global cohomology of $\mathcal O(-D)$ vanishes. In coordinates $u,v$ at $p$, a generator is the Koszul extension

$$0\longrightarrow\mathcal O\xrightarrow{(-v,u)}\mathcal O^2\xrightarrow{(u,v)}(u,v)\longrightarrow0.$$

Thus the nonzero local class has a free middle term. Its Chern classes are $c_1(E_p)=\sigma+F$, $c_2(E_p)=1+\sigma F=2$, and its Mukai vector $(2,\sigma+F,0)$ has square zero.

Here is the complete stability argument. A line $N$ mapping into $E_p$ with zero composite to $I_p(\sigma)$ has degree at most $1<\mu_H(E_p)=(t-1)/2$. Otherwise $\sigma-N$ is effective. If it is nonzero, write it $c\sigma+dF$ with $c,d\ge0$. For $c\ge1$ its degree is at most zero; for $d\ge1$ its degree is at most $t-3<(t-1)/2$. If it is zero, a map $\mathcal O(\sigma)\to I_p(\sigma)$ would give a nonzero section of $I_p$, which is impossible. Destabilizing rank-one subsheaves can be replaced by their line-bundle reflexive hulls when mapping into the locally free $E_p$: such maps extend across complex codimension two. Hence $E_p$ is stable.

Conversely let $E$ be any stable torsion-free rank-two sheaf with these Chern classes. Riemann–Roch gives $\chi(\mathcal O(F),E)=1$. There is no map $E\to\mathcal O(F)$: its rank-one image would be a proper quotient of a stable sheaf and have slope greater than $\mu_H(E)>1$, but has degree at most one. Duality therefore kills $\operatorname{Ext}^2(\mathcal O(F),E)$, so there is a nonzero map $\mathcal O(F)\to E$. A divisorial enlargement of its saturation to $\mathcal O(F+D')$ for nonzero effective $D'$ would have degree at least two, greater than $\mu_H(E)<3/2$. No enlargement only at points is possible: a rank-one torsion-free sheaf containing the line $\mathcal O(F)$ with the same reflexive hull equals it. Its quotient is consequently $I_Z(\sigma)$; the Chern formula gives $\operatorname{length}Z=1$. Thus $Z=\{p\}$. The extension cannot split, since $I_p(\sigma)$ has slope $t-2>(t-1)/2$. Its one-dimensional extension space identifies $E$ with the constructed $E_p$. In particular no singular stable-sheaf boundary is omitted.

## An actual universal bundle

On $X_x\times X_p$ let $\Delta$ be the diagonal, with projections $\pi_x,\pi_p$, and set

$$L=\pi_x^*\mathcal O(F)\otimes\pi_p^*\mathcal O(D),\qquad M=\pi_x^*\mathcal O(\sigma).$$

There is a unique nonzero extension, up to scaling,

$$0\longrightarrow L\longrightarrow\mathcal U\longrightarrow I_\Delta\otimes M\longrightarrow0.$$

Indeed $LM^{-1}=\pi_x^*\mathcal O(-D)\otimes\pi_p^*\mathcal O(D)$ is acyclic by the proved vanishing and product cochain decomposition. Its sheaf of local extensions is

$$\mathcal Ext^1(I_\Delta\otimes M,L)=\det(N_{\Delta/(X\times X)})\otimes(LM^{-1})|_\Delta=\mathcal O_\Delta.$$

Here $N_\Delta=TX$ has trivial determinant and the two $D$ factors cancel on the diagonal. Local-to-global Ext gives the global extension space $H^0(\mathcal O_\Delta)=\mathbb C$. A nonzero class is a unit everywhere on $\Delta$. The two-coordinate Koszul model makes $\mathcal U$ locally free there; elsewhere its terms are line bundles locally. Its restriction to $X_x\times\{p\}$ is $E_p$, up to a scalar fiber of $\mathcal O(D)$ at $p$.

This identifies the algebraic moduli with $X$ including its family structure. Applying $\operatorname{Hom}(\mathcal O(F),-)$ to the extension shows $\dim\operatorname{Hom}(\mathcal O(F),E_p)=1$, since $H^0(I_p(D))=0$; the Euler calculation gives first Ext zero. In families this Hom space is a line bundle and its evaluation recovers the quotient $I_p(\sigma)$ and its unique length-one subscheme. It gives the inverse family map to $X$. Also the fixed-determinant obstruction is trace-free second Ext, which vanishes: stability and duality make second Ext one-dimensional and trace an isomorphism. Self Euler characteristic zero then makes first Ext two-dimensional. Thus this is a genuine smooth complex two-dimensional moduli, not a parameter family of unchecked degree.

## The universal adjoint insertion has degree two

Fix $x_0\in X_x$. The diagonal meets $\{x_0\}\times X_p$ transversely, so restriction has no hidden Tor term. Its exact $K$-class is

$$[\mathcal U_{x_0}]=[\mathcal O(D)]+[\mathcal O]-[\mathcal O_{x_0}].$$

It has rank two, $c_1=D$, and $\operatorname{ch}_2=D^2/2-[x_0]=-3[x_0]$. Hence $c_2=[x_0]$, and

$$p_1(\operatorname{ad}\mathcal U_{x_0})=c_1^2-4c_2=-8[x_0],\qquad \int_X-\tfrac14p_1(\operatorname{ad}\mathcal U_{x_0})=2.$$

Twisting the universal bundle by a parameter line changes neither its adjoint bundle nor the answer. This proves the number two by a diagonal/Koszul/Chern calculation on the constructed moduli, not by the singular Frobenius handle coefficient or by the mere existence of a four-dimensional parameter family.

## Exact remaining ASD and orientation bridge

Both algebraic sectors are now constructed: the spherical moduli is one reduced regular point with $c_1=\sigma,c_2=1$; the isotropic moduli is $X$ with $c_1=\sigma+F,c_2=2$ and point-class integral two. Neither is yet identified with an ASD invariant. The missing analytic operation is the actual Hermitian–Yang–Mills existence/uniqueness correspondence for these stable bundles, with compactifications and universal adjoint bundles identified with the ordinary ASD problem. The formal Kähler curvature decomposition describes a solution but does not prove existence of its Hermitian metric.

Orientation is a concrete remaining issue. Complex orientations give $+1,+2$ in these sectors, while the source's Donaldson convention gives $-1,+2$. An actual determinant/homology-orientation comparison must derive their relative sign, distinguishing $c_1^2=-2$ and $c_1^2=0$. No remembered sign formula is adopted. The insertion author has the exact classes and has been asked to address the sign in its proposed ordinary theory.

The quotient cap gluing must also really identify its two determinant extensions with $D^w+D^{w+F}$ and retain normalization. Once those analytic, orientation and gluing constructions are supplied, these geometric values give the torus quotient point eigenvalue $2/(-1)=-2$. Its degree-four grading rotation gives the required $+2$ sector by the already-authored finite operation. Until then the ratio is not an ASD/Floer computation. In cylinder language the remaining datum is the minimum half-charge $\mathbb R\times T^3$ point-insertion count between the two retained flat sectors.

The algebraic isotropic-moduli evaluation is now supplied at the stated complex-geometric extent. The original product/KHI theorem remains held on the explicit analytic/orientation/gluing bridges. No helper-only acceptance or extra review round is claimed.
