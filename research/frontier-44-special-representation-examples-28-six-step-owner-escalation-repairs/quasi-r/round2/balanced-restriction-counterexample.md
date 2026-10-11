# A cyclic raw-basis U-orbit need not inherit a balanced triple

This is a genuine finite-dimensional quantum-module counterexample to a proposed restriction lemma, not to tensor globalization. It is an independently verified obstruction in final logical round2.

Work in quantum sl2 with $A=\mathbb Z[q,q^{-1}]$, $p=[2]=q+q^{-1}$, and highest string modules $V(2)$ and $V(4)$. Write $u_r=F^{(r)}u_0$ for $0\le r\le2$ and $v_s=F^{(s)}v_0$ for $0\le s\le4$. Their weights are $2-2r$ and $4-2s$. The standard bars fix these divided vectors; the standard integral and zero/infinity charts have these bases. The actual rank-one supplier gives the operator formulas, and iteration gives

$$F^{(k)}x_r=\binom{r+k}{k}_q x_{r+k},\qquad E^{(k)}x_r=\binom{n-r+k}{k}_q x_{r-k}$$

in $V(n)$, with zero outside the string. The Gaussian coefficients belong to $A$. Kashiwara operators shift the divided positions by one. Thus each standard string satisfies all four based axioms directly.

## The modified based lattice

On the field direct sum $M=V(2)\oplus V(4)$ define

$$c_0=u_0+v_1/p,\qquad c_1=u_1,\qquad c_2=u_2-v_3/p,$$

and retain all $v_s$. The eight vectors $c_0,c_1,c_2,v_0,\ldots,v_4$ form a homogeneous field basis, since this is an invertible triangular shear of the standard direct-sum basis. Let $M_A$ be their free $A$-span.

To verify $U_A$-stability, define the integer-coordinate lift $T:V_A(2)\to V_A(4)$ by $T(u_0)=v_1$, $T(u_1)=0$, $T(u_2)=-v_3$. Modulo $p$, one has $[2]=[4]=0$ and $[3]=-1$. The following verifies every divided E/F action; higher powers vanish by the finite strings.

- For $u_0$: $Fv_1=[2]v_2=0$, $F^{(2)}v_1=[3]v_3=-v_3$, $F^{(3)}v_1=[4]v_4=0$ modulo $p$, matching the images of $F^{(k)}u_0$; and $Ev_1=[4]v_0=0$, while $E^{(k)}v_1=0$ for $k\ge2$.
- For $u_1$: its image is zero; $Fu_1=[2]u_2$ and $Eu_1=[2]u_0$ map to zero modulo $p$, and higher divided powers on this position vanish.
- For $u_2$: $F(-v_3)=-[4]v_4=0$ and higher powers vanish; $E(-v_3)=-[2]v_2=0$, $E^{(2)}(-v_3)=-[3]v_1=v_1$, and $E^{(3)}(-v_3)=-[4]v_0=0$, matching the images of $E^{(k)}u_2$.

The nonzero images have the same chosen weights as their sources. Therefore every toral generator, including toral quantum binomials, acts by the same scalar on each nonzero matched image. This proves that $T$ modulo $p$ is $U_A$-linear on the complete displayed basis. Consequently, for every $a\in U_A$, $(aT-Ta)V_A(2)\subseteq pV_A(4)$. If $au_r=\sum_j a_j u_j$, then

$$a c_r=\sum_j a_j c_j+(aT-Ta)u_r/p,$$

which belongs to $M_A$. The target summand is standard integral. Hence $M_A$ is $U_A$-stable.

All modified basis vectors are bar fixed since $\bar p=p$. The associated bar is the standard compatible module bar. Moreover

$$1/p=q/(1+q^2)\in qA_0,\qquad 1/p=q^{-1}/(1+q^{-2})\in q^{-1}A_\infty.$$

The shear and its inverse therefore preserve both standard charts and are the identity on their respective residues. The zero crystal lattice and basis are exactly the standard direct-sum crystal lattice and basis. Field integrability is unchanged. Thus the modified basis satisfies every one of the four actual based-module axioms, rather than merely being a convenient free lattice.

## The finite cyclic raw orbit and its restricted triple

Take the raw basis vector $c_1=u_1$. Its orbit is

$$W=U c_1=V(2)\subset M,$$

because $Eu_1=p u_0$ and $Fu_1=p u_2$, with $p$ invertible in the field. This is finite dimensional, graded and bar stable.

