# CC-only Coulomb negative and essential spectrum: research proposal

Owner: `physics_spectral_repair_successor`. This file is a proposed local proof, not mathematical acceptance, a production carrier, an import replacement, a readiness receipt, or permission to reset review rounds. It supplies the prerequisite portion of original source40's Dollard claim; it does not supply its positive radial continuum transform or onto scattering argument. All existing AC+CC Statements retain their present contracts.

## Exact target and proof inputs

Work in ZF plus Countable Choice (CC). Let $\mathcal H=L^2(\mathbb R^3;\mathbb C)$, $r(x)=|x|$, $H_0=-\Delta$ on $H^2=W^{2,2}(\mathbb R^3;\mathbb C)$, and $C=H_0-\gamma M$, $Mu=u/r$, with exactly $D(C)=H^2$. For $\gamma>0$ the proposed conclusions are self-adjointness, $\sigma_{\mathrm{ess}}(C)=[0,\infty)$, all negative spectrum isolated of finite multiplicity, precisely the levels $E_n=-\gamma^2/(4n^2)$ for **every** $n\ge1$ with multiplicity $n^2$, closed-span exhaustion of $E_C(( -\infty,0))\mathcal H$, and $E_C(\{0\})=0$. The separate $\gamma=0$ free branch has zero nonpositive projection and no bound states. None of these claims asserts positive absolute continuity or rules out positive embedded eigenvalues by itself.

Use the explicit Fourier transform convention $\widehat f(\xi)=\int f(x)e^{-2\pi i x\cdot\xi}dx$, extended by Plancherel. Use weak Fourier derivatives, Sobolev smooth density and completeness, Lebesgue measure, Tonelli/Fubini, dominated convergence, Cauchy–Schwarz, the CC three-dimensional Hardy lemma, rational box density, Hilbert orthogonal projection and Hilbert Riesz representation under their actual CC contracts. For angular reduction use the specified $Y_{lm}$ and the **CC** `thm-nrqm-orbital-and-spin-sphere-onb` and `thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain` conclusions. Use regular compact-interval scalar ODE uniqueness, proved by Volterra iteration (or the actual CC interval IVP supplier after translating the interval).

The negative-spectrum, essential-spectrum, relative-compactness, infinitesimal-kinetic-bound, transported-radial and Kummer carriers currently assume AC+CC. They are inspected source context only. Their conclusions are derived below; they are **not** CC premises. No general Kato–Rellich, Weyl invariance, Fredholm alternative, arbitrary-Hilbert-space spectral theorem, spectral-type decomposition, or DC Riesz–Markov theorem is a premise. No finite bound-spectrum truncation is permitted.

## 1. Direct self-adjointness on the exact domain

The maximal real Fourier multiplier $H_0=\mathcal F_2^*M_{4\pi^2|\xi|^2}\mathcal F_2$ is self-adjoint: bounded-support truncations show domain density, and testing the adjoint identity on $\{|a|\le N\}$ for a real multiplier $a$ forces its adjoint to be the same multiplier on the same domain. Weak Fourier derivatives identify the domain as $H^2$.

For $u\in H^2$, Hardy and Fourier Cauchy–Schwarz give

$$\|Mu\|_2\le2\|\nabla u\|_2\le2\sqrt{\|u\|_2\|H_0u\|_2}.$$

In particular $H^2\subset D(M)$ and $M:H^2\to L^2$ is graph bounded. Let $R_0(\pm i\mu)=\mathcal F_2^*M_{(4\pi^2|\xi|^2\mp i\mu)^{-1}}\mathcal F_2$. These are explicit two-sided inverses, $\|R_0\|\le\mu^{-1}$ and $\|H_0R_0\|\le1$. Therefore $\|\gamma MR_0(\pm i\mu)\|\le2\gamma/\sqrt\mu<1$ when $\mu>4\gamma^2$. The factorization

$$C-z=(I-\gamma MR_0(z))(H_0-z)$$

