# Proposed CC repair: degenerate Feshbach error

Research-only response to `second-consumer-scope-request.md`, exact item `thm-nrqm-controlled-dynamics-degenerate-feshbach-error`. The sole reviewer/integrator is `physics_spectral_repair_successor`. No production item, mirror, import, manifest, native hold or acceptance is changed. The adjacent evidence binds the inspected carrier and actual registered arbitrary-H primitive; this draft is neither a production dependency nor independent mathematical acceptance.

## Public claim retained

Assume CC. Let $H$ be an **arbitrary** complex Hilbert space, $H_0=H_0^*$ densely defined on $D(H_0)$, and $E\in\mathbb R$ an isolated eigenvalue of finite multiplicity $r\ge1$ such that $\operatorname{dist}(E,\sigma(H_0)\setminus\{E\})\ge g>0$. Let $P$ be the orthogonal projection onto $\ker(H_0-E)$, $Q=I-P$, and $V=V^*\in\mathcal B(H)$, $v=\|V\|>0$. Let $|\lambda|v<g/4$ and suppose $H_\lambda=H_0+\lambda V$ is self-adjoint on exactly $D(H_0)$. The parameter is real: symmetry of the sum gives $\lambda V=\bar\lambda V$ on the dense domain, hence on $H$ by boundedness; $V\ne0$ forces $\lambda=\bar\lambda$. Stating real $\lambda$ explicitly only records this existing implied hypothesis.

For every real $z$ satisfying $|z-E|+|\lambda|v\le g/2$, define $T_\lambda(z)=Q(H_\lambda-z)Q$ as an operator **on $QH$**, with domain $QD(H_0)=D(H_0)\cap QH$. Then:

(a) $T_\lambda(z)$ has a bounded inverse $B(z):QH\to QD(H_0)$, with $\|B(z)\|\le4/g$.

(b) If $H_\lambda\psi=z\psi$ and $\psi\ne0$, then $\varphi=P\psi\ne0$, $\chi=Q\psi=-\lambda B(z)QVP\varphi$, and

$$[EP+\lambda PVP-\lambda^2PVQB(z)QVP]\varphi=z\varphi.$$

(c) Each such eigenvalue satisfies

$$\operatorname{dist}(z,E+\lambda\operatorname{spec}_{PH}(PVP))\le4\lambda^2v^2/g.$$

Here the finite spectrum is on $PH$, not the full-space operator with a spurious zero from $QH$. All finite degeneracies $r$ are retained. No eigenvalue is asserted to exist by this conditional conclusion, and no eigenvector of $PVP$ is identified with an eigenvector of $V$.

## Exact actual CC arbitrary-H calculus premise

Use the newly registered actual carrier `items/lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus.md`, whose complete Statement and proof were read. Its Statement assumes **CC alone** for arbitrary complex Hilbert $H$, with no separability or supplied-basis hypothesis. Steps 1.1–5.1 construct compatible finite-tuple Cayley subspaces and assemble their uniquely determined local calculus, including exact global unbounded domains; step 6.1 proves concentration on the spectrum, the nonzero-neighborhood characterization and distance resolvent bound. Its actual numbered support step is **6.1**, though the successor's initial handoff called it 5.2. No generic AC spectral theorem is used here.

The exact needed conclusions are a PVM $E_{H_0}$, $D(H_0)=\{u:\int t^2d\mu_u<\infty\}$, bounded Borel product/adjoint laws and norm bounds, and PVM concentration on $\sigma(H_0)$. On the singleton $\{E\}$ the representation immediately identifies $E_{H_0}(\{E\})$ with the projection onto $\ker(H_0-E)$: a vector supported on that atom has finite second moment and eigenvalue $E$, while the exact square-integral residual identity forces every eigenvector's measure onto the atom. The proof below derives the specific reduced inverse from these conclusions and checks its domain explicitly.

