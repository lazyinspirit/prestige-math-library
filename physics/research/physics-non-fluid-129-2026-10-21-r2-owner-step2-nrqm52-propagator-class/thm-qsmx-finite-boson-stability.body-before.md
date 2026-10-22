
## Statement

Assume the Axiom of Choice and Countable Choice. Let $r\geq1$,
$\hbar>0$ in joule-seconds, $\beta>0$ in inverse joules, $c\in\mathbb R$ in
joules, and let $G=G^T$ be a strictly positive real $2r\times2r$ matrix
whose entries have units of inverse seconds. Assume $(U,V,\omega_1,\ldots,\omega_r)$
is a finite diagonalization certificate for $G$ as defined earlier, with
each $\omega_j>0$ in inverse seconds. Let $H_{G,c}^{(0)}$ be the symmetric
quadratic operator on the stated Schwartz domain. Then its graph closure
$H:=\overline{H_{G,c}^{(0)}}$ exists and is self-adjoint, and its finite-mode
Gibbs partition sum is
$$Z_\beta:=\operatorname{Tr}(e^{-\beta H})=e^{-\beta c}\prod_{j=1}^{r}\left[2\sinh\!\left(\frac{\beta\hbar\omega_j}{2}\right)\right]^{-1}\in(0,\infty),\qquad \sinh x:=\frac{e^x-e^{-x}}{2}.$$
The matrix $G$ acts on the finite grouped quadratures; the bosonic Fock
space remains infinite-dimensional at each $r\geq1$. This conditional
finite-mode conclusion neither proves that every positive $G$ has a
diagonalization certificate nor asserts infinite-mode implementability,
interacting depletion bounds, or superfluidity.

## Statement references

[[def-qsmx-finite-boson-quadratic-form]]

[[thm-nrqmx-finite-mode-bogoliubov]]

[[thm-nrqmx-finite-metaplectic-construction]]

[[lem-nrqmx-finite-mode-fock-schr-identification]]

[[lem-qsm-models-diagonal-occupation-trace]]

[[thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]]

[[def-adjoint-of-a-densely-defined-unbounded-operator]]

[[def-densely-defined-closed-and-closable-operator]]

[[thm-unbounded-borel-functional-calculus]]

[[def-trace-class-operator]]

[[def-absolute-value-and-singular-values-of-a-compact-operator]]

[[lem-positive-square-root-of-a-compact-positive-operator]]

## Facts & Assumptions

**Given:** The constants, finite mode count, positive matrix, positive
frequencies, and explicit diagonalization certificate in the Statement.
Assume both Choice principles there.

[A1] [[def-axiom-of-choice]] and [[def-countable-choice]]: adopt both Choice
principles, with Countable Choice used for the diagonal occupation basis and
trace carrier.

[A2] The diagonalization certificate fixes matrices $U,V$ satisfying
$UU^*-VV^*=I_r$ and $UV^T=VU^T$, with grouped symplectic matrix $S_g$ and
$S_g^TGS_g=D_\omega$ as defined in
[[def-qsmx-finite-boson-quadratic-form]]. Every $\omega_j$ is strictly
positive.

[F1] [[def-qsmx-finite-boson-quadratic-form]]: $H_{G,c}^{(0)}$ is the
symmetrically ordered quadratic in grouped quadratures on
$\mathcal U^{-1}\mathcal S(\mathbb R^r)$, and the certificate uses
$D_\omega=\operatorname{diag}(\omega_1,\ldots,\omega_r,\omega_1,\ldots,\omega_r)$.

[F2] [[thm-nrqmx-finite-mode-bogoliubov]]: under AC, $r\geq1$, $\hbar>0$,
and the two displayed identities for $U,V$, there is a unitary implementer
$M$ with $M^*R_gM=S_gR_g$ on the transported Schwartz core. Its authored
finite-mode statement makes no infinite-mode claim.