has the bounded first factor invertible by its norm-convergent Neumann series. Both $C-i\mu$ and $C+i\mu$ are onto. The densely defined $C$ is symmetric. If $y\in D(C^*)$, solve $(C-i\mu)x=(C^*-i\mu)y$; then $y-x\in\ker(C^*-i\mu)=\operatorname{ran}(C+i\mu)^\perp=0$. Thus $C=C^*$ including domains. The lower bound is

$$\langle Cu,u\rangle=\|\nabla u\|_2^2-\gamma\int |u|^2/r\ge\|\nabla u\|_2^2-2\gamma\|\nabla u\|_2\|u\|_2\ge-\gamma^2\|u\|_2^2.$$

For every nonreal $z$, symmetry gives $\|(C-z)u\|\ge|\operatorname{Im}z|\|u\|$. Closedness gives closed range; its orthogonal complement is $\ker(C-\bar z)=0$. Hence the nonreal resolvent exists with norm at most $|\operatorname{Im}z|^{-1}$. This proof uses no spectral theorem.

## 2. The precise separable PVM prerequisite

Here is the construction used below, so the generic AC spectral carrier is not silently imported. This specializes `cc-local-modules.md` §2, including its fixed-sequence rather than maximal-family cyclic decomposition.

Give $\mathcal H$ a fixed enumeration $(d_j)$ of rational complex box step functions. For any self-adjoint $A$ on such a space put $U=(A-i)(A+i)^{-1}$. For a vector $x$ the nonnegative circle densities

$$q_N(\theta)=\frac{\|\sum_{j=0}^Ne^{-ij\theta}U^jx\|^2}{2\pi(N+1)}$$

have mass $\|x\|^2$ and moments $\int e^{in\theta}q_Nd\theta=(1-|n|/(N+1))\langle U^nx,x\rangle$ for $|n|\le N$. Extract a subsequence of their cumulative functions converging at each rational coordinate. The extraction is specified: at each coordinate bisect a fixed bounding interval, retain the first half containing infinitely many terms, and take least eligible increasing indices; diagonalize. This is recursion of a specified operation, not successive arbitrary choice or DC. The rational limits $G(q)$ give $F(t)=\inf_{q>t,q\in\mathbb Q}G(q)$. It is nondecreasing right-continuous, zero below $0$, and $\|x\|^2$ above $2\pi$. The actual CC Stieltjes extension theorem yields a finite Borel measure on $[0,2\pi]$. Rational squeezing at continuity points and step bounds on continuous functions show weak convergence along the subsequence. Pushforward to the circle gives a measure $\mu_x$ with all the required moments.

Only finite compact metric measure regularity is needed here. It can be proved locally without the generic regularity supplier: an open set $O$ is exhausted by compact sets $\{\operatorname{dist}(t,O^c)\ge1/n\}$ (if $O$ is the whole compact space, use the space itself). Continuity from below proves its inner regularity. Complements give closed-set outer regularity. The family of Borel sets admitting closed/open sandwiches of arbitrarily small measure difference contains opens, is closed under complements, and is closed under countable unions: use CC to pick sandwiches with summable errors, take the union of the open upper sandwiches, then retain finitely many closed lower sandwiches so the measure tail is small. It is therefore the Borel sigma algebra. This also proves density of continuous distance cutoffs in $L^2(\mu_x)$. Fejér polynomial approximation proves uniqueness from moments and density of Laurent polynomials.

Consequently $p\mapsto p(U)x$ extends from Laurent polynomials to a unitary map $L^2(\mu_x)\to\overline{\operatorname{span}}\{U^nx:n\in\mathbb Z\}$, carrying multiplication by the circle coordinate to $U$. Build countably many reducing cyclic spaces by $x_j=(I-P_{S_{j-1}})d_j$, $K_j=\overline{\operatorname{span}}\{U^nx_j\}$, $S_j=S_{j-1}\oplus K_j$. Projections exist under CC. Zero vectors give zero summands. Each $d_j\in S_j$, so their orthogonal sum is the whole space. No maximal family is chosen.

The circle indicator multipliers define a PVM $F_U$ in this representation. Scalar dominated convergence and the countable orthogonal norm sum give strong countable additivity. Moment uniqueness followed by polarization gives PVM uniqueness. Since $\ker(I-U)=0$, $F_U(\{1\})=0$. The Cayley identities give $\operatorname{ran}(I-U)=D(A)$ and