The evidence binds this **actual registered carrier**, not only its earlier research proposal. The successor reports owning focused review and local checks complete but whole-cone/native acceptance held. This research draft records its mathematical premise and does not grant that remaining acceptance. The entire ambient Hilbert space remains arbitrary; the proof never chooses a basis outside the already finite-dimensional $PH$.

## Reduced resolvent, including exactly $z=E$

Apply that calculus to $H_0$. Then $P=E_{H_0}(\{E\})$, $PH\subset D(H_0)$, $H_0P=EP$, and $Q$ preserves the domain and commutes with $H_0$ there. Hence $QD(H_0)=D(H_0)\cap QH$. Let $A_Q=H_0|_{D(H_0)\cap QH}$ on $QH$. It is self-adjoint, by the following direct restriction argument: $Q$ commutes with the full nonreal resolvents, whose restrictions give two-sided inverses of $A_Q\pm i$ on its dense domain; symmetry and the two-surjective-range adjoint proof then give self-adjointness. Its spectral support is contained in $\sigma(H_0)\setminus\{E\}$, because the gap projection $E_{H_0}((E-g,E+g))$ is $P$; in particular $E$ is in its resolvent set.

For $|z-E|\le g/2$ define a bounded Borel multiplier on the full real line by

$$b_z(t)=\begin{cases}(t-z)^{-1},&|t-E|\ge g,\\0,&|t-E|<g.\end{cases}$$

The values on endpoints absent from the spectral support do not matter. On the $Q$-spectral support it equals $(t-z)^{-1}$ with absolute value at most $(g-|z-E|)^{-1}\le2/g$. Moreover $t b_z(t)$ is bounded, so $b_z(H_0)$ maps into $D(H_0)$. Put

$$R_Q(z)=b_z(H_0)|_{QH}:QH\longrightarrow QD(H_0).$$

The multiplier identities show $(A_Q-z)R_Q(z)=I_{QH}$ and $R_Q(z)(A_Q-z)=I$ on $QD(H_0)$; hence it is the actual reduced resolvent, with $\|R_Q(z)\|\le2/g$. Its self-adjointness for real $z$ follows from the real multiplier. This construction is valid when $z=E$: it never uses the nonexistent full resolvent $(H_0-E)^{-1}$. If $QH=\{0\}$, all these are the unique maps of the zero space and the inverse equations still hold, since its identity is its zero map.

## Correct Neumann factorization and all domain checks

Let $W=(QVQ)|_{QH}$, a bounded self-adjoint operator on $QH$ with norm at most $v$, and $T_0(z)=A_Q-z$. On exactly $QD(H_0)$,

$$T_\lambda(z)=T_0(z)+\lambda W=(I_{QH}+\lambda W R_Q(z))T_0(z).$$

The order is essential: $R_Q(z)T_0(z)u=u$ on the domain. The existing carrier places $T_0$ on the left of $I+\lambda W R_Q$, which neither gives this product identity nor assures its second factor maps the domain into itself. Here the rightmost unbounded factor is applied first, and all other operators are bounded on $QH$.

Set $S_z=I+\lambda W R_Q(z)$. The assumption gives $\|\lambda W R_Q(z)\|\le2|\lambda|v/g<1/2$. Therefore $S_z^{-1}=\sum_{j\ge0}(-\lambda W R_Q(z))^j$ converges in norm, and

$$B(z)=R_Q(z)S_z^{-1},\qquad\|B(z)\|\le\frac{2/g}{1-2|\lambda|v/g}\le4/g.$$

For $f\in QH$, $B(z)f\in QD(H_0)$ and $T_\lambda(z)B(z)f=S_zT_0(z)R_Q(z)S_z^{-1}f=f$. Conversely for $u\in QD(H_0)$, $B(z)T_\lambda(z)u=R_Q(z)S_z^{-1}S_zT_0(z)u=u$. These prove actual two-sided invertibility and the asserted domain. Since $T_\lambda(z)$ is symmetric for real $z,\lambda$, for $f=T_\lambda u$, $h=T_\lambda w$ its inverse satisfies $\langle Bf,h\rangle=\langle u,T_\lambda w\rangle=\langle T_\lambda u,w\rangle=\langle f,Bh\rangle$. Surjectivity makes this identity hold for all $f,h\in QH$, so the bounded $B(z)$ is self-adjoint.

