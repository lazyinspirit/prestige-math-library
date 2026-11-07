---
dependency_level: 11
id: lem-ray-hecke-signed-gaussian-theta-transformation
kind: lemma
title: The full signed primitive Hecke class theta transformation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-ray-hecke-ideal-number-residue-gauss-reassembly
- lem-ray-class-character-finite-part-decomposition
- lem-primitive-ray-class-hecke-theta-transformation
- thm-poisson-summation-for-a-full-rank-lattice
- lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization
- lem-complex-integration-by-parts-on-intervals-and-decaying-lines
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- cor-c-one-change-of-variables-for-l-one-functions
- thm-covolume-of-an-ideal-lattice
- thm-discriminant-is-the-norm-of-the-different
- lem-trace-dual-of-a-fractional-ideal
- thm-principal-ideal-norm-is-absolute-field-norm
- thm-ideal-norm-is-multiplicative
- thm-number-field-integral-ideal-factorisation-in-zf
- def-axiom-of-choice
- def-countable-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
axiom_use: Assume AC and Countable Choice. Choice is inherited from the actual number-field, unit, lattice
  and integration suppliers; no cited external theorem is imported.
sources:
  references:
  - title: Jürgen Neukirch, Algebraic Number Theory, Chapter VII
    url: https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf
    locator: §7, Lemma7.6 and Theorem7.7, printed489–492; full local finite-order specialization below.
---

## Statement

