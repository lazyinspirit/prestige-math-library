---
dependency_level: 6
id: lem-quantitative-malcev-metric-and-subgroup-comparisons
kind: lemma
title: Quantitative Mal’cev metric and subgroup comparisons
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-quantitative-malcev-polynomial-coordinate-calculus
  - lem-rational-subgroups-have-quantitatively-adapted-malcev-bases
  - lem-finite-nilpotent-exponential-and-bch-calculus
  - def-malcev-basis-and-rationality
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ben Green and Terence Tao, The quantitative behaviour of polynomial orbits on nilmanifolds
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf
      locator: Lemmas A.4–A.6 and A.14–A.17, printed pp. 528–532 and 536–538
---

## Statement

Let $G/\Gamma$ have a supplied $Q$-rational Mal’cev basis $X$, $Q\ge2$, dimension $m$ and nilpotence step at most $s$. Write $\psi=\psi_X$, $d_G=d_X^G$ for its coordinate-chain metric, and $d$ for the quotient metric. There is $C=C(m,s)$ such that, for $R\ge1$,

$$|\psi(z)|\le Q^C(1+d_G(z,e))^C d_G(z,e),\qquad d_G(z,e)\le|\psi(z)|,$$

$$d_G(x,y)\le Q^C(1+R)^C|\psi(x)-\psi(y)|\quad\text{if }|\psi(x)|,|\psi(y)|\le R,$$

$$|\psi(x)-\psi(y)|\le Q^C(1+R)^C d_G(x,y)\quad\text{if }d_G(x,e),d_G(y,e)\le R.$$

Rational bounded-height basis changes satisfy the corresponding two-point bounds. If $|\psi(g)|,|\psi(x)|,|\psi(y)|\le R$, then $d_G(gx,gy)\le Q^C(1+R)^C d_G(x,y)$. Uniformly on the nilmanifold, $|\psi(g)|\le R$ implies $d(gx\Gamma,gy\Gamma)\le Q^C(1+R)^C d(x\Gamma,y\Gamma)$.

Every $g$ has a unique decomposition $g=\{g\}[g]$ with $\psi(\{g\})\in[0,1)^m$ and $[g]\in\Gamma$. The quotient-distance infimum over lattice translates is attained, and the quotient diameter is at most $Q^C$. If $H=\exp\mathfrak h$ has a Lie-algebra basis of rational combinations of $X$ with coefficient heights at most $Q$, and $Y$ is a nested basis with coefficient heights at most $Q$ in $X$, the group metrics compare by $Q^C(1+R)^C$ on bounded coordinate sets: $d_Y\le Q^C(1+R)^C d_G$ for $X$ coordinates bounded by $R$, and the reverse for $Y$ coordinates bounded by $R$. If $Y$ is an adapted Mal’cev basis for $H/\Lambda$, $\Lambda=H\cap\Gamma$, its quotient metric and the restricted ambient quotient metric compare in both directions by $Q^C$. Parameters are enlarged by bounded powers when the bases have heights $Q^{O(1)}$.

For a central tail $Z=\exp\mathfrak z$ of dimension $r$, the truncated basis is a Mal’cev basis for $(G/Z)/p(\Gamma)$, with the projected filtration, and its group and quotient metrics satisfy

$$\bar d_G(p(x),p(y))=\inf_{z\in Z}d_G(x,yz),\qquad \bar d(p(x)p(\Gamma),p(y)p(\Gamma))=\inf_{\gamma\in\Gamma,\ z\in Z}d_G(x,y\gamma z).$$

The projection is $1$-Lipschitz. A $Z$-invariant function descends with the same Lipschitz norm, using sup norm plus Lipschitz seminorm. A central subalgebra with a basis of rational combinations of $X$ of coefficient heights at most $Q$ can first be made such a tail by a bounded rational adapted basis change; the resulting comparisons have constants $Q^{O_{m,s,d}(1)}$ when the supplied filtration has degree $d$.

Lebesgue measure in second coordinates gives a bi-invariant locally finite measure on $G$. Pushing Lebesgue probability of $[0,1)^m$ to $G/\Gamma$ gives its unique $G$-invariant probability. This probability pushes forward to the corresponding invariant probability on every central quotient above. These assertions apply also to rational subgroups with their adapted bases, without importing a Haar-measure existence theorem or a choice principle.

