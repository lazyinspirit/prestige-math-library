---
id: lem-nrqm-driven-dynamics-two-level-rotating-frame
aliases: [nrqm-driven-dynamics-two-level-rotating-frame]
kind: lemma
domain: mathematics
title: "The two-level rotating frame: conjugation identities, the transformed families and invariance of the level populations"
status: published
origin: session
dependency_level: 1
deps: [prop-nrqm-orbital-and-spin-finite-spin-matrices, thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness, thm-algebra-of-derivatives, thm-sine-and-cosine-derivatives, thm-sine-and-cosine-addition-formulas, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-inner-product-space, def-derivative, def-countable-choice]
dependency_roles:
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-derivative: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 7 'Two State Systems', Section 6 'Nuclear Magnetic Resonance', chapter pages 17-18: the rotating-frame state, the transformation H_R = i hbar (d_t U) U^dagger + U H_S U^dagger and the time-independent rotating-frame Hamiltonian for a circularly polarized field"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b27e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf"
verification:
  precheck: pass
---

## Statement

Let $(\sigma_x,\sigma_y,\sigma_z)$ be the Pauli matrices of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e), acting on $\mathbb C^2$ in the orthonormal basis $(e_{\uparrow},e_{\downarrow})$ of that clause, so that $\sigma_z=\operatorname{diag}(1,-1)$, $\sigma_x\sigma_y=i\sigma_z$, $\sigma_y\sigma_z=i\sigma_x$ and $\sigma_z\sigma_x=i\sigma_y$; write $I$ for the identity and let $P_{\uparrow},P_{\downarrow}$ be the orthogonal projections onto $\mathbb Ce_{\uparrow}$ and $\mathbb Ce_{\downarrow}$. Let $\hbar>0$, $\omega,\omega_0,\Omega_1\in\mathbb R$, put $\Delta:=\omega_0-\omega$ and, for $t\in\mathbb R$,
$$R(t):=\cos\!\Bigl(\frac{\omega t}{2}\Bigr)I+i\sin\!\Bigl(\frac{\omega t}{2}\Bigr)\sigma_z .$$
Then:

(a) *Frame.* For every $t$ the matrix $R(t)$ is unitary with $R(0)=I$, the map $R$ is of class $C^{\infty}$ with
$$R'(t)=\frac{i\omega}{2}\,\sigma_zR(t),$$
and $R(t)P_{\uparrow}R(t)^{*}=P_{\uparrow}$, $R(t)P_{\downarrow}R(t)^{*}=P_{\downarrow}$.

(b) *Conjugation.* For every $t$,
$$R(t)\sigma_xR(t)^{*}=\cos(\omega t)\,\sigma_x-\sin(\omega t)\,\sigma_y,\qquad R(t)\sigma_yR(t)^{*}=\sin(\omega t)\,\sigma_x+\cos(\omega t)\,\sigma_y,\qquad R(t)\sigma_zR(t)^{*}=\sigma_z .$$

(c) *Circular drive.* For the family $H_{\mathrm c}(t):=\frac{\hbar}{2}\bigl(\omega_0\sigma_z+\Omega_1(\cos(\omega t)\sigma_x+\sin(\omega t)\sigma_y)\bigr)$ one has, for every $t$,
$$R(t)H_{\mathrm c}(t)R(t)^{*}+i\hbar R'(t)R(t)^{*}=\frac{\hbar}{2}\bigl(\Delta\sigma_z+\Omega_1\sigma_x\bigr),$$
which is a constant Hermitian matrix independent of $t$.