Assume AC and Countable Choice, and use the ideal-number data $E,q,M,D,A_i,\phi,\psi_\chi,\tau_\chi$ of the ideal-number Gauss lemma. Enumerate the $r_1+r_2$ archimedean places with $d_i=1$ at a real place and $d_i=2$ at a complex place; put $n=\sum_i d_i$ and $e=\sum_{i\text{ real}}\epsilon_i$. Write $N(y)=\prod_i y_i^{d_i}$ for $y_i>0$, $y^\epsilon=\prod_{i\text{ real}}y_i^{\epsilon_i}$, and $a^\epsilon=\prod_{i\text{ real}}a_i^{\epsilon_i}$. For an ordinary class $C$, define
$$\Theta_{C,\chi}(y)=c_C+\sum_{\substack{a\in E,\ q(a)\text{ integral}\\[q(a)]=C,\ (q(a),\mathfrak m_0)=1}}\psi_\chi(a)a^\epsilon\exp\!\left(-\pi\sum_i d_i|a_i|^2y_i/A_i\right),$$
where the sum is over nonzero ideal numbers, not unit-orbits, and $c_C=\chi(C)$ if $\mathfrak m_0=\mathcal O_K$ and all $\epsilon_i=0$, and $c_C=0$ otherwise. In the first case $\chi$ factors through the ordinary class group. Put $C^\#=[\mathfrak m_0\mathfrak D_K]C^{-1}$. Then the series converges absolutely and locally uniformly on the positive orthant and
$$\Theta_{C,\chi}(y^{-1})=W_\chi N(y)^{1/2}y^\epsilon\Theta_{C^\#,\bar\chi}(y),\qquad W_\chi=i^{-e}\phi(MD)\tau_\chi/\sqrt{N\mathfrak m_0}.$$
The scalar is independent of $C$, has absolute value one and satisfies $W_\chi W_{\bar\chi}=1$. For every unit $u$,
$$\Theta_{C,\chi}((|u_i|^2y_i)_i)=\left(\prod_{i\text{ real}}|u_i|^{-\epsilon_i}\right)\Theta_{C,\chi}(y).$$

## Facts & Assumptions

**Given:** The data and choice branch in the Statement.

[F1] The ideal-number extension, residue cosets, finite trace Gauss reassembly, and its scalar product identity hold. [[lem-ray-hecke-ideal-number-residue-gauss-reassembly]]

[F2] Full-lattice Poisson summation holds for Schwartz functions, including translated lattices. The finite residue-coset proof applies it one coset at a time. [[thm-poisson-summation-for-a-full-rank-lattice]] [[lem-primitive-ray-class-hecke-theta-transformation]]

[F3] The Gaussian transform with exponent $-2\pi i\langle v,\xi\rangle$ is explicit; polynomial times Gaussian is integrable, Fubini and linear substitution apply, and integration by parts on decaying lines is valid. [[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]] [[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] [[cor-c-one-change-of-variables-for-l-one-functions]]

[F4] An integral ideal's usual Minkowski covolume is $2^{-r_2}\sqrt{|d_K|}N\mathfrak a$, and its trace dual is $(\mathfrak a\mathfrak D_K)^{-1}$. Norms multiply, principal norms are absolute field norms, and $N\mathfrak D_K=|d_K|$. [[thm-covolume-of-an-ideal-lattice]] [[lem-trace-dual-of-a-fractional-ideal]] [[thm-principal-ideal-norm-is-absolute-field-norm]] [[thm-ideal-norm-is-multiplicative]] [[thm-discriminant-is-the-norm-of-the-different]]

[F5] Principal character values have the finite/sign decomposition. [[lem-ray-class-character-finite-part-decomposition]]

[A1] AC and CC are retained for the actual lattice and integration suppliers. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

1.1 Give $V=\mathbb R^{r_1}\times\mathbb C^{r_2}$ the trace-compatible inner product $\langle v,w\rangle=\sum_{i\text{ real}}v_iw_i+2\sum_{j\text{ complex}}\operatorname{Re}(v_j\overline{w_j})$, with measure $dv=\prod_{i\text{ real}}dv_i\prod_{j\text{ complex}}2\,d\operatorname{Re}v_j\,d\operatorname{Im}v_j$. Scaling the two real coordinates of each complex place by $\sqrt2$ is an isometry to standard $\mathbb R^n$ and carries this measure to ordinary Lebesgue measure. Consequently [F2] applies in exactly this normalization. For every fractional ideal, [F4] gives covolume $\sqrt{|d_K|}N\mathfrak a$ in this measure: clear an integer denominator, apply the integral-ideal result, and divide the covolume by that integer's $n$th power. The dual is the complex-conjugated embedding of $(\mathfrak a\mathfrak D_K)^{-1}$. [A1, F2, F4, algebra]

2.1 Choose an integral $a_0\in E$ prime to the modulus with ideal class $C$ and put $\mathfrak a=q(a_0)$. Every nonzero ideal number in that class with integral ideal is uniquely $a_0\alpha$ with $0\ne\alpha\in\mathfrak a^{-1}$. Since $\mathfrak a$ is integral prime to $\mathfrak m_0$, the natural residue map identifies $\mathfrak a^{-1}/\mathfrak m_0\mathfrak a^{-1}$ with $\mathcal O_K/\mathfrak m_0$, using the generator $1$: write $1=u+v$ with $u\in\mathfrak a$, $v\in\mathfrak m_0$ to obtain $\mathfrak a^{-1}=\mathcal O_K+\mathfrak m_0\mathfrak a^{-1}$, and prime valuations give the kernel $\mathfrak m_0$. Thus the weight is $\psi_\chi(a_0)\chi_f(\alpha)a_0^\epsilon\alpha^\epsilon$. This is a finite sum of polynomial-Gaussian lattice-coset series, hence absolutely and locally uniformly convergent. Indeed an invertible lattice basis bounds the number of points of radius at most $R$ by $O((1+R)^n)$, and the positive diagonal Gaussian coefficients have a positive lower bound on each compact parameter set. [F1, F2, F4, F5, step 1.1, algebra, choose]

2.2 For $h>0$, integration by parts in [F3] gives $\widehat{x e^{-\pi h x^2}}(\xi)=-i h^{-3/2}\xi e^{-\pi\xi^2/h}$: use $(e^{-\pi h x^2})'=-2\pi h x e^{-\pi h x^2}$ and the vanishing boundary term. The unweighted real transform is $h^{-1/2}e^{-\pi\xi^2/h}$. At a complex place the transform of $e^{-2\pi h|z|^2}$ with the measure and pairing of step 1.1 is $h^{-1}e^{-2\pi|\xi|^2/h}$ by its two real factors. Fubini therefore gives, for $h_i>0$, the transform of $\alpha^\epsilon e^{-\pi\sum_i d_i h_i|\alpha_i|^2}$ as $$i^{-e}\left(\prod_i h_i^{-d_i/2}\right)\left(\prod_{i\text{ real}}h_i^{-\epsilon_i}\right)\xi^\epsilon e^{-\pi\sum_i d_i|\xi_i|^2/h_i}.$$ Conjugating complex coordinates of the dual point does not change this formula because the polynomial occurs only at real places. [F3, step 1.1, algebra]

3.1 Apply [F2] to each residue coset of $\mathfrak m_0\mathfrak a^{-1}$ in step 2.1, with $h_i=|(a_0)_i|^2/(A_i y_i)$, to transform $\Theta_{C,\chi}(y^{-1})$. Dual frequencies are $\gamma\in\mathfrak a(\mathfrak m_0\mathfrak D_K)^{-1}$. Put $b=(MD/a_0)\gamma$; then $q(b)$ is integral and its class is $C^\#$, and every such $b$ arises once. The finite coefficient, including $\psi_\chi(a_0)$, is exactly $T_\chi(b)$ of [F1], because $a_0r\,b/(MD)=r\gamma$ for residue representatives $r$. By [F1] it vanishes unless $q(b)$ is prime to the modulus and otherwise equals $\overline{\psi_\chi(b)}\tau_\chi$. The determinant factor divided by the covolume is $$\frac{\prod_i h_i^{-d_i/2}}{\sqrt{|d_K|}N\mathfrak m_0/N\mathfrak a}=\frac{N(y)^{1/2}}{\sqrt{N\mathfrak m_0}},$$ since $\prod_i A_i^{d_i}=N(\mathfrak m_0\mathfrak D_K)=|d_K|N\mathfrak m_0$. [F1, F2, F4, step 1.1, step 2.1, step 2.2, algebra]

4.1 The remaining real polynomial factor satisfies $$a_0^\epsilon\left(\prod_{i\text{ real}}h_i^{-\epsilon_i}\right)\gamma^\epsilon=b^\epsilon y^\epsilon\phi(a_0)^2\phi(MD)^{-1}.$$ Because $a_0b/(MD)=\gamma\in K^\times$, its real phase has square $1$, so $\phi(a_0)^2\phi(b)^2=\phi(MD)^2$. Also $\overline{\psi_\chi(b)}=\psi_{\bar\chi}(b)\phi(b)^2$. Combining these two identities with step 3.1 leaves exactly the class-independent scalar $i^{-e}\phi(MD)\tau_\chi/\sqrt{N\mathfrak m_0}$ and the asserted transformed theta series. If a frequency is zero and a parity is odd, its polynomial is zero. For $\mathfrak m_0\ne\mathcal O_K$ the zero-frequency Gauss sum vanishes by primitivity. In the remaining case all parities vanish and the finite modulus is $\mathcal O_K$; the original lattice sum includes its zero term $\chi(C)$. Here $W_\chi=\chi(\mathfrak D_K)$ and $W_\chi\bar\chi(C^\#)=\chi(C)$, so the same formula holds including zero terms. This explains the class-character constants rather than assigning them the value $1$ for a nontrivial unramified class character. [F1, step 2.2, step 3.1, algebra]

5.1 The norm and product identities in [F1] give $|W_\chi|=1$ and $W_\chi W_{\bar\chi}=i^{-2e}(-1)^e=1$. Finally replace $a$ by $au$ in the original theta series. The ideal and its character do not change, and $\psi_\chi(a)a^\epsilon=\chi(q(a))\prod_{i\text{ real}}|a_i|^{\epsilon_i}$, so the replacement multiplies that weight by $\prod_{i\text{ real}}|u_i|^{\epsilon_i}$. This proves the unit covariance. In the only case with a zero term the same factor is $1$. [F1, F5, step 2.1, step 4.1, algebra] ∎ 