## Statement references

[Green–Tao, A.4–A.6 and A.14–A.17](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf)

## Facts & Assumptions

**Given:** The group, bases and metrics in the statement. Constants $C$ may increase finitely many times and depend only on the fixed dimensions, step, and any displayed filtration degree.

[F1] Coordinate-chain and quotient metrics and the supplied basis and lattice use [[def-malcev-basis-and-rationality]].

[F2] Bounded rational triangular coordinate multiplication, inversion, basis conversion, common denominators and finite rational linear algebra are proved in [[lem-quantitative-malcev-polynomial-coordinate-calculus]].

[F3] Rational subalgebras and rational filtrations admit the bounded adapted Mal’cev bases and lattice intersections proved in [[lem-rational-subgroups-have-quantitatively-adapted-malcev-bases]].

[F4] Global exponential coordinates, exponential subgroups, intersections and quotient BCH laws are supplied by [[lem-finite-nilpotent-exponential-and-bch-calculus]].

## Proof

1.1 First obtain a word estimate independent of the number of factors. Suppose $b_i=|\psi(g_i)|$ and $\sum_i b_i\le T$. In a product formed one factor at a time, the first coordinate of every partial product is bounded by $T$. For component $k$, triangular multiplication changes it by the new kth coordinate plus $T_k$ of the lower coordinates. Every monomial of $T_k$ contains a new-increment factor by [F2]. If the earlier coordinates of all partial products are bounded by $B=Q^C(1+T)^CT$, each such correction is therefore bounded by $Q^{C'}(1+T)^{C'}b_i$: retain one increment factor and bound all remaining factors in the polynomial-size box. Summing over $i$ proves the same form of bound for component $k$. Induction over $k$ gives $|\psi(g_1\cdots g_n)|\le Q^C(1+T)^CT$, uniformly for every partial product and every $n$. Prepending rather than appending factors gives the identical argument, since each correction still has a factor from the new increment. [F2, algebra]

1.2 In increasing coordinate order multiply $g$ on the right by $\exp(-\lfloor t_i\rfloor X_i)$, recalculating $t_i$ after each previous multiplication. Triangular multiplication preserves all earlier coordinates and replaces the current coordinate by its fractional part. After $m$ steps $g\delta\in E_X([0,1)^m)$ with $\delta\in\Gamma$, so $\{g\}=g\delta$ and $[g]=\delta^{-1}$ give the required decomposition. If $x$ and $x\gamma$ both have coordinates in $[0,1)^m$, choose the first nonzero coordinate of the integral vector $\psi(\gamma)$. All preceding corrections vanish because they contain a coordinate from that earlier zero increment, so this coordinate differs by a nonzero integer, impossible in $[0,1)$. Hence the decomposition is unique. [F1, F2, algebra]

2.1 For a chain $x_0,\ldots,x_n$ of total cost $S\le R$, set $g_i=x_i x_{i-1}^{-1}$. Let $\kappa_i$ be the smaller of $|\psi(g_i)|$ and $|\psi(g_i^{-1})|$. Polynomial inversion with zero constant term gives $|\psi(g_i)|\le Q^C(1+R)^C\kappa_i$ in either case. Apply step 1.1 to $x_nx_0^{-1}=g_n\cdots g_1$ to obtain $|\psi(x_nx_0^{-1})|\le Q^C(1+R)^C S$. Taking infima over chains whose cost is arbitrarily close to $d_G$ yields $|\psi(z)|\le Q^C(1+d_G(z,e))^Cd_G(z,e)$. This is a bound for every positive approximation error and does not choose a sequence of approximating chains. A one-edge chain gives $d_G(z,e)\le|\psi(z)|$. The chain definition gives symmetry, right invariance and the triangle inequality; the lower coordinate estimate proves nondegeneracy. [F1, F2, step 1.1, algebra]

