
## Statement

Assume the finite-mode assignment with two modes and its ideal number PVM, with AC and $\mathrm{AC}_\omega$ as required by the implementer and completed Fock/tensor suppliers. Write $\mathcal F^{(2)}=\mathcal F_s(\mathbb C^2)$ in the ordered mode basis $(1,0),(0,1)$ and $\mathcal F=\mathcal F_s(\mathbb C)$. The mode-factorization map is the unitary $\mathcal J:\mathcal F^{(2)}\to\mathcal F\widehat\otimes\mathcal F$ determined by $\mathcal J|m,n\rangle=|m\rangle\otimes|n\rangle$. Here $\widehat\otimes$ is the completed Hilbert tensor product, and the one-mode occupation vectors and their products use the same vacuum and mode order. Its unitary extension is proved below. Let $t,r\in\mathbb C$ be dimensionless amplitudes with $|t|^2+|r|^2=1$, and fix the complete unitary mode matrix $C=\begin{pmatrix}t&-\overline r\\r&\overline t\end{pmatrix}$. Use the state-action convention that the passive unitary $U_C$ satisfies $U_C\Omega=\Omega$, $U_Ca_1^*U_C^*=t a_1^*+r a_2^*$, and $U_Ca_2^*U_C^*=-\overline r\,a_1^*+\overline t\,a_2^*$ on the finite-particle core. Put $\eta:=|t|^2$. For $n\in\mathbb N_0$ and $0\le k\le n$, write $\binom nk:=n!/(k!(n-k)!)$. For input $|n,0\rangle$ and $0<\eta<1$, the joint output count law is
$$\mathbb P(k,\ell)=\begin{cases}\binom nk\eta^k(1-\eta)^{n-k},&\ell=n-k,\ 0\le k\le n,\\0,&\text{otherwise}.\end{cases}$$
At $\eta=0$ and $\eta=1$ the joint laws are respectively point masses at $(0,n)$ and $(n,0)$. Thus the first output count is binomial with parameters $(n,\eta)$. For a dimensionless coherent input $|\alpha,0\rangle$ with $|\alpha\rangle=e^{-|\alpha|^2/2}\sum_{n\ge0}\alpha^n|n\rangle/\sqrt{n!}$, define $|\alpha,0\rangle=\mathcal J^*(|\alpha\rangle\otimes|0\rangle)$, equivalently $e^{-|\alpha|^2/2}\sum_{n\ge0}\alpha^n|n,0\rangle/\sqrt{n!}$. The output state under this fixed mode factorization is $\mathcal J U_C|\alpha,0\rangle=|t\alpha\rangle\otimes|r\alpha\rangle$; on $\mathcal F^{(2)}$ it is $\mathcal J^*(|t\alpha\rangle\otimes|r\alpha\rangle)$.

## Statement references

[[post-nrqmx-finite-mode-light-matter-model]]

[[thm-nrqmx-finite-mode-bogoliubov]]

[[lem-nrqmx-finite-mode-fock-schr-identification]]

[[thm-nrqm-fock-and-equilibrium-fixed-mode-number-law]]

[[def-nrqm-measurement-framework-declared-measurements-and-instruments]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

[[lem-nrqm-composites-hilbert-tensor-construction]]

## Facts & Assumptions

**Given:** Two finite oscillator modes with Fock occupation basis $|\mathbf n\rangle$, vacuum $\Omega$, a passive unitary mode matrix $C$ with first column $(t,r)^T$, ideal number PVMs on both output modes, and dimensionless coherent amplitude $\alpha\in\mathbb C$.

[A1] The postulate assigns two finite oscillator modes and their ideal photon-counting PVM, but it asserts no actual beam-splitter device or count record ([[post-nrqmx-finite-mode-light-matter-model]]).

[A2] Assume both AC and $\mathrm{AC}_\omega$. AC is used for the finite-mode Bogoliubov implementer; $\mathrm{AC}_\omega$ is used for the countable Fock basis and coherent-state series. These are mathematical assumptions, not physical inputs ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] The two-mode occupation vectors $|n_1,n_2\rangle$ form a complete orthonormal basis and
$$a_1|n_1,n_2\rangle=\sqrt{n_1}|n_1-1,n_2\rangle,\quad a_2|n_1,n_2\rangle=\sqrt{n_2}|n_1,n_2-1\rangle,$$
$$a_1^*|n_1,n_2\rangle=\sqrt{n_1+1}|n_1+1,n_2\rangle,\quad a_2^*|n_1,n_2\rangle=\sqrt{n_2+1}|n_1,n_2+1\rangle,$$
with annihilation zero when its corresponding occupation is zero. The creators commute and the annihilators kill $\Omega$ ([[lem-nrqmx-finite-mode-fock-schr-identification]]). The current Step 1 record for this batch-52 Fock–Schrödinger supplier is ready and hash-current; it is an authoring-readiness record, not independent proof approval.