## Exact finite matrix equation and error

Let $\psi\in D(H_0)$ solve $H_\lambda\psi=z\psi$, $\psi\ne0$. The projections preserve the domain, so $\varphi=P\psi\in PH\subset D(H_0)$ and $\chi=Q\psi\in QD(H_0)$. Applying $Q$ gives $T_\lambda(z)\chi=-\lambda QVP\varphi$, hence $\chi=-\lambda B(z)QVP\varphi$. If $\varphi=0$, the same equation and invertibility give $\chi=0$, contradiction. Applying $P$ and using $PH_0=EP$ on the domain gives

$$EP\varphi+\lambda PVP\varphi+\lambda PVQ\chi=z\varphi,$$

and substitution proves (b). Here $B(z)$ is only on $QH$; the surrounding $Q$ maps make every displayed product typed correctly.

On the finite-dimensional $PH$ put $M_0=E I_{PH}+\lambda(PVP)|_{PH}$ and $K_z=-\lambda^2(PVQ)B(z)(QVP)|_{PH}$. The latter is Hermitian because $B(z)=B(z)^*$, $(QVP)^*=PVQ$ and $\lambda$ is real. Its norm is at most $4\lambda^2v^2/g$. The finite equation is $(M_0+K_z)\varphi=z\varphi$.

A finite-dimensional Hermitian matrix has an orthonormal eigenbasis by finite-dimensional diagonalization; this involves no infinite choice or arbitrary-H spectral theorem. In that basis, for every $\varphi\in PH$,

$$\|(M_0-z)\varphi\|^2=\sum_{j=1}^r|E+\lambda\mu_j-z|^2|\langle\varphi,e_j\rangle|^2\ge\operatorname{dist}(z,E+\lambda\operatorname{spec}_{PH}(PVP))^2\|\varphi\|^2.$$

But $(M_0-z)\varphi=-K_z\varphi$, so its norm is at most $4\lambda^2v^2\|\varphi\|/g$. Divide by $\|\varphi\|>0$ to obtain (c). This direct residual inequality replaces the unnecessary generic Weyl-inequality citation while retaining the full displayed constant and degeneracy. The case $\lambda=0$ is included and gives the exact equality $z=E$ whenever the conditional eigenvalue hypothesis holds.

## Integration and unresolved obligations

Required production changes are exact: replace the AC PVM premise by the actual registered arbitrary-H CC primitive; define the inverse on $QH$ through $R_Q(z)$, including $z=E$; correct the Neumann factor order; prove self-adjointness of $B(z)$ and use the finite residual estimate. The rank-one contour supplier is not needed for this argument and must not constrain $r$. The unrelated norm-Dyson supplier is also unused. The successor owns exact dependency cleanup, proof contracts, aliases/consumer closure, source fidelity and native hold decisions; this draft makes none of those changes.

Remaining owning obligation: the arbitrary-H primitive is now actually registered and the successor reports focused review/checks complete; whole-cone/native acceptance remains held. The successor must bind its exact current bytes and supplier closure to the integrated Feshbach dependency/contract and complete all native consumer obligations. This draft records no independent audit or native acceptance. This repair requires neither global separability nor AC, and no scope permission to add them is requested. All original public parts, all finite multiplicities and the constant $4/g$ and $4\lambda^2v^2/g$ remain.

No external authoritative full text was fetched in this task; repository claim/proof and research prerequisite text were read. Adjacent exact matrix checks test factor order and the $z=E$ reduced-space construction; they are not a proof of the arbitrary-H analytic calculus or an independent review.