2.2 Let $dg$ be ordinary Lebesgue measure in second coordinates. For fixed $g$, left and right multiplication have kth coordinate $t_k+\text{constant}+P_k(t_{<k})$, so their Jacobians are triangular with diagonal $1$. Inversion has diagonal $-1$. The change-of-variables formula proves that $dg$ is invariant under left translation, right translation and inversion, positive on open sets and finite on compact sets. Let $D=E_X([0,1)^m)$ and let $\mu$ be the probability obtained by pushing cube Lebesgue measure to $G/\Gamma$. Step 1.2 partitions $G$ disjointly as the sets $D\gamma$. For fixed $g$, only finitely many $D\gamma$ meet $gD$: an intersection gives $\gamma=d^{-1}gd'$ with $d,d'\in D$, whose coordinates are bounded by the coordinate polynomials, leaving finitely many integral vectors. Partition $gD$ by those intersections and move each piece on the right by $\gamma^{-1}$ into $D$. The moved pieces partition $D$, since both domains contain exactly one representative of each coset. Right invariance of $dg$ and periodicity of a quotient function identify its integral over $gD$ with its integral over $D$. Left invariance of $dg$ then proves $\int F(gx)\,d\mu(x)=\int F(x)\,d\mu(x)$ for bounded measurable $F$. This constructs the invariant probability directly. [F2, step 1.2, algebra]

3.1 If $|\psi(x)|,|\psi(y)|\le R$, the polynomial $\psi(xy^{-1})$ vanishes when the two coordinate arguments coincide. Subtracting its monomials one variable at a time expresses it as a sum of coordinate differences times bounded-degree, bounded-height polynomials. The one-edge bound then gives the stated upper two-point estimate. Conversely, if $d_G(x,e),d_G(y,e)\le R$, step 2.1 bounds their coordinates by $Q^C(1+R)^C$. Put $z=xy^{-1}$, so $d_G(z,e)=d_G(x,y)\le2R$. The polynomial $\psi(zy)-\psi(y)$ vanishes when $\psi(z)=0$, hence is bounded by $Q^C(1+R)^C|\psi(z)|$. Apply step 2.1 to $z$ to obtain the lower two-point estimate. Polynomial basis conversions are Lipschitz on these bounded boxes by the same monomial subtraction, proving the asserted basis-change versions. [F2, step 2.1, algebra]

4.1 The polynomial $\psi(gzg^{-1})$ vanishes at $\psi(z)=0$ and is bounded on bounded boxes by $Q^C(1+R)^C|\psi(z)|$. For bounded coordinates of $g,x,y$, step 3.1 bounds $d_G(x,y)$ by $Q^C(1+R)^C$. Apply step 2.1 to $z=xy^{-1}$, then this conjugation bound and the one-edge bound. Right invariance gives $d_G(gx,gy)=d_G(gzg^{-1},e)\le Q^C(1+R)^Cd_G(x,y)$. For subgroup comparison, the polynomial conversion $\psi_Y(z)$ from ambient coordinates has zero constant term, so $|\psi_Y(z)|\le Q^C(1+|\psi(z)|)^C|\psi(z)|$ for $z\in H$. For bounded ambient coordinates of $x,y\in H$, apply step 2.1 to $z=xy^{-1}$ and then $d_Y(x,y)\le|\psi_Y(z)|$. This proves the first group comparison. Reverse the coordinate conversion for the other comparison on bounded $Y$ coordinates. No ambient chain has been treated as a chain inside $H$. [F2, step 2.1, step 3.1, algebra]

5.1 Right invariance gives $d(x\Gamma,y\Gamma)=\inf_{\gamma\in\Gamma}d_G(x,y\gamma)$. For fixed $M$, any candidate with distance at most $M$ satisfies $d_G(y\gamma,e)\le d_G(x,e)+M$; step 2.1 bounds its coordinates, and polynomial multiplication bounds the coordinates of $\gamma=y^{-1}(y\gamma)$. Only finitely many integral coordinate vectors remain. Some finite $M$ contains a candidate, so the infimum is attained and is zero only for equal cosets. Representative independence, symmetry and the triangle inequality follow from right invariance and concatenation of translated chains. Reducing both representatives by step 1.2 and applying step 3.1 gives quotient diameter at most $Q^C$. For bounded left translation on the quotient, use bounded fundamental representatives $x_0,y_0$ and a minimizing $\gamma$. The diameter bound and step 2.1 bound $y_0\gamma$ in coordinates by $Q^C$. Step 4.1 now applies to $g,x_0,y_0\gamma$, proving $d(gx\Gamma,gy\Gamma)\le Q^C(1+R)^C d(x\Gamma,y\Gamma)$ when $|\psi(g)|\le R$. This explicitly controls the minimizing lattice translate. [F1, F2, step 2.1, step 3.1, step 4.1, step 1.2, algebra]