$$\lambda(z)=i\frac{1+z}{1-z},\qquad\frac1{1-z}=\frac{\lambda(z)+i}{2i}.$$

Thus in the multiplication representation $D(A)=\{h:\lambda h\in L^2\}$ and $A=M_\lambda$ on exactly that domain. Transporting circle indicators gives the real PVM $E_A$ and bounded Borel calculus. In particular $E_A(\{\lambda\})$ projects onto $\ker(A-\lambda)$; bounded spectral intervals have range inside $D(A)$; and $\|(A-\lambda)u\|^2=\int |t-\lambda|^2d\langle E_A(t)u,u\rangle$.

For clarity, the spectral support assertion is also local. If $E_A((\lambda-\varepsilon,\lambda+\varepsilon))=0$, then $(t-\lambda)^{-1}$ on its complement is bounded and provides an inverse mapping into $D(A)$, since $t/(t-\lambda)$ is bounded there. Conversely, nonzero projections at all shrinking neighborhoods give unit vectors with residual norms tending to zero, precluding a bounded inverse. This identifies spectral points exactly. These are the PVM properties used below, without nonseparable spectral calculus.

## 3. Compact resolvent difference from explicit kernels

For $z\notin\mathbb R$, $m_z(\xi)=(4\pi^2|\xi|^2-z)^{-1}$ lies in $L^2$: it is bounded on a fixed ball and $O(|\xi|^{-2})$ outside. Fourier Cauchy–Schwarz gives a bounded representative of $R_0(z)f$ with $\|R_0(z)f\|_\infty\le\|m_z\|_2\|f\|_2$. Put $g_z=\mathcal F_2^*m_z$. For Schwartz $f$, approximate $g_z$ in $L^2$ by Schwartz kernels and use the convolution/product transform identity to obtain $R_0(z)f=g_z*f$. For general $f$, the absolutely convergent integral $\int g_z(x-y)f(y)dy$ has pointwise bound $\|g_z\|_2\|f\|_2$ and varies uniformly continuously in the $L^2$ input. Schwartz approximation therefore identifies it with $R_0(z)f$ a.e. (first on each bounded spatial ball, using $L^2$ convergence and the uniform bound).

If $\chi$ is bounded of compact support, $k(x,y)=\chi(x)g_z(x-y)$ has squared product norm $\|\chi\|_2^2\|g_z\|_2^2$. Product $L^2$ kernels give bounded operators with norm at most their kernel norm, by Cauchy–Schwarz and Tonelli. The fixed rational box enumeration in $\mathbb R^6$ gives finite sums of separated $x,y$ indicators approximating $k$ in $L^2$; their operators have finite rank and converge in operator norm. Thus $M_\chi R_0(z)$ is compact. This uses the actual CC local kernel proof, or its argument just reproduced, not an AC Hilbert–Schmidt supplier.

Truncate $r^{-1}$ to $\varepsilon<r<R$. The omitted origin part has norm at most $\sqrt{4\pi\varepsilon}\|m_z\|_2$, since $\int_{r<\varepsilon}r^{-2}dx=4\pi\varepsilon$. The tail has norm at most $R^{-1}|\operatorname{Im}z|^{-1}$. Hence $MR_0(z)$ is an operator-norm limit of finite-rank-approximable compact operators. It is compact. The exact common-domain resolvent identity gives

$$R_C(z)-R_0(z)=\gamma R_C(z)MR_0(z),$$

also compact and finite-rank approximable. Finite-dimensional subsequence compactness and norm-limit compactness use only CC; alternatively total boundedness follows immediately from the finite-rank approximants.

## 4. Essential spectrum without a Weyl theorem premise

Define $\lambda$ to be essential when every $E_A((\lambda-\varepsilon,\lambda+\varepsilon))$ has infinite rank. This definition agrees here with spectrum minus isolated finite-multiplicity eigenvalues by the argument in §5.

