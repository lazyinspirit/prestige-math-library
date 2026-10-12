# Analytic perturbation remainder: exact contour-consumer repair proposal

Research-only authoring for `thm-nrqm-controlled-dynamics-analytic-perturbation-remainder`, inspected raw SHA256 `6b68c04e27c9f415a03bc4d77f307b8e73d008a463624a06cbd4b301fcdb30fb`. Sole full reviewer/integrator: `physics_spectral_review_continuation`. The simple-coefficient author is `physics_coulomb_onto_author`; its disjoint carrier/draft is not edited here. This proposal writes no production item, consumer, mirror, contract, readiness, import, plan or engine control. Counterexamples document the replaced false assertions; local checks are not independent mathematical acceptance.

## Exact proposed public claim

Assume CC. Let $H$ be an arbitrary complex Hilbert space with inner product linear in the first variable. Let $H_0$ be self-adjoint on its exact dense domain, with isolated simple eigenvalue $E\in\mathbb R$, normalized eigenvector $\psi_0$, and $\operatorname{dist}(E,\sigma(H_0)\setminus\{E\})\ge g>0$. Let $V=V^*\in\mathcal B(H)$, $v=\|V\|>0$. On the **complex** disk $|\lambda|<g/(2v)$ let $P_\lambda$ and $E_\lambda$ be the rank-one Riesz projection and unique interior eigenvalue of the current repaired contour supplier, with its convention $R_0(z)=(z-H_0)^{-1}$. Define $q=2|\lambda|v/g$, $P_0=\langle\cdot,\psi_0\rangle\psi_0$, and $Q=I-P_0$.

The gauge vector on $q<1/2$ is

$$\psi(\lambda)=\frac{P_\lambda\psi_0}{\langle P_\lambda\psi_0,\psi_0\rangle},\qquad\langle\psi(\lambda),\psi_0\rangle=1.$$

It is a domain-valued analytic eigenvector, with the coarse full-disk bound $\|\psi(\lambda)\|\le3$ retained. Put $R=g/(8v)$. On $|\lambda|<R$:

(a) $q\le1/4$, $\|P_\lambda-P_0\|\le1/3$, $\|\psi(\lambda)\|\le2$, and the correct scalar energy identity is

$$E_\lambda=\langle(H_0+\lambda V)\psi(\lambda),\psi_0\rangle=E+\lambda\langle V\psi(\lambda),\psi_0\rangle.$$

(b) Define $S$ by the actual reduced inverse of $H_0-E$ on $QH$, extended by zero on $P_0H$. Then

$$E'(0)=\langle V\psi_0,\psi_0\rangle,\qquad\psi'(0)=-SV\psi_0,\qquad E''(0)=-2\langle VSV\psi_0,\psi_0\rangle.$$

The exact sharp norm estimates are $|E'(0)|\le v$, $\|\psi'(0)\|\le v/g$ and $|E''(0)|\le2v^2/g$. The full complementary spectral subspace, including any continuum, contributes through $S$. The original cubic estimate is preserved:

$$\left|E_\lambda-E-\lambda E'(0)-\frac{\lambda^2}{2}E''(0)\right|\le\frac{Rv\,(|\lambda|/R)^3}{1-|\lambda|/R},\qquad |\lambda|<R.$$

In particular at $|\lambda|=R/2$ its right-hand side is $Rv/4=g/32$. This corrects the arithmetic evaluation, not the radius or general remainder bound. For $|\lambda|\le R/2$ the remainder is at most $2v|\lambda|^3/R^2=128v^3|\lambda|^3/g^2$.

(c) If $v=0$, so $V=0$, then $P_\lambda=P_0$, $E_\lambda=E$ and $\psi(\lambda)=\psi_0$ for all complex $\lambda$. The radius $g/(8v)$ is used only in the $v>0$ branch.

These are mathematical statements for bounded perturbations of a simple gapped eigenvalue. They add neither global separability nor AC.

## Actual source binding and exact premise use

The current repaired `thm-nrqm-controlled-dynamics-contour-perturbation-projection` is used at its full complex disk $q<1$, including its correct contour sign, holomorphic rank-one Riesz projection, one interior spectral value, graph-domain range and real-coupling self-adjoint interpretation. Its estimate is $\|P_\lambda-P_0\|\le q/(1-q)$; no replaced $q/2$ estimate is invoked.