6.1 For quotient subgroup comparison, reduce $x,y\in H$ modulo $\Lambda$ to have $Y$ coordinates in $[0,1)$. Their ambient coordinates are bounded by $Q^C$. An intrinsic minimizing $\lambda\in\Lambda$ has $d_Y(x,y\lambda)\le Q^C$, so the intrinsic ball bound controls $y\lambda$ in $Y$ coordinates. Group comparison yields $d(x\Gamma,y\Gamma)\le Q^C d_Y(x\Lambda,y\Lambda)$. For the reverse take an ambient minimizing $\gamma$. If $\rho=d_G(x,y\gamma)\ge Q^{-C_0}$, the intrinsic quotient diameter proves the required bound. Otherwise the ambient ball bound controls $y\gamma$, and multiplication controls $\gamma$. The lower two-point estimate and bounded derivatives of the polynomial map $t\mapsto\log_X(y^{-1}E_X(t))$ give $|\log_X(y^{-1}x)-\log_X\gamma|\le Q^C\rho$. Let $L_i$ be bounded rational defining linear forms for $\mathfrak h$, constructed by [F2]. Integer second coordinates of $\gamma$ imply that $\log_X\gamma$ has a common denominator at most $Q^C$, independently of its numerator. Hence each $L_i(\log_X\gamma)$ lies in $D^{-1}\mathbb Z$ for one $D\le Q^C$. The same forms vanish on $\log_X(y^{-1}x)$. Choosing $C_0$ sufficiently large forces all the forms to vanish on $\log_X\gamma$, so $\gamma\in H\cap\Gamma=\Lambda$. Group comparison on the now intrinsic bounded coordinate set gives $d_Y(x,y\gamma)\le Q^C\rho$, proving the other quotient inequality. [F2, F3, F4, step 2.1, step 3.1, step 4.1, step 5.1, algebra]

6.2 To prove uniqueness, let $\nu$ be another invariant probability and lift it to a locally finite measure $L_\nu$ on $G$ by $L_\nu(f)=\int\sum_{\gamma\in\Gamma}f(x\gamma)\,d\nu(x)$ for nonnegative compactly supported $f$. The sum is independent of the representative. A small identity box with $U^{-1}U\cap\Gamma=\{e\}$ supplies local quotient sections; their left translates cover the compact quotient with a finite subcover. On each section the sums are locally finite and measurable. For compact support and representatives in $D$, the bounded-coordinate argument of step 5.1 uniformly bounds the number of contributing lattice points, proving local finiteness. The lift is left invariant. Its countable sum has the explicit enumeration $\Gamma=E_X(\mathbb Z^m)$, with no countable selection of representatives. For any left invariant locally finite measure $L$ and nonnegative compactly supported continuous $f,h$, evaluate $I=\int_x\int_y f(yx)h(x)\,dg(y)\,dL(x)$. Right invariance of $dg$ gives $I=(\int f\,dg)(\int h\,dL)$. Interchange the integrals and put $x=y^{-1}z$ using left invariance of $L$; inversion and right invariance of $dg$ then give $I=(\int f\,dL)(\int h\,dg)$. Fixing $h$ with both integrals positive proves that $L$ is a scalar multiple of $dg$ on compactly supported tests, hence as locally finite Borel measures. Such $h$ exists for nonzero $L$ by a compactly supported bump on a compact set of positive measure; the zero case is trivial. For $L_\nu$ the scalar is $1$, since $\sum_\gamma 1_D(x\gamma)=1$ and $dg(D)=1$. Integrating $1_D(x)F(x\Gamma)$ then gives $\nu=\mu$. Nonnegative integral interchange or compact support justifies every interchange. [F1, step 1.2, step 5.1, step 2.2, algebra]