[F3] [[thm-nrqmx-finite-metaplectic-construction]]: every real finite
symplectic matrix has a normalized implementer whose restriction is a
continuous bijection of Schwartz space, and any other Weyl implementer of
the same matrix differs by a scalar phase. Only the stated finite-mode action
is used here.

[F4] [[lem-nrqmx-finite-mode-fock-schr-identification]]: the product Hermite
functions are a complete orthonormal basis and the finite-mode quadratures
act on them as $\sqrt{\hbar}\,x_j$ and $-i\sqrt{\hbar}\,\partial_{x_j}$.
The proof uses this exact basis and core interface.

[F5] [[lem-qsm-models-diagonal-occupation-trace]]: under Countable Choice,
for a finite bosonic mode set with energies $\epsilon_j$ and
$q_j=e^{-\beta\epsilon_j}$ satisfying $0<q_j<1$, $q_*<1$, and
$\sum_jq_j<\infty$, the diagonal multiplier $\sum_j\epsilon_j n_j$ is
self-adjoint on its maximum weighted $\ell^2$ domain and
$\operatorname{Tr}(e^{-\beta\sum_j\epsilon_jN_j})=\prod_j(1-q_j)^{-1}$.

[F6] [[thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]]:
for a positive trace-class operator, the trace is the sum of its positive
eigenvalues with multiplicity and equals its trace norm.

[F7] [[def-adjoint-of-a-densely-defined-unbounded-operator]]: $g\in D(B^*)$
exactly when $f\mapsto\langle Bf,g\rangle$ is bounded on the dense domain
$D(B)$ in the ambient Hilbert norm; then $B^*g$ is the representing vector.

[F8] [[def-densely-defined-closed-and-closable-operator]]: the graph norm of
$B$ is $(\|f\|^2+\|Bf\|^2)^{1/2}$, a core for a closed operator is a
subdomain dense in that norm, and graph closure is taken in the product
Hilbert space.

[F9] [[thm-unbounded-borel-functional-calculus]]: for self-adjoint $B$ with
spectral measure $E$, a Borel function $u$ defines $u(B)=u(E)$ by spectral
functional calculus; in particular the bounded function $u(x)=e^{-\beta x}$
acts on an eigenvector of eigenvalue $E$ by $e^{-\beta E}$.

[F10] [[def-trace-class-operator]],
[[def-absolute-value-and-singular-values-of-a-compact-operator]], and
[[lem-positive-square-root-of-a-compact-positive-operator]]: trace-class is
summability of singular values. For $\alpha>0$, $|\alpha B|=\alpha|B|$;
for unitary $M$, $|MBM^*|=M|B|M^*$, by uniqueness of the positive square
root. Thus positive scalar multiples and unitary conjugates of a trace-class
operator remain trace class, with the scalar multiple scaling all singular
values by $\alpha$ and the unitary conjugate preserving them.

## Proof
1.1 By [F2], the certificate's matrices give a unitary $M$ satisfying $M^*R_gM=S_gR_g$ on the common transported Schwartz core. By [F3], we may take this implementer to preserve Schwartz space: its normalized metaplectic implementer has that property, and multiplying by a scalar phase leaves $M^*R_gM$ unchanged. [A1, A2, F2, F3, given, algebra]

2.1 Conjugating each symmetrically ordered term of $H_{G,c}^{(0)}$ by $M$ replaces $R_g$ by $S_gR_g$ . Collecting the finite sums gives $$M^*H_{G,c}^{(0)}M=\frac14\sum_{a,b}(S_g^TGS_g)_{ab}(R_{g,a}R_{g,b}+R_{g,b}R_{g,a})+cI.$$ By [A2] this is the diagonal quadratic with coefficient $D_\omega$ on the same core. [A2, F1, step 1.1, algebra]