If $\lambda$ is essential, let $L_n$ be the intersection of the spectral range for radius $1/n$ with the orthogonal complement of the preceding $u_1,\ldots,u_{n-1}$. It is a nonzero closed space. Project the fixed dense enumeration onto $L_n$, select its least nonzero projection, and normalize to define $u_n$. Then the $u_n$ are orthonormal, belong to $D(A)$, are weakly null by the finite Bessel bound, and $\|(A-\lambda)u_n\|\le1/n$. Conversely, for a unit weakly null sequence with $\|(A-\lambda)u_n\|\to0$, a finite-rank neighborhood projection $P_\varepsilon$ would satisfy $P_\varepsilon u_n\to0$; the spectral multiplication formula gives $\|(I-P_\varepsilon)u_n\|\le\varepsilon^{-1}\|(A-\lambda)u_n\|\to0$, a contradiction.

Transfer such a sequence from $A=H_0$ to $C$ with $K=R_C(z)-R_A(z)$ and

$$v_n=R_C(z)(A-z)u_n=u_n+K(A-z)u_n.$$

The sequence $(A-z)u_n=(\lambda-z)u_n+o(1)$ is bounded weakly null. Its image under $K$ tends to zero: approximate $K$ in norm by finite-rank operators, which send bounded weakly null sequences to norm-null sequences. Thus $v_n-u_n\to0$, and the exact identity

$$(C-\lambda)v_n=(A-\lambda)u_n+(z-\lambda)(v_n-u_n)$$

gives residual convergence. Normalization yields a unit weakly null sequence for $C$. Reversing $A,C$ and replacing $K$ by $-K$ proves equivalence. This proves the required invariance in this instance; it does not invoke a Weyl or Fredholm supplier.

For $H_0$ the spectral projection is the explicit Fourier multiplier of $\{\xi:4\pi^2|\xi|^2\in I\}$. Every neighborhood of every $\lambda\ge0$ has a nonempty open momentum ball, which has infinitely many disjoint smaller rational balls and infinite-dimensional $L^2$. Below zero the projection vanishes on a sufficiently small neighborhood. Consequently $\sigma_{\mathrm{ess}}(C)=[0,\infty)$.

## 5. Negative discreteness and closed-span exhaustion

For $\lambda<0$ in $\sigma(C)$, §4 gives a bounded interval $I$ about $\lambda$ with finite-rank $P=E_C(I)$. On its range $C$ is a finite-dimensional self-adjoint matrix, whose eigenvectors span it (finite-dimensional diagonalization uses no arbitrary choice). Shrink $I$ around $\lambda$ to exclude its finitely many other eigenvalues. Spectral support from §2 shows that $\lambda$ is an isolated eigenvalue of finite multiplicity. This also proves the equivalence of the two essential-spectrum definitions used above.

For each such $\lambda$ select the **least indexed rational interval** containing $\lambda$ and no other spectral point. Different eigenvalues cannot share that interval. This is a specified injection into a fixed countable set, hence the negative eigenvalues are at most countable. Choosing an arbitrary single rational point to the right, as in the existing essential-spectrum carrier step 4.1, would not justify injectivity; overlapping isolating intervals are possible.

Let $\Lambda=\sigma(C)\cap(-\infty,0)$. Every point of $(-\infty,0)\setminus\Lambda$ has a zero-projection neighborhood by §2. The rational intervals with zero projection cover that set, and their collection is countable; countable additivity therefore gives $E_C(( -\infty,0)\setminus\Lambda)=0$. Enumerate $\Lambda$ via the injection, including its possible empty/finite cases. Strong countable additivity gives

$$E_C(( -\infty,0))=\sum_{\lambda\in\Lambda}E_C(\{\lambda\})$$

with convergence on every vector in norm. Its range is exactly the closed span of the negative eigenspaces. This establishes exhaustion by atoms without assuming there are finitely many of them or invoking a generic pure-point decomposition theorem.

## 6. Radial domains and full bound energy exhaustion