(d) *Linear drive.* For the family $H_{\mathrm l}(t):=\frac{\hbar}{2}\bigl(\omega_0\sigma_z+\Omega_1\cos(\omega t)\sigma_x\bigr)$ put
$$A:=\frac{\hbar}{2}\Bigl(\Delta\sigma_z+\frac{\Omega_1}{2}\sigma_x\Bigr),\qquad B:=\frac{\hbar\Omega_1}{8}\bigl(\sigma_x+i\sigma_y\bigr).$$
Then for every $t$
$$R(t)H_{\mathrm l}(t)R(t)^{*}+i\hbar R'(t)R(t)^{*}=A+e^{2i\omega t}B+e^{-2i\omega t}B^{*},$$
and $\|A\|\le\frac{\hbar}{2}\bigl(|\Delta|+\frac{|\Omega_1|}{2}\bigr)$, $\|B\|=\frac{\hbar|\Omega_1|}{4}$.

(e) *Transformation of the dynamics.* Assume Countable Choice ([[def-countable-choice]]). Let $H:\mathbb R\to\operatorname{End}(\mathbb C^2)$ be continuous with Hermitian values, let $\psi:\mathbb R\to\mathbb C^2$ be of class $C^1$ with
$$i\hbar\psi'(t)=H(t)\psi(t)\qquad(t\in\mathbb R),$$
and put $\psi_R:=R\psi$ and $H^{R}(t):=R(t)H(t)R(t)^{*}+i\hbar R'(t)R(t)^{*}$. Then $\psi_R$ is of class $C^1$ and satisfies $i\hbar\psi_R'(t)=H^{R}(t)\psi_R(t)$ for every $t$; the family $H^{R}$ is continuous with Hermitian values. Consequently, if $U$ is the unitary propagator of the norm-continuous family $H$ supplied by [[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]], then
$$U^{R}(t,s):=R(t)U(t,s)R(s)^{*}\qquad(s,t\in\mathbb R)$$
is the unitary propagator of $H^{R}$: it satisfies $i\hbar\partial_tU^{R}(t,s)=H^{R}(t)U^{R}(t,s)$, $U^{R}(s,s)=I$, the cocycle, and $U^{R}(t,s)^{*}=U^{R}(s,t)$. Moreover for every solution $\psi$ of the $H$-equation, every $t\in\mathbb R$ and both signs $\bullet\in\{\uparrow,\downarrow\}$,
$$\bigl\langle P_{\bullet}\psi(t),\psi(t)\bigr\rangle=\bigl\langle P_{\bullet}\psi_R(t),\psi_R(t)\bigr\rangle .$$

The lemma is a statement of finite-dimensional linear algebra and calculus for the displayed matrices; no physical identification, no measurement and no asymptotic claim is made.

## Facts & Assumptions

**Given:** the Pauli matrices $\sigma_x,\sigma_y,\sigma_z$ on $\mathbb C^2$ in the basis $(e_{\uparrow},e_{\downarrow})$; the projections $P_{\uparrow},P_{\downarrow}$; $\hbar>0$ and $\omega,\omega_0,\Omega_1,\Delta$; the matrix $R(t)$; the families $H_{\mathrm c},H_{\mathrm l}$ and the matrices $A,B$; where clause (e) is used, a continuous Hermitian family $H$ and a $C^1$ solution $\psi$, and Countable Choice.

[F1] **The Pauli matrices.** In the ordered basis $(e_{\uparrow},e_{\downarrow})$ one has $\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $\sigma_y=\begin{pmatrix}0&-i\\ i&0\end{pmatrix}$, $\sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, the matrices are Hermitian, $\sigma_x^2=\sigma_y^2=\sigma_z^2=I$, $\sigma_x\sigma_y=i\sigma_z$, $\sigma_y\sigma_z=i\sigma_x$, $\sigma_z\sigma_x=i\sigma_y$ and $\sigma_i\sigma_j+\sigma_j\sigma_i=2\delta_{ij}I$ for $i,j\in\{x,y,z\}$; products of matrices are computed entrywise-finitely ([[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e)).

[F2] **Complex exponential and trigonometric functions.** For every real $\theta$, $e^{i\theta}=\cos\theta+i\sin\theta$, so $e^{i\theta}=\overline{e^{-i\theta}}$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]); $\sin'=\cos$ and $\cos'=-\sin$ with the chain rule for $t\mapsto\sin(\omega t)$, $t\mapsto\cos(\omega t)$ for constant $\omega$ ([[thm-sine-and-cosine-derivatives]]); and the addition formulas $\cos(u+v)=\cos u\cos v-\sin u\sin v$, $\sin(u+v)=\sin u\cos v+\cos u\sin v$ hold for all real $u,v$, so in particular $\cos(2u)=\cos^{2}u-\sin^{2}u$, $\sin(2u)=2\sin u\cos u$ and $\cos^{2}u+\sin^{2}u=1$ ([[thm-sine-and-cosine-addition-formulas]]).