3.1 On the finite Hermite core put $a_j=(Q_j+iP_j)/\sqrt{2\hbar}$ and $a_j^*=(Q_j-iP_j)/\sqrt{2\hbar}$ . The relation $[Q_j,P_j]=i\hbar I$ gives $Q_j^2+P_j^2=2\hbar(a_j^*a_j+\tfrac12 I)$ by direct multiplication. Consequently the diagonal quadratic is $\sum_j\hbar\omega_j(a_j^*a_j+\tfrac12 I)+cI$ . Write $g_{\mathbf n}\in L^2(\mathbb R^r)$ for the product Hermite basis and set $\phi_{\mathbf n}:=\mathcal U^{-1}g_{\mathbf n}\in\mathcal F_s(\mathbb C^r)$ . Then $\mathcal U\phi_{\mathbf n}=g_{\mathbf n}$ , and the diagonal quadratic has eigenvalue $E_{\mathbf n}=c+\sum_j\hbar\omega_j(n_j+\tfrac12)$ . Denote this diagonal differential expression on $\mathcal S$ by $\widetilde T_\omega^{(0)}$ , and its Fock-space transport on $\mathcal D$ by $T_\omega^{(0)}:=\mathcal U^{-1}\widetilde T_\omega^{(0)}\mathcal U$ . [F1, F4, step 2.1, algebra]

4.1 Put $\epsilon_j=\hbar\omega_j$ and let $A$ be the maximal diagonal multiplier in the basis $(\phi_{\mathbf n})$ with eigenvalues $\sum_j\epsilon_jn_j$ . By [F5], $A$ is self-adjoint on the domain where $\sum_{\mathbf n}|\sum_j\epsilon_jn_j|^2|f_{\mathbf n}|^2<\infty$ . The diagonal operator with eigenvalues $E_{\mathbf n}$ is $A+c_0I$ , where $c_0=c+\tfrac12\sum_j\epsilon_j$ . Its domain is the same: for real $x,c_0$ , $|x+c_0|^2\leq2|x|^2+2|c_0|^2$ and $|x|^2\leq2|x+c_0|^2+2|c_0|^2$ , and each coefficient sequence $(f_{\mathbf n})$ is in $\ell^2$ . For $g\in D((A+c_0I)^*)$ , [F7] says that boundedness of $f\mapsto\langle(A+c_0I)f,g\rangle$ and boundedness of $f\mapsto c_0\langle f,g\rangle$ imply boundedness of $f\mapsto\langle Af,g\rangle$ . Thus $g\in D(A^*)=D(A)$ and $(A+c_0I)^*g=Ag+c_0g$ . Conversely, every $g\in D(A)$ satisfies this adjoint identity, so $T=A+c_0I$ is self-adjoint. Finite Hermite truncations converge in its graph norm, because the tail of $\sum_{\mathbf n}(1+|E_{\mathbf n}|^2)|f_{\mathbf n}|^2$ tends to zero. Thus finite Hermite sums are a core for $T$ in the graph norm of [F8]. [A1, F5, F7, F8, step 3.1, algebra]

5.1 For $\psi\in\mathcal D$ , put $f=\mathcal U\psi\in\mathcal S$ . The coordinate expression $\widetilde T_\omega^{(0)}$ sends $f$ to an $L^2$ function. Integration by parts against each Schwartz Hermite function gives $\langle T_\omega^{(0)}\psi,\phi_{\mathbf n}\rangle =E_{\mathbf n}\langle\psi,\phi_{\mathbf n}\rangle$ ; equivalently, this is the $L^2$ pairing of the differential expression on $f$ with $g_{\mathbf n}=\mathcal U\phi_{\mathbf n}$ . Boundary terms vanish because both functions are Schwartz. For every finite set $F$ of occupation indices, orthogonal projection therefore gives $\sum_{\mathbf n\in F}|E_{\mathbf n}\langle\psi,\phi_{\mathbf n}\rangle|^2 \leq\|T_\omega^{(0)}\psi\|^2$ . These coefficients are square-summable, and completeness of $(\phi_{\mathbf n})$ from [F4] identifies their vector with $T_\omega^{(0)}\psi$ . Hence $\mathcal D\subseteq D(T)$ and the diagonal expression is $T$ on $\mathcal D$ . The finite Hermite sums from step 4.1 lie in $\mathcal D$ because [F1] places each $g_{\mathbf n}$ in $\mathcal S$ , and are graph-norm dense in $D(T)$ ; so the graph closure of this restriction is $T$. [F1, F4, F8, step 3.1, step 4.1, algebra]