Define $V_l$ as the completion of $C_c^\infty(0,\infty)$ for $\|u\|^2+\|u'-u/r\|^2+l(l+1)\|u/r\|^2$. On the core, integration of $(|u|^2/r)'$ gives $\|u'-u/r\|=\|u'\|$, and one-dimensional integration by parts gives $\|u/r\|\le2\|u'\|$. Thus for each fixed $l$, $V_l=H^1_0(0,\infty)$ with equivalent norms. Explicitly an $H^1$ function has an absolutely continuous representative locally and a trace at zero, because $|u(t)-u(s)|\le\sqrt{|t-s|}\|u'\|_2$. The closure has trace zero. Conversely for trace-zero $u$, integration by parts on $[\varepsilon,R]$ and passage to the endpoints gives the same Hardy estimate; $|u(\varepsilon)|^2/\varepsilon\le\int_0^\varepsilon|u'|^2\to0$ handles the origin. Cutoffs below $\varepsilon$ and above $R$ converge in $H^1$; the added origin derivative is bounded by a constant times $\int_0^{2\varepsilon}|u|^2/r^2\to0$. Smooth approximation on compact intervals proves the asserted core characterization.

On $V_l$ put

$$a_l(u,v)=\int[u'\overline{v'}+l(l+1)u\overline v/r^2-\gamma u\overline v/r]dr.$$

The Coulomb pairing has absolute value at most $2\gamma\|u'\|\|v\|$. Therefore $a_l[u]\ge\tfrac12\|u'\|^2+l(l+1)\|u/r\|^2-2\gamma^2\|u\|^2$. For $\mu=2\gamma^2+1$, $a_l+\mu\langle\cdot,\cdot\rangle$ is a complete coercive inner product equivalent to the defining $V_l$ norm, with constants uniform in $l$. Hilbert Riesz gives a unique solution of $a_l(u,v)+\mu\langle u,v\rangle=\langle f,v\rangle$ for each $f\in L^2$. Define $D(A_l)$ as the $u\in V_l$ having $a_l(u,v)=\langle f,v\rangle$ for some $f\in L^2$ and all $v\in V_l$, and $A_lu=f$. It contains compact smooth tests, is symmetric and densely defined, has $A_l+\mu$ onto, and is self-adjoint: for $y\in D(A_l^*)$ solve $(A_l+\mu)x=(A_l^*+\mu)y$ and use $\ker(A_l^*+\mu)=\operatorname{ran}(A_l+\mu)^\perp=0$. Its eigenvectors solve the classical ODE locally: the weak equation gives $u''=(l(l+1)/r^2-\gamma/r-E)u$; local one-dimensional $H^1$ continuity and two integrations make $u$ $C^2$ away from zero.

The polar unitary $U\psi=(u_{lm})$, $u_{lm}(r)=r\int\psi(r\Omega)\overline{Y_{lm}(\Omega)}d\sigma$, maps $L^2$ onto the countable radial direct sum by angular Parseval and Tonelli. For finite compact smooth radial sums, integration by parts and the sphere eigenvalues give

