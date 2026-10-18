---
id: ex-fibonacci-golden-chain-projectors-and-noninvertibility
kind: example
title: "Fibonacci path projectors and categorical noninvertibility"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 10
deps: [def-anyonic-fusion-path-space, lem-anyonic-fusion-path-basis, thm-anyonic-path-space-is-hilbert-under-unitarity, def-anyonic-local-channel-projector, thm-anyonic-local-channel-projectors-are-orthogonal, def-anyonic-frobenius-schur-sign, lem-anyonic-vacuum-f-symbol-frobenius-schur-normalization, prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb, prop-fibonacci-fusion-ring-unit-is-not-tensor-invertible, def-categorical-object-and-operator-invertibility, ex-qc-tqc-fibonacci-data]
justified_by: []
proof_strategy: direct
axiom_use: None; only a two-dimensional path space and integer fusion multiplicities are used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§§3.5–3.6, PDF pp. 14–18: Fibonacci fusion rules, F-moves, and vertex normalization."
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: "https://arxiv.org/pdf/0707.1889"
      locator: "§IV.B.c, PDF pp. 53–57: Fibonacci F/R data and fusion-path basis."
verification:
  precheck: pass
---

## Example

Use the coherent Fibonacci category and pullback-R convention of [[ex-qc-tqc-fibonacci-data]]. Write $\phi=(1+\sqrt5)/2$, $u=\phi^{-1}$, and $v=\phi^{-1/2}$. The simple fusion rule is $\tau\otimes\tau=\mathbf1\oplus\tau$. For three $\tau$ sites with boundary labels $b=c=\tau$, the path space has ordered basis $(\mathbf1,\tau)$ according to the intermediate charge. The supplied associator block is

$$F^{\tau\tau\tau}_{\tau}=\begin{pmatrix}u&v\\v&-u\end{pmatrix}.$$

The two adjacent vacuum-channel projectors are $P_1=\operatorname{diag}(1,0)$ and $P_2=F^{-1}P_1F$. The object $\tau$ is not tensor-invertible even though its fusion-ring class is a unit. The identity on this two-dimensional path space is an invertible operator; the local rank-one channel projection is not.

## Facts & Assumptions

**Given:** The coherent Fibonacci category, its displayed F block, and the two-dimensional fixed-boundary path space.

[F1] [[ex-qc-tqc-fibonacci-data]]: the two simple objects are $\mathbf1,\tau$, $\tau\otimes\tau=\mathbf1\oplus\tau$, and the stated F block is unitary with the supplied pullback R phases.

[F2] [[def-anyonic-fusion-path-space]] and [[lem-anyonic-fusion-path-basis]]: $H_{\tau,2;\tau,\tau}=\operatorname{Hom}(\tau,(\tau\otimes\tau)\otimes\tau)$ has a basis indexed by the two intermediate labels $\mathbf1,\tau$.

[F3] [[def-anyonic-local-channel-projector]]: the second adjacent channel projector is $P_2=F^{-1}P_1F$ in the fixed tree basis.

[F4] [[lem-anyonic-vacuum-f-symbol-frobenius-schur-normalization]]: in the normalized gauge, $F_{\mathbf1,\mathbf1}=\kappa_\tau/d_\tau$ and $\delta_\tau=\kappa_\tau d_\tau$.

[F5] [[prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb]]: with signed loop value $\delta_\tau$, the normalized vacuum projectors obey the Temperley–Lieb relations.

[F6] [[prop-fibonacci-fusion-ring-unit-is-not-tensor-invertible]]: $[\tau]$ is a fusion-ring unit, but $\tau$ has no tensor-inverse object.

[F7] [[def-categorical-object-and-operator-invertibility]]: operator invertibility is tested for a specified linear map on a specified vector space.

## Verification

**Given:** The Fibonacci data and path basis specified above.

1.1 The fusion rule gives two intermediate channels for $H_{\tau,2;\tau,\tau}$: the first pair may fuse to $\mathbf1$ or $\tau$, and each channel then fuses with the last $\tau$ to total $\tau$. Thus the ordered basis is exactly $(\mathbf1,\tau)$ by [F2]. [F1, F2, given, algebra]

1.2 The matrix $F$ is real symmetric and satisfies $u^2+v^2=1$; its off-diagonal entries in $F^2$ cancel because $uv-vu=0$, so $F^\dagger F=F^2=I$. Multiplication gives $P_2=F^{-1}\begin{pmatrix}1&0\\0&0\end{pmatrix}F=\begin{pmatrix}u^2&uv\\uv&v^2\end{pmatrix}=ww^\mathsf T$ for $w=(u,v)^\mathsf T$. Since $w^\mathsf T w=1$, $P_2^2=w(w^\mathsf T w)w^\mathsf T=P_2$; also $\det(P_2)=u^2v^2-(uv)^2=0$ and $P_2\ne0$, so its rank is one and it is not invertible. [F1, F3, given, algebra]

2.1 The corner matrix product is $P_1P_2P_1=u^2P_1=\phi^{-2}P_1$. The category data have $d_\tau=\phi$ and $F_{\mathbf1,\mathbf1}=u=1/\phi$, so [F4] gives $\kappa_\tau=d_\tau F_{\mathbf1,\mathbf1}=+1$ and $\delta_\tau=\phi$. Thus $U_i=\phi P_i$ satisfies $U_1U_2U_1=\phi^3u^2P_1=\phi P_1=U_1$; this explicit block computation agrees with the general relation [F5]. The positive sign is the sign computed in this gauge. [F1, F4, F5, step 1.2, algebra]

3.1 The pullback R phases in [F1] are complex unit scalars: $|e^{-4\pi i/5}|=|e^{3\pi i/5}|=1$, and their complex conjugates are their inverses. They are exchange phases and do not change the real vacuum F coefficient used in step 2.1. [F1, algebra]

4.1 By [F6], $[\tau]([\tau]-[\mathbf1])=[\mathbf1]$ but no object supplies the signed inverse. The identity map $I_H$ is nevertheless invertible on $H$, while $P_2$ is not by step 1.2. These are statements about distinct domains of invertibility under [F7]; no line-operator or physical Hamiltonian representation is asserted. [F6, F7, step 1.2, algebra] ∎