The actual registered `lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus` (raw `ccb8e1953dbe61bb61a44818aca8432c0a7ca01205b096a75039e72c230fd078`) is a CC-alone supplier on arbitrary complex $H$. It gives spectral support, distance resolvent estimates and exact square-integrability domains; its support proof is current step 6.1. It constructs compatible vector-local Cayley spaces rather than selecting a global basis. No AC spectral theorem or separability restriction is a premise here. The existing simple-coefficient carrier still contains the false energy pairing and full-resolvent-at-$E$ notation; it is inspected current context, not an uncritically accepted proof premise. The coefficient derivation below supplies this consumer's necessary instance and was communicated to its assigned author.

## 1. Global-distance Neumann spectral inclusion

Write $t=|\lambda|v$. For **any** $z\in\mathbb C$ with $\operatorname{dist}(z,\sigma(H_0))>t$, the actual CC distance bound gives $R_0(z)$ and $\|\lambda VR_0(z)\|<1$. On $D(H_0)$,

$$z-H_\lambda=(I-\lambda VR_0(z))(z-H_0),\qquad (z-H_\lambda)^{-1}=R_0(z)(I-\lambda VR_0(z))^{-1}.$$

The norm-convergent Neumann inverse maps into $D(H_0)$, and multiplying on each side gives the actual two-sided inverse. Consequently every spectral value of $H_\lambda$ lies in the **one-sided** closed $t$-neighborhood of $\sigma(H_0)$. No self-adjointness of complex $H_\lambda$ or symmetric Hausdorff spectral-distance claim is needed.

The contour supplier gives $|E_\lambda-E|<g/2$. For any other $s\in\sigma(H_0)\setminus\{E\}$,

$$|E_\lambda-s|\ge|s-E|-|E_\lambda-E|>g/2>t\qquad(q<1).$$

In fact their infimum is at least $g-|E_\lambda-E|>g/2$. By spectral inclusion the distance of $E_\lambda$ to $\sigma(H_0)$ is at most $t$; hence it must be its distance to $E$ itself. Thus on the entire original contour disk,

$$\delta(\lambda):=E_\lambda-E,\qquad |\delta(\lambda)|\le|\lambda|v.$$

This establishes the exact bound needed on the closed circle $|\lambda|=R$. It never asserts that points near $E$ are resolvent points merely because they lie inside the gap; the eigenvalue branch occupies that region.

## 2. Actual reduced inverse at $E$ and analytic gauge bounds

Define a bounded real Borel function $b(s)=(s-E)^{-1}$ for $|s-E|\ge g$ and $b(s)=0$ for $|s-E|<g$. Let $S=b(H_0)$. The gap and spectral support imply $SP_0=P_0S=0$, $S=S^*$, $\|S\|\le1/g$. Since $s b(s)$ is bounded, $S$ maps $H$ into $D(H_0)$. The exact domain/calculus identities give

$$(H_0-E)S=Q\quad\text{on }H,\qquad S(H_0-E)=Q\quad\text{on }D(H_0).$$

Equivalently $S_Q=S|_{QH}$ is the actual inverse of $A_Q=(H_0-E)|_{D(H_0)\cap QH}$ on $QH$. This makes sense when $H_0-E$ on the full space is noninvertible. Domain preservation by $P_0,Q$ follows from the same calculus. The restricted domain is $QD(H_0)=D(H_0)\cap QH$ and is dense in $QH$ by projecting a domain-approximating sequence. If $QH=0$, the unique zero-space maps satisfy all the same identities.

For $q<1/2$ put $W=(QVQ)|_{QH}$, $L_\lambda=\lambda W-\delta(\lambda)I_{QH}$. Then $\|L_\lambda S_Q\|\le(|\lambda|v+|\delta|)/g\le q<1/2$. On the actual restricted domain,

$$Q(H_\lambda-E_\lambda)Q=A_Q+L_\lambda=(I+L_\lambda S_Q)A_Q.$$

Its two-sided inverse is