[F2] The finite-mode Bogoliubov statement assumes AC and, for unitary mode matrix $S$ with $V=0$, supplies an implementer $M$ satisfying $M^*aM=Sa$ and $\sum_j\|a_jM\Omega\|^2=0$ ([[thm-nrqmx-finite-mode-bogoliubov]]). Its current Step 1 record is ready and hash-current; it is an authoring-readiness record, not independent proof approval.

[F3] The one-mode coherent vector has the normalized expansion $|\alpha\rangle=e^{-|\alpha|^2/2}\sum_n\alpha^n|n\rangle/\sqrt{n!}$, and the occupation vectors are orthonormal ([[thm-nrqm-fock-and-equilibrium-fixed-mode-number-law]]).

[F4] The ideal outcome law for a declared PVM $P(B)$ is $\mathbb P(B)=\operatorname{tr}(\rho P(B))$; no apparatus realization follows ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]]).

[F5] Under $\mathrm{AC}_\omega$, the completed Hilbert tensor product of two complex Hilbert spaces exists, elementary tensors have norm $\|u\otimes v\|=\|u\|\|v\|$, and products of complete orthonormal families form a complete orthonormal family. [[lem-nrqm-composites-hilbert-tensor-construction]]

## Proof

1.1 The matrix $C$ is unitary because $C^*C=I_2$ follows from $|t|^2+|r|^2=1$. Its transpose $S=C^T$ is also unitary, so $U=S,V=0$ satisfy $UU^*-VV^*=I_2$ and $UV^T=VU^T$. By [F2] the finite-mode Bogoliubov statement supplies an implementer $M$ with $M^*aM=Sa$. Multiplying by $M$ and $M^*$ gives $MaM^*=S^{-1}a$; taking adjoints gives $Ma^*M^*=\overline{S}^{-1}a^*=S^Ta^*=Ca^*$ because $S$ is unitary and $S^T=C$. These identities hold on the transported finite-particle core. [given, A2, F2, construct, algebra]

2.1 The transformed vacuum has $\sum_{j=1}^2\|a_jM\Omega\|^2=0$ by [F2], so $a_1M\Omega=a_2M\Omega=0$. Expanding $M\Omega$ in the complete occupation basis [F1], the equation $a_1\psi=0$ forces every coefficient with first occupation $n_1>0$ to vanish by the ladder formula; $a_2\psi=0$ then forces every coefficient with $n_2>0$ to vanish. Hence $M\Omega=e^{i\phi}\Omega$ for some real $\phi$. Replacing $M$ by $U_C=e^{-i\phi}M$ preserves the conjugation identities and gives $U_C\Omega=\Omega$. [F1, F2, step 1.1, algebra]

3.1 For $|n,0\rangle=(a_1^*)^n\Omega/\sqrt{n!}$, repeated use of the creation identity in [F1], the conjugation identity from step 1.1, and $U_C\Omega=\Omega$ from step 2.1 give $U_C|n,0\rangle=(t a_1^*+r a_2^*)^n\Omega/\sqrt{n!}=\sum_{k=0}^n\sqrt{\binom nk}t^k r^{n-k}|k,n-k\rangle$. The coefficient follows by choosing which $k$ of the $n$ commuting creation factors contribute $a_1^*$ and using $|k,n-k\rangle=(a_1^*)^k(a_2^*)^{n-k}\Omega/\sqrt{k!(n-k)!}$. [F1, step 1.1, step 2.1, construct, algebra]