[F3] **The scalar product rule.** If $f,g:\mathbb R\to\mathbb C$ are differentiable at $t$ — the difference quotients of real and imaginary parts converge, equivalently $(f(t+h)-f(t))/h$ converges in $\mathbb C$ — then $fg$ is differentiable at $t$ with $(fg)'(t)=f'(t)g(t)+f(t)g'(t)$, and sums and constant multiples obey the same rule ([[thm-algebra-of-derivatives]] applied to real and imaginary parts; [[def-derivative]]). Applying this to the finitely many entries of a product of $2\times2$ matrices whose entries are differentiable real functions of $t$ gives the entrywise product rule $(UV)'=U'V+UV'$ for such matrix curves.

[F4] **Unitary propagator of a norm-continuous bounded family.** If $H:\mathbb R\to\operatorname{End}(\mathbb C^2)$ is continuous with Hermitian values then it is norm-continuous with bounded self-adjoint values on every compact interval, and [[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]] supplies a unique family $U(t,s)$ of unitary matrices with $U(s,s)=I$, $U(t,s)U(s,r)=U(t,r)$, $U(t,s)^{*}=U(s,t)$, operator-norm continuity in $(t,s)$, and operator-norm derivative $\partial_tU(t,s)=-\frac{i}{\hbar}H(t)U(t,s)$; for fixed $s$ it is the unique norm-continuous solution of that equation with $U(s,s)=I$ ([[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]] clauses (b), (c), (d); [[def-countable-choice]]).

[F5] **Inner product.** The pairing on $\mathbb C^2$ is linear in the first argument and conjugate-linear in the second, and $\langle Uu,Uv\rangle=\langle u,v\rangle$ for unitary $U$ ([[def-inner-product-space]]); with $\sigma_i$ as in [F1], the projections $P_{\uparrow}=\frac{1}{2}(I+\sigma_z)$ and $P_{\downarrow}=\frac{1}{2}(I-\sigma_z)$ satisfy $P^{2}=P=P^{*}$ and act as the orthogonal projections onto the displayed basis vectors.

## Proof

**Proof technique:** direct; compute the displayed $2\times2$ matrices entrywise, differentiate the frame, and transform the differential equation by the product rule.

**Given:** the data of the Statement and [F1]-[F5].

1.1 [The frame is a diagonal unitary] By [F1], $\sigma_z=\operatorname{diag}(1,-1)$, so [F2] gives $$R(t)=\operatorname{diag}\bigl(e^{i\omega t/2},e^{-i\omega t/2}\bigr)$$ in the basis $(e_{\uparrow},e_{\downarrow})$; hence $R(t)^{*}=\overline{R(t)}=\operatorname{diag}\bigl(e^{-i\omega t/2},e^{i\omega t/2}\bigr)=R(t)^{-1}$ by [F2], so $R(t)$ is unitary with $R(t)R(t)^{*}=R(t)^{*}R(t)=I$ and $R(0)=I$. Since $R$ is diagonal, it commutes with the diagonal projections $P_{\uparrow}=\operatorname{diag}(1,0)$ and $P_{\downarrow}=\operatorname{diag}(0,1)$, so $R(t)P_{\bullet}R(t)^{*}=P_{\bullet}R(t)R(t)^{*}=P_{\bullet}$ for both signs. This proves the unitarity, the initial value and the projection identities of (a). [F1, F2, given, algebra]