6.1 By step 1.1, $M$ and $M^*$ preserve Schwartz space, and by step 2.1 $H_{G,c}^{(0)}=M T_\omega^{(0)}M^*$ there. Step 5.1 gives graph closure $T$ for the diagonal restriction. Conjugation by the unitary $M$ carries the graph and its closure in $\mathcal F_s\oplus\mathcal F_s$ to the graph and closure of $H_{G,c}^{(0)}$ , so $H=\overline{H_{G,c}^{(0)}}=MTM^*$ . This is self-adjoint because $T$ is self-adjoint and $M$ is unitary. [F8, step 1.1, step 2.1, step 5.1, algebra]

7.1 Set $q_j=e^{-\beta\epsilon_j}=e^{-\beta\hbar\omega_j}$ . Since $\beta>0$ and every $\omega_j>0$ , $0<q_j<1$ ; the mode set is finite, so $q_*<1$ and $\sum_jq_j<\infty$ . Apply [F5] to the diagonal number-energy operator $A$ to get $\operatorname{Tr}(e^{-\beta A})=\prod_j(1-q_j)^{-1}<\infty$ . On the occupation basis, $T$ has eigenvalues $E_{\mathbf n}=c_0+\sum_j\epsilon_jn_j$ , so the spectral exponential has positive eigenvalues $e^{-\beta E_{\mathbf n}}=e^{-\beta c_0}\prod_jq_j^{n_j}$ by [F9]. Thus $e^{-\beta T}=e^{-\beta c_0}e^{-\beta A}$ on the occupation basis; [F10] and the trace-class conclusion for $e^{-\beta A}$ from [F5] show that $e^{-\beta T}$ is positive trace class. Its eigenvalue sum is $e^{-\beta c_0}\prod_j(1-q_j)^{-1}<\infty$ by [F5], so [F6] identifies that sum with its trace. By steps 6.1 and 5.1, the vectors $M\phi_{\mathbf n}$ form a complete orthonormal eigenbasis for $H$ with the same eigenvalues; equivalently $e^{-\beta H}=M e^{-\beta T}M^*$ . The unitary invariance in [F10] makes $e^{-\beta H}$ trace class with the same eigenvalue sum, and [F6] gives the same trace. Finally, $$e^{-\beta c_0}\prod_j(1-e^{-\beta\hbar\omega_j})^{-1}=e^{-\beta c}\prod_j\frac{e^{-\beta\hbar\omega_j/2}}{1-e^{-\beta\hbar\omega_j}}=e^{-\beta c}\prod_j\left[2\sinh\!\left(\frac{\beta\hbar\omega_j}{2}\right)\right]^{-1}.$$ Every factor is strictly positive and finite, proving $Z_\beta\in(0,\infty)$ . The only infinite-dimensional Hilbert space used here is the bosonic Fock space for the stated finite number $r$ of modes. [A1, F4, F5, F6, F9, F10, step 4.1, step 6.1, algebra] ∎ 
## Remarks

The current batch 52 records for
[[def-nrqmx-finite-mode-symplectic-data]],
[[lem-nrqmx-finite-mode-fock-schr-identification]],
[[thm-nrqmx-finite-mode-bogoliubov]], and
[[thm-nrqmx-finite-metaplectic-construction]] are ready and hash-current.
I inspected their complete proofs and matched the finite-mode quadrature,
unitary action, and Schwartz-core interfaces used above. The records are
current authoring readiness, not independent proof approval; the theorem
remains conditional on its explicit certificate and hypotheses.
