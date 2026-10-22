# A constructed algebraic K3 seed and the remaining point count

Continuation: the later note k3-isotropic-moduli-and-point-evaluation.md now supplies the isotropic algebraic moduli and its universal-adjoint point integral two. The historical boundary below correctly distinguishes it from the spherical point; its previously missing algebraic evaluation is now fulfilled there. The ASD/Hermitian–Yang–Mills, determinant-orientation and quotient-gluing bridges remain owed.

This note continues the actual enumerative-seed construction. It does not check repaired suppliers, supply a review, or assert a Kobayashi–Hitchin theorem. The ordinary-end/insertion author has saved a separate proposed analytic extension at `../instanton-cube/thm-odd-admissible-ordinary-cobordisms-support-insertion-counts.md`; that new proposal does not itself identify the present holomorphic moduli with ASD moduli. The inherited review counter is unchanged.

## An explicit nonempty regular algebraic point

Take an elliptic complex K3 surface $X$ with section $\sigma$ and fiber $F$, with

$$\operatorname{Pic}(X)=\mathbb Z\sigma\oplus\mathbb Z F,\qquad \sigma^2=-2,\quad \sigma\cdot F=1,\quad F^2=0.$$

Fix an ample class proportional to $H=\sigma+tF$ with $3<t<4$; for example the integral class $2\sigma+7F$ is proportional to the value $t=7/2$. The existence of a K3 with these Picard and polarization properties is a separate geometric input to this construction. The calculations in this section use the K3 line-bundle Riemann–Roch formula $\chi(\mathcal O(D))=2+D^2/2$, Serre duality with $K_X=\mathcal O_X$, and the vector-bundle Riemann–Roch pairing. These ordinary complex-geometric theorems are stated here to make the conditional extent explicit; they are not inferred from instanton trajectory results.

First every nonzero effective divisor has class $c\sigma+dF$ with $c,d\ge0$. For an irreducible component $C$, the fiber is nef, so $c=C\cdot F\ge0$. If $C\ne\sigma$, positivity of intersections of distinct complex curves gives $C\cdot\sigma=d-2c\ge0$, hence $d\ge0$. For $C=\sigma$ this is immediate. Add the component classes with their multiplicities. In particular an effective class has positive $H$ degree, and a class with negative pairing with $F$ cannot be effective.

Put $L=\mathcal O_X(\sigma-F)$ and $M=\mathcal O_X(F)$. The extension space is

$$\operatorname{Ext}^1(M,L)=H^1(X,\mathcal O_X(\sigma-2F)).$$

Write $D=\sigma-2F$. Its square is $-6$, so $\chi(\mathcal O(D))=-1$. It has no section since $D\cdot H=t-4<0$. Its dual has no section either, since $(-D)\cdot F=-1$. By Serre duality $H^2(\mathcal O(D))=0$. Thus $h^1(\mathcal O(D))=1$. Choose any nonzero extension class and form

$$0\longrightarrow L\longrightarrow E\longrightarrow M\longrightarrow0.$$

This is a locally free rank-two holomorphic bundle: locally a line-bundle extension splits, so its middle term is locally free. Rescaling either line identifies any two nonzero classes in this one-dimensional extension space. Its Chern data are

$$c_1(E)=\sigma,\qquad c_2(E)=(\sigma-F)\cdot F=1.$$

Here is a complete slope-stability check. A destabilizing saturated rank-one subsheaf extends across isolated points to a line bundle mapping into $E$, without lowering its slope; this uses the local holomorphic extension of a map into a locally free sheaf across complex codimension two. Let that line be $N$. If $N\to E\to M$ is zero, then $N\to L$ is nonzero. Thus $L-N$ is effective and $\deg_H N\le\deg_H L=t-3<(t-2)/2=\mu_H(E)$. If its composite to $M$ is nonzero, put $D'=M-N$, an effective divisor or zero. Write $D'=c\sigma+dF$ with $c,d\ge0$. Then

$$\deg_H N=1-c(t-2)-d.$$

If $d\ge1$ this is at most zero; if $c\ge1$ it is at most $3-t<0$. Both are less than $\mu_H(E)>0$. The only remaining possibility is $D'=0$, so $N=M$. But a map $M\to E$ with nonzero composite to $M$ would split the extension, contrary to its choice; a map with zero composite would lie in $H^0(LM^{-1})=0$. This eliminates the last possibility and proves stability.