1.2 [Derivative of the frame] By [F2] and the chain rule, the entries $t\mapsto e^{\pm i\omega t/2}$ have derivatives $\pm\frac{i\omega}{2}e^{\pm i\omega t/2}$, so $$R'(t)=\operatorname{diag}\Bigl(\frac{i\omega}{2}e^{i\omega t/2},-\frac{i\omega}{2}e^{-i\omega t/2}\Bigr)=\frac{i\omega}{2}\operatorname{diag}\bigl(e^{i\omega t/2},-e^{-i\omega t/2}\bigr).$$ Since $\sigma_zR(t)=\operatorname{diag}(1,-1)\operatorname{diag}(e^{i\omega t/2},e^{-i\omega t/2})=\operatorname{diag}(e^{i\omega t/2},-e^{-i\omega t/2})$ by [F1] and entrywise matrix multiplication, $R'(t)=\frac{i\omega}{2}\sigma_zR(t)$, which completes (a). [F1, F2, algebra]

1.3 [Conjugation identities] Write $r_{\uparrow}:=e^{i\omega t/2}$, $r_{\downarrow}:=e^{-i\omega t/2}$, so $R=\operatorname{diag}(r_{\uparrow},r_{\downarrow})$. Multiplying the displayed $2\times2$ matrices [F1] entrywise, $$R\sigma_xR^{*}=\begin{pmatrix}0&r_{\uparrow}\overline{r_{\downarrow}}\\ r_{\downarrow}\overline{r_{\uparrow}}&0\end{pmatrix},\qquad R\sigma_yR^{*}=\begin{pmatrix}0&-ir_{\uparrow}\overline{r_{\downarrow}}\\ ir_{\downarrow}\overline{r_{\uparrow}}&0\end{pmatrix},\qquad R\sigma_zR^{*}=\sigma_z ,$$ because $\sigma_z$ is diagonal and commutes with $R$. By [F2], $r_{\uparrow}\overline{r_{\downarrow}}=e^{i\omega t/2}e^{i\omega t/2}=e^{i\omega t}=\cos(\omega t)+i\sin(\omega t)$ and $r_{\downarrow}\overline{r_{\uparrow}}=e^{-i\omega t}=\cos(\omega t)-i\sin(\omega t)$. Substituting, the first matrix equals $\cos(\omega t)\sigma_x-\sin(\omega t)\sigma_y$ and the second equals $\sin(\omega t)\sigma_x+\cos(\omega t)\sigma_y$, by the entries displayed in [F1]. This proves (b). [F1, F2, algebra]

2.1 [The circular family] By step 1.3 and the linearity of matrix multiplication, $$R(t)\Bigl(\cos(\omega t)\sigma_x+\sin(\omega t)\sigma_y\Bigr)R(t)^{*}=\cos(\omega t)\bigl(\cos(\omega t)\sigma_x-\sin(\omega t)\sigma_y\bigr)+\sin(\omega t)\bigl(\sin(\omega t)\sigma_x+\cos(\omega t)\sigma_y\bigr)=\bigl(\cos^{2}(\omega t)+\sin^{2}(\omega t)\bigr)\sigma_x=\sigma_x ,$$ the $\sigma_y$ coefficients cancelling, and $\cos^{2}+\sin^{2}=1$ by [F2]. Since $R\sigma_zR^{*}=\sigma_z$ by step 1.3, $$R(t)H_{\mathrm c}(t)R(t)^{*}=\frac{\hbar}{2}\bigl(\omega_0\sigma_z+\Omega_1\sigma_x\bigr),$$ and by step 1.2, $i\hbar R'(t)R(t)^{*}=i\hbar\frac{i\omega}{2}\sigma_zR(t)R(t)^{*}=-\frac{\hbar\omega}{2}\sigma_z$. Adding the two expressions gives $\frac{\hbar}{2}\bigl((\omega_0-\omega)\sigma_z+\Omega_1\sigma_x\bigr)=\frac{\hbar}{2}(\Delta\sigma_z+\Omega_1\sigma_x)$, a constant Hermitian matrix because $\Delta,\Omega_1$ are real and the $\sigma_i$ are Hermitian [F1]. This is (c). [step 1.2, step 1.3, F1, F2, given, algebra]