An element of $M_A$ lies in $W$ exactly when its $v$-coordinates vanish. Expressing its field coordinates in the modified basis shows that the coefficients of $c_0$ and $c_2$ must lie in $pA$, while the coefficient of $c_1$ is arbitrary. Hence

$$M_A\cap W=A\,p u_0\oplus A\,u_1\oplus A\,p u_2.$$

The zero and infinity chart intersections with $W$ are the standard charts $A_0u_0\oplus A_0u_1\oplus A_0u_2$ and $A_\infty u_0\oplus A_\infty u_1\oplus A_\infty u_2$.

At the top weight, the simultaneous balanced intersection is zero:

$$pA\cap A_0\cap A_\infty=0.$$

Indeed a Laurent polynomial regular at both zero and infinity is an integer constant, and no nonzero integer constant belongs to $pA$. For the latter, a nonzero Laurent polynomial $f$ with least/greatest exponents $m,M$ makes $pf$ have extreme exponents $m-1,M+1$, so it cannot be a nonzero constant. Nevertheless the integral residue at the top is nonzero, because

$$q p u_0=(1+q^2)u_0\in(M_A\cap W)\cap L_0,$$

and its residue is $u_0\ne0$. Thus the restriction's balanced-intersection-to-integral-residue map is not onto. Its triple is unbalanced.

This disproves the assertion that intersecting the actual integral and crystal charts with the finite bar-stable cyclic U-orbit of a raw basis vector automatically gives a balanced finite carrier. Tensoring with the based unit already leaves this obstruction unchanged; adding a quasi-R-stable finite field tensor subspace does not supply the missing restriction theorem. It does not disprove global tensor construction for the whole $M$, which is finite dimensional and based.

All calculations use the exact rank-one string and Gaussian interfaces already read in round1. No extra source URL or unsupported higher-rank theorem is invoked.

## A raw tensor seed whose corrected lift must leave the finite cyclic tensor subspace

Let $N=V(1)$ with standard divided basis $w_0,w_1$, and take

$$e=c_1\otimes w_0=u_1\otimes w_0,\qquad W_{\mathrm{tensor}}=(Uc_1)\otimes(Uw_0)=V(2)\otimes V(1).$$

This subspace is finite dimensional and stable under the tensor bar: both factor cyclic submodules are bar stable, and every quasi-R term is a positive/negative algebra action preserving them. The degree-one library component is $(q-q^{-1})E\otimes F$, and every higher component vanishes on $V(1)$. Hence

$$\Psi(e)=e+(q-q^{-1})p\,u_0\otimes w_1.$$

Both raw vectors $c_0\otimes w_1$ and $v_1\otimes w_1$ are tensor-bar fixed, because $Fw_1=0$. Rewriting the off-diagonal term in this raw basis gives coefficients $(q^2-q^{-2})$ and $-(q-q^{-1})$. Their unique positive-q correction parts yield

$$g=e+q^2c_0\otimes w_1-qv_1\otimes w_1=e+q^2u_0\otimes w_1-(1/p)v_1\otimes w_1.$$

Thus $g$ is bar fixed, integral in the actual raw tensor lattice, and congruent to $e$ modulo $q$ with strict higher-tuple corrections. It is the valid whole-module global lift supplied by the finite tensor construction. Its nonzero $V(4)$ component shows $g\notin W_{\mathrm{tensor}}$.

There is no alternative corrected lift for this seed inside the finite cyclic tensor subspace. In total weight $1$, that subspace has exactly the two label tuples of $u_1\otimes w_0$ and $u_0\otimes w_1$. A normalized strict-transfer lift there would be $g'=e+x(q)u_0\otimes w_1$. In actual raw coordinates its correction is

$$x(q)c_0\otimes w_1-(x(q)/p)v_1\otimes w_1.$$

Consequently the promised positive polynomial corrections require both $x$ and $-x/p$ in $q\mathbb Z[q]$. Fixedness requires

$$x-\bar x=q^2-q^{-2}.$$

The unique solution of this equation in $q\mathbb Z[q]$ is $x=q^2$, but $q^2/p\notin q\mathbb Z[q]$. This is impossible. Even permitting a correction to the diagonal coefficient does not help: its bar-invariant coefficient in $1+q\mathbb Z[q]$ must be exactly $1$.

The restriction route therefore fails for the requested individual raw seed, not merely for an unrelated residue of the restricted triple. The whole finite-dimensional based tensor product has the correct lift; it must use a larger based envelope than the seed's two finite cyclic factor orbits. This still does not decide whether such larger envelopes can always be chosen finite in the unrestricted infinite module case.