4.1 Orthogonality of the output occupation basis makes the joint ideal number-count probability the squared modulus of the coefficient in step 3.1. Since $|t|^2=\eta$ and $|r|^2=1-\eta$, for $0<\eta<1$ this is the displayed binomial law; at the endpoints the expansion has a single surviving basis vector. The declared number PVM and its Born rule [A1, F4] assign these probabilities. [A1, F4, step 3.1, algebra]

5.1 By [F1, F3, F5], the families $|m,n\rangle$ and $|m\rangle\otimes|n\rangle$ are complete orthonormal families in $\mathcal F^{(2)}$ and $\mathcal F\widehat\otimes\mathcal F$, respectively. On finite sums define $\mathcal J_0\sum c_{mn}|m,n\rangle=\sum c_{mn}|m\rangle\otimes|n\rangle$; orthonormality makes its squared norm $\sum|c_{mn}|^2$, so it is well defined and inner-product preserving. For $\psi\in\mathcal F^{(2)}$, approximate by finite sums $\psi_j$ and define $\mathcal J\psi=\lim_j\mathcal J_0\psi_j$. The norm identity makes the images Cauchy in the complete product and the limit independent of the approximating sequence; it preserves linearity, norm and inner product. Its range is closed: if $\mathcal J\psi_j$ converges, the same norm identity makes $\psi_j$ Cauchy in the complete Fock space, so its limit maps to that range limit. The range contains the complete product family and hence is dense, so it is the whole product. This proves that $\mathcal J$ is unitary, uniquely fixed by the occupation map, with $\mathcal J\Omega=|0\rangle\otimes|0\rangle$. The coherent input series converges by [F3] and this unitary identification. Apply the bounded unitary $U_C$ to its norm-convergent partial sums. Each output occupation coefficient has only one contributing input total $n=k+\ell$; step 3.1 gives it as $e^{-|\alpha|^2/2}\alpha^{k+\ell}t^kr^\ell/\sqrt{k!\ell!}$. The product of the two norm-convergent coherent series exists in the completed product by [F5]; approximating each factor by finite partial sums is legitimate since $\|u\otimes v-u'\otimes v'\|\le\|u-u'\|\|v\|+\|u'\|\|v-v'\|$. Its product-basis coefficients are the same, because $|t\alpha|^2+|r\alpha|^2=|\alpha|^2$. Completeness of that basis therefore proves $\mathcal J U_C|\alpha,0\rangle=|t\alpha\rangle\otimes|r\alpha\rangle$, retaining the exact vacuum phase and port convention. [A2, F1, F3, F5, step 3.1, algebra] ∎

## Remarks

The state-action convention fixes which amplitude is called $t$ and which output is called the first port. The literature often displays the inverse Heisenberg transformation; the transpose relation in step 1.1 matches that convention. In the diagram, each line denotes a bosonic mode, and the box denotes the declared two-mode unitary. The number labels are Fock occupations, not photon positions.

```tikz
\begin{tikzpicture}[>=stealth,baseline=(current bounding box.center)]
\node (g) at (0,0.8) {$|n\rangle_1$};
\node (v) at (0,0) {$|0\rangle_2$};
\node[draw,minimum width=1.2cm,minimum height=1cm] (u) at (1.8,0.4) {$U_C$};
\node (m1) at (3.8,1.1) {mode 1};
\node (m2) at (3.8,-0.3) {mode 2};
\draw[->] (g) -- (u);
\draw[->] (v) -- (u);
\draw[->] (u) -- (m1);
\draw[->] (u) -- (m2);
\end{tikzpicture}
```

The two input labels are the separate mode states whose product is $|n,0\rangle$; the outgoing lines label the two modes after the joint unitary. The diagram does not depict a detector, its efficiency, or a physical laboratory layout; the count distribution follows from the proof and the assigned number PVM.