2.2 [The linear family] Again by step 1.3 and [F2], $$R(t)\bigl(\cos(\omega t)\sigma_x\bigr)R(t)^{*}=\cos^{2}(\omega t)\sigma_x-\sin(\omega t)\cos(\omega t)\sigma_y=\frac{1+\cos(2\omega t)}{2}\sigma_x-\frac{\sin(2\omega t)}{2}\sigma_y ,$$ and $R\sigma_zR^{*}=\sigma_z$, so $$R(t)H_{\mathrm l}(t)R(t)^{*}+i\hbar R'(t)R(t)^{*}=\frac{\hbar}{2}\Bigl(\Delta\sigma_z+\frac{\Omega_1}{2}\sigma_x\Bigr)+\frac{\hbar\Omega_1}{4}\bigl(\cos(2\omega t)\sigma_x-\sin(2\omega t)\sigma_y\bigr)=A+\frac{\hbar\Omega_1}{4}\bigl(\cos(2\omega t)\sigma_x-\sin(2\omega t)\sigma_y\bigr).$$ By [F2], $e^{\pm 2i\omega t}=\cos(2\omega t)\pm i\sin(2\omega t)$, so with $B=\frac{\hbar\Omega_1}{8}(\sigma_x+i\sigma_y)$ one has $$e^{2i\omega t}B+e^{-2i\omega t}B^{*}=\frac{\hbar\Omega_1}{8}\Bigl(e^{2i\omega t}(\sigma_x+i\sigma_y)+e^{-2i\omega t}(\sigma_x-i\sigma_y)\Bigr)=\frac{\hbar\Omega_1}{8}\Bigl(2\cos(2\omega t)\sigma_x-2\sin(2\omega t)\sigma_y\Bigr),$$ which is the displayed remainder; hence the factorised form of (d). Finally $\|A\|=\frac{\hbar}{2}\bigl\|\Delta\sigma_z+\frac{\Omega_1}{2}\sigma_x\bigr\|\le\frac{\hbar}{2}\bigl(|\Delta|+\frac{|\Omega_1|}{2}\bigr)$ because $\sigma_z,\sigma_x$ are Hermitian unitaries [F1], and $\|\sigma_x+i\sigma_y\|=\|2\sigma_+\|=2$ since $\sigma_x+i\sigma_y=\begin{pmatrix}0&2\\0&0\end{pmatrix}$ has operator norm $2$ by [F1]; hence $\|B\|=\frac{\hbar|\Omega_1|}{8}\cdot2=\frac{\hbar|\Omega_1|}{4}$. This is (d). [step 1.2, step 1.3, F1, F2, algebra]

2.3 [Transformation of the equation] Let $H$ and $\psi$ be as in clause (e) and let $t\in\mathbb R$. The entries of $R$ are $C^{\infty}$ by step 1.1 and [F2], those of $\psi$ are $C^1$ by hypothesis, so by the entrywise product rule [F3] the product $\psi_R=R\psi$ is $C^1$ with $$\psi_R'(t)=R'(t)\psi(t)+R(t)\psi'(t)=\frac{i\omega}{2}\sigma_zR(t)\psi(t)+R(t)\Bigl(-\frac{i}{\hbar}H(t)\psi(t)\Bigr),$$ using step 1.2 and the equation $i\hbar\psi'=H\psi$. Multiplying by $i\hbar$, $$i\hbar\psi_R'(t)=\Bigl(-\frac{\hbar\omega}{2}\sigma_z+R(t)H(t)R(t)^{*}\Bigr)\psi_R(t)=H^{R}(t)\psi_R(t) ,$$ since $R(t)^{*}=R(t)^{-1}$ by step 1.1 and $i\hbar R'(t)R(t)^{*}=-\frac{\hbar\omega}{2}\sigma_z$ by step 1.2; the family $H^{R}$ is continuous with Hermitian values because $R$ is continuous unitary, $H$ is continuous Hermitian and $i\hbar R'R^{*}=-\frac{\hbar\omega}{2}\sigma_z$ is constant Hermitian. This proves the first assertion of (e). [step 1.1, step 1.2, F3, given, algebra]