$$B_\lambda=S_Q(I+L_\lambda S_Q)^{-1},\qquad\|B_\lambda\|\le\frac1{g(1-q)}.$$

The rightmost unbounded factor acts first; every other factor is bounded on $QH$, and $B_\lambda$ maps into $QD(H_0)$. Both inverse equations follow directly from $S_QA_Q=I$ and $A_QS_Q=I$. Norm-local convergence of the inverse series and holomorphy of $\delta(\lambda)$ make $B_\lambda$ holomorphic; this does not suppose self-adjointness for complex coupling.

The contour estimate gives $\|P_\lambda-P_0\|\le q/(1-q)<1$, hence $P_\lambda\psi_0\ne0$. If a nonzero interior eigenvector $\xi$ had $P_0\xi=0$, it would lie in the restricted domain and $Q(H_\lambda-E_\lambda)Q\xi=0$, contradicting its inverse. Therefore $P_0P_\lambda\psi_0\ne0$; in the rank-one initial space this says $\langle P_\lambda\psi_0,\psi_0\rangle\ne0$. The denominator is holomorphic because the second argument is the fixed vector $\psi_0$ under the first-variable-linear convention. Hence the gauge vector is norm holomorphic and has eigenvalue $E_\lambda$.

Write $\psi(\lambda)=\psi_0+\chi(\lambda)$, $\chi=Q\psi$. Projecting the exact eigenvalue equation gives

$$\chi=-\lambda B_\lambda QV\psi_0,\qquad\|\chi\|\le\frac{q}{2(1-q)}.$$

Since $\chi\perp\psi_0$, $\|\psi\|^2=1+\|\chi\|^2$. On the whole disk $q<1/2$ this gives $\|\psi\|\le\sqrt5/2<3$, retaining the promised coarse bound $3$ without the false old uniform projection bound. At $q\le1/4$ it gives $\|\chi\|\le1/6$ and $\|\psi\|\le\sqrt{37}/6<2$, proving the public small-disk bound. At zero coupling $B_0=S_Q$ and $\psi(0)=\psi_0$.

## 3. Correct analytic scalar and exact derivatives

Pair the eigenvalue equation in the first argument with the **fixed** second argument $\psi_0$. Its gauge pairing is one, and self-adjointness of $H_0$ gives

$$E_\lambda=\langle H_\lambda\psi(\lambda),\psi_0\rangle=\langle\psi(\lambda),H_0\psi_0\rangle+\lambda\langle V\psi(\lambda),\psi_0\rangle=E+\lambda\langle V\psi(\lambda),\psi_0\rangle.$$

This identity is holomorphic and involves a fixed test vector. The pairing with $\psi(\lambda)$ in both arguments equals $E_\lambda\|\psi(\lambda)\|^2$, which does not equal $E_\lambda$ under intermediate normalization and is generally not holomorphic.

From the norm-holomorphic identity $\chi=-\lambda B_\lambda QV\psi_0$ one obtains $\psi'(0)=-S_QQV\psi_0=-SV\psi_0$, without differentiating an unbounded operator on an uncontrolled norm-analytic curve. The scalar identity immediately gives $E'(0)=\langle V\psi_0,\psi_0\rangle$ and $E''(0)=2\langle V\psi'(0),\psi_0\rangle=-2\langle VSV\psi_0,\psi_0\rangle$. These pairings are finite. Because $V,S$ are self-adjoint, the first and second derivatives are real. Their bounds are $v$, $v/g$ and $2v^2/g$ by operator norm products and $\|\psi_0\|=1$.

If graph analyticity is needed by the coefficient supplier, it follows here from $H_0\psi=E_\lambda\psi-\lambda V\psi$: both $\psi$ and $H_0\psi$ are norm holomorphic, hence the curve is holomorphic in the exact $H_0$ graph norm. No hidden unbounded differentiation premise remains.

The first derivative bound is attained for $V=vI$. The second derivative bound is attained for $H_0=\operatorname{diag}(E,E+g)$ and $V=v\begin{pmatrix}0&1\\1&0\end{pmatrix}$, for which $E''(0)=-2v^2/g$. Thus the sharper coefficient bounds preserve the actual exact coefficients and do not depend on a finite bound-state shortcut in the general setting.

## 4. Full complex-radius Cauchy remainder