The Mukai vector is $v(E)=(2,\sigma,0)$ and has square $-2$. For any two stable torsion-free sheaves with this vector, Riemann–Roch gives $\chi(E_1,E_2)=2$. Distinct stable sheaves with the same slope have no nonzero homomorphism in either direction. Indeed a rank-one image would have slope greater than the source slope, as a proper quotient of a stable rank-two sheaf, and smaller than the target slope, as a proper subsheaf of another stable rank-two sheaf. A rank-two map between these equal determinants has a nonzero constant determinant, so its cokernel is supported at finitely many points. Equality of the Chern characters makes that cokernel have length zero; hence the map is an isomorphism. Serre duality then also kills $\operatorname{Ext}^2(E_1,E_2)$ for nonisomorphic sheaves. Their Euler characteristic would be $-\dim\operatorname{Ext}^1\le0$, a contradiction. Therefore every stable sheaf with this vector is the bundle $E$ just constructed.

For $E$ itself, stability gives $\operatorname{Hom}(E,E)=\mathbb C$ and Serre duality gives $\operatorname{Ext}^2(E,E)=\mathbb C$. The Euler characteristic two forces $\operatorname{Ext}^1(E,E)=0$. The trace on $\operatorname{Ext}^2$ is an isomorphism, since the scalar inclusion followed by trace is multiplication by rank two. Thus its trace-free obstruction space is zero as well. The fixed-determinant algebraic moduli is consequently a single reduced regular complex point, not just a set-theoretic point with an unchecked obstruction.

The same calculation excludes lower-Chern stable algebraic bubbles. A stable rank-two sheaf with $c_1=\sigma,c_2=1-\ell$, $\ell>0$, would have Mukai vector $(2,\sigma,\ell)$, self Euler characteristic $2+4\ell$, but stability and duality would force $\dim\operatorname{Ext}^1=-4\ell$. It cannot exist. With the chosen integral polarization $2\sigma+7F$, a rank-one slope is integral while the rank-two slope is $3/2$, so there is also no equal-slope rank-one boundary. This is an algebraic compactness obstruction, not an assertion that an arbitrary Yang–Mills minimizing sequence converges to this point.

## Why the ASD count has not yet been obtained

An ASD connection compatible with a Kähler metric defines a stable holomorphic bundle in this topological sector only after the precise Hermitian–Yang–Mills correspondence has been proved. The converse existence of the required Hermitian metric is the essential part here: it does not follow from vanishing of $\operatorname{Ext}^1$, from the ASD Fredholm index, or from the formal curvature decomposition. The complex orientation must also be compared with the actual Donaldson homology/determinant orientation used by the relative pairing. If those analytic and orientation constructions are supplied, the single regular complex point above gives a signed nonzero degree-zero ASD invariant. At present this note establishes the algebraic point and its deformation calculation only.

Even that degree-zero ASD count would not compute the torus point operator. In the chosen class $c_1=\sigma$, an index-zero ASD bundle has $p_1(\operatorname{ad}E)=c_1^2-4c_2=-6$. A degree-four point insertion instead needs real index four, hence $p_1=-8$ on K3. It cannot occur with this same determinant, because $-2-4c_2=-8$ has no integral solution. It occurs in the other determinant class $c_1=\sigma+F$, whose square is zero, with $c_2=2$. Its Mukai vector is

$$v=(2,\sigma+F,0),\qquad v^2=0,$$

and its algebraic moduli has expected complex dimension two. The required point evaluation is an integral of the actual universal adjoint class on this four-real-dimensional moduli, with the same relative orientation. The uniqueness proof for a spherical vector cannot calculate it. This explains precisely why the nonzero spherical point cannot be substituted for the desired ratio $D^{(w,\Sigma)}(x)/D^{(w,\Sigma)}(1)=-2$.

In the ordinary torus Floer description, the same remaining datum is the degree-four cylinder count connecting the two retained flat sectors, with one point insertion. The new degree-four quotient bridge determines which sectors it connects. It does not determine its coefficient. A derivation of $\pm2$ must either calculate this minimum half-charge cylinder moduli and its insertion degree, or supply the actual K3 isotropic-moduli evaluation and the cap pairing. The accepted singular planar Frobenius handle coefficient two has different geometric input and supplies neither evaluation without an additional proved identification.

The full product eigenspace and KHI original therefore remain held. This is a constructed algebraic nonzero seed with an exact ASD/insertion boundary, not an accepted local Donaldson invariant or an extra review round.