2.4 [The transformed propagator] Let $U$ be the propagator of [F4]. By [F4] and step 1.1, $U^{R}(t,s)=R(t)U(t,s)R(s)^{*}$ is unitary, $U^{R}(s,s)=R(s)R(s)^{*}=I$, and the cocycle and adjoint identities follow from those of $U$ and $R$. For the derivative, [F4] gives operator-norm differentiability of $U(\cdot,s)$, so by the entrywise product rule [F3] applied to the entries of $R(t)U(t,s)R(s)^{*}$, $$\partial_tU^{R}(t,s)=R'(t)U(t,s)R(s)^{*}+R(t)\partial_tU(t,s)R(s)^{*}=\frac{i\omega}{2}\sigma_zU^{R}(t,s)-\frac{i}{\hbar}R(t)H(t)U(t,s)R(s)^{*}=\frac{i\omega}{2}\sigma_zU^{R}(t,s)-\frac{i}{\hbar}R(t)H(t)R(t)^{*}U^{R}(t,s) ,$$ using step 1.2 and $R(t)R(t)^{*}=I$; multiplying by $i\hbar$ gives $i\hbar\partial_tU^{R}(t,s)=\bigl(R(t)H(t)R(t)^{*}-\frac{\hbar\omega}{2}\sigma_z\bigr)U^{R}(t,s)=H^{R}(t)U^{R}(t,s)$ by step 1.1 and the definition of $H^{R}$. Since $U^{R}(\cdot,s)$ is continuous with $U^{R}(s,s)=I$ and $H^{R}$ is norm-continuous with Hermitian values, [F4] identifies $U^{R}(\cdot,s)$ with the unique propagator of $H^{R}$, so all conclusions of the "consequently" clause hold. [step 1.1, step 1.2, F3, F4, given, algebra]

3.1 [Invariance of the level populations] Let $\psi$ be a solution of the $H$-equation and $t\in\mathbb R$. By step 2.3, $\psi(t)=R(t)^{*}\psi_R(t)$; since $R(t)$ is unitary [F5] and $R(t)P_{\bullet}R(t)^{*}=P_{\bullet}$ by step 1.1, $$\bigl\langle P_{\bullet}\psi(t),\psi(t)\bigr\rangle=\bigl\langle P_{\bullet}R(t)^{*}\psi_R(t),R(t)^{*}\psi_R(t)\bigr\rangle=\bigl\langle R(t)P_{\bullet}R(t)^{*}\psi_R(t),\psi_R(t)\bigr\rangle=\bigl\langle P_{\bullet}\psi_R(t),\psi_R(t)\bigr\rangle ,$$ for both signs. This is the final assertion of (e). [step 1.1, step 2.3, F5, algebra] ∎

## Remarks

- **Where the two polarizations differ.** For the circular family the transformed generator is the constant matrix $\frac{\hbar}{2}(\Delta\sigma_z+\Omega_1\sigma_x)$; for the linear family it is its averaged constant matrix $A$, with transverse coefficient $\Omega_1/2$, plus the explicitly displayed counter-rotating term $e^{2i\omega t}B+e^{-2i\omega t}B^{*}$, which is the term dropped in a rotating-wave approximation. The lemma proves the exact identity; the size of the dropped term is bounded on the page that uses it.
- **No assumption on the sign of $\omega$.** The identities hold for every real $\omega$, including $\omega=0$, where $R\equiv I$ and the transformation is trivial; the matrix $H_{\mathrm c}$ reduces to $\frac{\hbar}{2}(\omega_0\sigma_z+\Omega_1\sigma_x)$ in that case.