$$\|\nabla\psi\|^2=\sum_{lm}[\|u'_{lm}-u_{lm}/r\|^2+l(l+1)\|u_{lm}/r\|^2],\qquad\int|\psi|^2/r=\sum_{lm}\int|u_{lm}|^2/r.$$

These are exact identities on $H^1$: first smooth compact functions away from the origin are dense in $H^1$ by Hardy and the origin cutoff estimate above in three dimensions; for those functions angular truncation converges in gradient norm by Parseval for the radial derivative and the smooth sphere Laplacian. Conversely square-summable $V_l$ families are approximated by finite compact smooth families and their inverse polar images are $H^1$ Cauchy. This proves equality of the global and direct-sum form domains, including the actual norm identity.

This form argument identifies the operators without using an abstract AC form-representation theorem. The global shifted form on $H^1$ is coercive. Its Riesz solution $u$ for $f\in L^2$ satisfies $Mu\in L^2$ by Hardy, and $-\Delta u=f+\gamma Mu-\mu u\in L^2$ distributionally; Fourier multipliers imply $u\in H^2$. Hence the form operator is exactly $C$. On the radial direct sum, solve coordinates using $A_l+\mu$. The uniform coercive estimate yields $\sum\|u_{lm}\|_{V_l}^2\le c\sum\|f_{lm}\|^2$, and $A_lu_{lm}=f_{lm}-\mu u_{lm}$ yields the square-summable graph condition. Conversely such graph families satisfy the global form identity by summation and Cauchy–Schwarz. Thus, including domains,

$$UCU^*=\bigoplus_{lm}A_l,\qquad D(\bigoplus A_l)=\{u:u_{lm}\in D(A_l),\ \sum_{lm}(\|u_{lm}\|^2+\|A_lu_{lm}\|^2)<\infty\}.$$

For $\gamma>0$ and a putative negative eigenvalue $-k^2$, substitute $u=r^{l+1}e^{-kr}v(2kr)$. Direct differentiation without division by $u$ gives $xv''+(2l+2-x)v'+jv=0$, where $j=\gamma/(2k)-l-1$. The regular solution has $v_0=1$ and

$$v_{i+1}=\frac{i-j}{(i+1)(i+2l+2)}v_i.$$

The estimate $|v_i|\le C^i/i!$ for $C=\max(1,|j|/(2l+2))$ proves entire convergence with local termwise derivatives. The regular $u_{\rm reg}$ equals $r^{l+1}(1+O(r))$ near zero. On its zero-free initial interval reduction of order gives $u_2=u_{\rm reg}\int_{r_*}^r u_{\rm reg}^{-2}$, with Wronskian one and $u_2\sim-r^{-l}/(2l+1)$. Regular compact-interval IVP uniqueness extends it across all later nodes. Every eigenvector is a combination of these two solutions. For $l\ge1$ the second solution is not $L^2$ near zero; for $l=0$ it has nonzero trace and violates $H^1_0$. Consequently every radial eigenvector is a scalar multiple of the regular solution. This endpoint argument avoids silently importing the AC transported-domain carrier.

The recurrence terminates precisely when $j\in\mathbb N_0$. Then its polynomial is $L_j^{(2l+1)}$ divided by its nonzero constant coefficient, where $L_j^{(a)}(x)=\sum_{i=0}^j(-1)^i\binom{j+a}{j-i}x^i/i!$. The polynomial-exponential solution has $u,u',u/r\in L^2$ and zero trace. Integration by parts against compact tests gives $a_l(u,v)=-k^2\langle u,v\rangle$; form continuity extends this to all $V_l$. Thus it is in the **actual** $D(A_l)$, not merely $L^2$.

If $j\notin\mathbb N_0$, all coefficients are nonzero and eventually have fixed sign. For any $0<\varepsilon<1/2$, the ratio $(i-j)/(i+2l+2)$ is at least $1-\varepsilon$ for all large $i$. Hence $|v_i|\ge c(1-\varepsilon)^i/i!$ on the tail. Subtracting the finite initial polynomial gives $|v(x)|\ge c e^{(1-\varepsilon)x}-P(x)$ for $x\ge0$. Therefore for large $r$, $|u_{\rm reg}(r)|\ge(c/2)r^{l+1}e^{k(1-2\varepsilon)r}$, so it is not $L^2$. The radial negative eigenvalues are exactly $-\gamma^2/(4n^2)$ for $n\ge l+1$, each simple.

## 7. Every level, degeneracy and zero atom

By the exact direct-sum domain identity, any nonzero negative $C$ eigenvector has a nonzero radial block; §6 forces its energy to be $E_n$ and its only possible angular labels satisfy $0\le l\le n-1$. Conversely each terminating vector transported as $\psi_{nlm}=u_{nl}(r)Y_{lm}(\Omega)/r$ belongs to $D(C)=H^2$ and is an eigenvector. At fixed $n$ the eigenspace is their **finite** span with dimension $\sum_{l=0}^{n-1}(2l+1)=n^2$. Across different $n$ self-adjointness gives orthogonality; at fixed $n$ distinct angular blocks are orthogonal. Normalize using the explicit positive number $\|u_{nl}\|_2$; no unspecified basis selection is involved. Combining §5 with these exact eigenspaces gives

$$E_C(( -\infty,0))\mathcal H=\overline{\operatorname{span}}\{\psi_{nlm}:n\ge1,\ 0\le l\le n-1,\ -l\le m\le l\}.$$

This is an infinite family; $E_n\uparrow0$ with all levels retained. Norm expansion and Parseval follow from countable orthogonality and the closed-span equality. The nonnegative space is infinite dimensional because, for example, $E_C((0,1/2))$ has infinite rank by essentiality of $1/4$.

For the zero atom use a dilation argument requiring **no** differentiability of the dilated vector. Let $D(s)u(x)=e^{3s/2}u(e^sx)$. It is unitary, strongly continuous (first on compact smooth functions then by density), preserves $H^2$, and on $H^2$ satisfies $D(s)^*CD(s)=e^{2s}H_0+e^sV$, $V=-\gamma M$. If $C\psi=0$, symmetry gives the exact equality

$$0=\langle D(s)^*\psi,(D(s)^*CD(s)-C)\psi\rangle.$$

Indeed the first term equals $\langle\psi,CD(s)\psi\rangle=\langle C\psi,D(s)\psi\rangle=0$ and the second equals zero. Divide by $s$ and pass to $s\to0$: strong continuity of $D(s)^*\psi$ and norm convergence of $[(e^{2s}-1)H_0\psi+(e^s-1)V\psi]/s$ give $2\langle\psi,H_0\psi\rangle+\langle\psi,V\psi\rangle=0$. Also the eigenidentity gives $\langle\psi,H_0\psi\rangle+\langle\psi,V\psi\rangle=0$. Subtract to obtain $\langle\psi,V\psi\rangle=0$. For $\gamma>0$, it is $-\gamma\int|\psi|^2/r$, strictly negative for every nonzero $\psi$. Thus $\ker C=0$ and §2 gives $E_C(\{0\})=0$.

For $\gamma=0$ use the free Fourier multiplier directly: $E_{H_0}(( -\infty,0))=0$ and $E_{H_0}(\{0\})=0$ since $\{\xi=0\}$ is Lebesgue null. The formula $-\gamma^2/(4n^2)$ does **not** produce bound levels in this branch.

## Choice ledger, inspected defects and remaining obligations

The only selection assumptions are CC in the actual density/completeness/projection/Riesz/Stieltjes inputs, countably many simultaneous representatives or null-set exclusions, and countably many approximants. All infinite iterative selections in the PVM decomposition, shrinking spectral neighborhoods and rational interval encoding are specified least-index operations on fixed countable enumerations. No Zorn/maximal-family argument, DC iteration of arbitrary nonempty sets, or arbitrary-index choice is used.

The proposal reproduces the valid concrete kernel argument while bypassing the enclosing relative-compactness carrier's AC declaration. It repairs the essential-spectrum carrier's insufficient rational-point injection. It preserves the sound eventual-sign Kummer lower bound and actual form-domain membership argument. It does not narrow the negative-spectrum promise. The local compact-metric regularity proof in §2 avoids reliance on the general Stieltjes-regularity carrier's compressed global outer-regularity step 7.1, whose unrestricted open set $V$ need not have controlled measure outside $I_m$; no production correction to that read-only imported original is proposed here.

Concrete outstanding obligations before source40 acceptance: (1) the successor must independently check and integrate the separable PVM, polar form identities and exact domains into authorized local suppliers/carriers, with actual dependency contracts and transitive choice currency; this research is not a stamp; (2) the positive-energy scalar Green/resolvent boundary, exact onto free/Coulomb radial continuum transforms, and their bounded Borel/domain correspondence must be accepted separately; essential spectrum plus the negative exhaustion and zero-atom result do not imply them; (3) the successor retains all original Dollard existence, range inclusion, channel preservation and onto-completeness consumer checks and native capped review history. This task makes no mathematical acceptance decision and writes no consumers, manifests, imports or engine state.

No external textbook full text was retrieved during this task. Statements and proofs of the named repository sources and the two research modules were inspected; source citations embedded in those files remain provenance context, not claims of fresh full-text reading. Snapshot hashes and local algebra checks are adjacent. They bind this proposal's observed inputs and are not independent audits.