The contour eigenvalue is holomorphic on $|\lambda|<g/(2v)$, which contains a neighborhood of the closed radius-$R$ disk. For $f(\lambda)=E_\lambda-E$, §1 gives $|f(\lambda)|\le|\lambda|v$, hence on $|\lambda|=R$ one has $|f|\le Rv$. Apply the actual scalar Cauchy formula and coefficient estimate to $f$ on that circle. If $f=\sum_{k\ge0}c_k\lambda^k$, then $|c_k|\le Rv/R^k$, $c_0=0$, $c_1=E'(0)$ and $c_2=E''(0)/2$. Summing the absolute geometric tail gives

$$\left|f(\lambda)-c_1\lambda-c_2\lambda^2\right|\le\sum_{k\ge3}Rv(|\lambda|/R)^k=\frac{Rv(|\lambda|/R)^3}{1-|\lambda|/R}.$$

This is the complete original cubic bound on its complete complex disk. For $|\lambda|=R/2$, $(1/2)^3/[1-1/2]=1/4$, so the bound is $Rv/4=g/32$. For $|\lambda|\le R/2$ the denominator is at least $1/2$, giving the stated explicit $128v^3/g^2$ cubic constant. There is no appeal to the false interior-exclusion statement or to a complex self-adjoint PVM.

When $v=0$, use $V=0$ directly; the contour projection/eigenvector/eigenvalue are fixed for every complex coupling, and all derivatives and remainders vanish. No division by $v$ is made in that branch.

## Concrete counterexamples to the replaced assertions

1. False gauge energy pairing on the advertised small disk. Take $H=\mathbb C^2$, $H_0=\operatorname{diag}(1,3)$, $E=1$, $g=2$, $V=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and $\lambda=20/99$. Then $v=1$, $R=1/4$, and $\lambda<R$. The interior eigenvalue is $E_\lambda=97/99$ and the gauge vector is $\psi=(1,-1/10)$, since $H_\lambda\psi=(97/99)\psi$ and $\langle\psi,e_1\rangle=1$. Its norm squared is $101/100$. Thus $\langle H_\lambda\psi,\psi\rangle=9797/9900\ne97/99$, while $\langle H_\lambda\psi,e_1\rangle=97/99$ is correct. The old energy identity already fails for real coupling; self-adjointness does not repair intermediate normalization.

2. False interior Neumann exclusion. Take $H_0=\operatorname{diag}(0,1)$, $E=0$, $g=v=1$, $V=\operatorname{diag}(1,0)$ and $\lambda=1/16$. The point $z=1/16$ is an eigenvalue of $H_\lambda$. Yet $|z-E|=1/16<g/2-|\lambda|v=7/16$, precisely the old alleged exclusion region. Here $\|\lambda VR_0(z)\|=1$, so that Neumann series does not converge. The corrected global condition is distance from **all** of $\sigma(H_0)$ greater than $|\lambda|v$.

3. The claimed value of the displayed remainder bound at $R/2$ is arithmetically false: its geometric factor is $1/4$, not $1/8$. The general bound was sound after fixing its spectral-inclusion proof; its evaluated value is $g/32$. This does not claim the bound is attained.

## Owning integration and acceptance boundary

The smallest carrier changes are the public fixed-test-vector energy pairing, explicit corrected $g/32$ evaluation, actual reduced $Q$ inverse, and global-distance exclusion proof. Preserve the repaired contour supplier's full complex disk, the coefficient supplier's full $q<1/2$ analytic gauge and coarse bound $3$, and the remainder item's complete radius $R$ and cubic formula. The coefficient author has the independent unique write scope for its draft. The full reviewer owns prerequisite currency, the two carrier interfaces and all direct/indirect consumers and native capped review decisions.

The actual arbitrary-H CC calculus is production registered; this author read it and binds its exact bytes but grants no new audit. The coefficient carrier is still undergoing its assigned repair; until owning review integrates it, its current false F1/F2/F3/energy passages cannot be relied on merely because this independent local derivation is available. No AC or separability is added. No external source full text was retrieved in this task; repository Statements/proofs and the actual repaired supplier were read. Adjacent exact-rational counterchecks and input hashes are local evidence only.