7.1 Suppose $Z=\exp\mathfrak z$ is a central tail of dimension $r$ and set $l=m-r$. Two elements have the same image in $G/Z$ precisely when their first $l$ second coordinates agree: the remaining ordered factors lie in $Z$, and the quotient BCH law makes the first $l$ coordinate law the law of $\mathfrak g/\mathfrak z$. Thus $G/Z$ is the explicit Lie group $\mathbb R^l$ with the truncated multiplication and inversion polynomials. The projected first $l$ basis vectors are nested with rational structure constants bounded by $Q$, and $p(\Gamma)$ is exactly their integer-coordinate subgroup. It is discrete and has compact cube fundamental domain; hence this is a Mal’cev basis, adapted to the projected tails. For a general bounded rational central $\mathfrak z$, replace the original filtration algebras $\mathfrak g_i$ by $\mathfrak g_i+\mathfrak z$ for $0\le i\le d+1$, and put zero at $d+2$. This is a filtration because $\mathfrak z$ is central, and its last possibly nonzero term is $\mathfrak z$. Apply [F3] with $H=G$ to obtain a bounded rational adapted basis making it a tail. The full-subgroup case of step 6.1 compares the old and new quotient metrics, while $p(\exp\mathfrak g_i)=p(\exp(\mathfrak g_i+\mathfrak z))$ by the quotient BCH law. This proves the stated bounded basis-change version. [F2, F3, F4, step 1.2, step 6.1, algebra]

8.1 Projection decreases every directed coordinate norm, and therefore every chain cost, so $\bar d_G(p(x),p(y))\le d_G(x,y)$. Conversely take a finite chain in $G/Z$. For each edge choose the cheaper of its forward increment $\bar x_i\bar x_{i-1}^{-1}$ and its inverse. Lift that chosen increment by setting its last $r$ second coordinates to zero. In the forward case prepend its lift to the current lifted vertex; in the inverse case prepend the inverse of its lift. This projects to the required next vertex and has kappa-cost at most the selected norm, exactly the quotient edge cost. The final lifted vertex is $yz$ for some $z\in Z$. Taking infima proves $\bar d_G(p(x),p(y))=\inf_z d_G(x,yz)$. Taking the lattice infimum next gives $\bar d(p(x)p(\Gamma),p(y)p(\Gamma))=\inf_{\gamma,z}d_G(x,y\gamma z)$, since $p(\Gamma)$ consists of lattice images. In particular projection is $1$-Lipschitz. If $F$ is invariant under left multiplication by $Z$, centrality makes it constant also on $y\gamma z\Gamma$. The displayed infimum therefore bounds its descended Lipschitz seminorm by that of $F$. The reverse follows from projection being $1$-Lipschitz, and sup norms agree by surjectivity. Each chain lift is a specified finite coordinate construction, so no choice principle is used. [F1, F4, step 7.1, construct, algebra]

9.1 For the central-tail quotient, the cube map $p$ forgets the last $r$ coordinates. Finite-product integration therefore gives $\int_{G/\Gamma}\bar F(p(x))\,d\mu(x)=\int_{(G/Z)/p(\Gamma)}\bar F\,d\bar\mu$, proving invariant-probability pushforward. A bounded rational basis change gives the same normalized probability by uniqueness. Every rational subgroup with its basis from [F3] has the same coordinate construction, so the measure assertions apply there too. Empty coordinates and the one-point probability handle dimension zero. The preceding finite constructions establish all stated comparisons and quotient interfaces without an imported Haar-existence theorem or choice assumption. [F3, step 7.1, step 2.2, step 6.2, algebra] ∎

## Remarks

The source reading covers GT12 Definitions 2.1–2.6 and the complete Appendix A, including A.4–A.6 and A.14–A.17. The local proof also supplies the central quotient chain-lifting and measure interfaces used in nilmanifold induction. No general probability disintegration along noncentral fibres is asserted. Coordinate bounds on lattice points near a rational subgroup use a uniform common denominator, independently of unbounded numerators. The fundamental reduction is in increasing coordinate order for the stated triangular multiplication convention.
