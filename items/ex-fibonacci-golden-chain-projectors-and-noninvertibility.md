---
id: ex-fibonacci-golden-chain-projectors-and-noninvertibility
kind: example
title: "Fibonacci path projectors and categorical noninvertibility"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps: [ def-anyonic-fusion-path-space, lem-anyonic-fusion-path-basis, thm-anyonic-path-space-is-hilbert-under-unitarity, def-anyonic-local-channel-projector, thm-anyonic-local-channel-projectors-are-orthogonal, def-anyonic-frobenius-schur-sign, lem-anyonic-vacuum-f-symbol-frobenius-schur-normalization, prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb, prop-fibonacci-fusion-ring-unit-is-not-tensor-invertible, def-categorical-object-and-operator-invertibility, ex-qc-tqc-fibonacci-data, lem-fibonacci-positive-spherical-pivotal-structure ]
justified_by: []
proof_strategy: direct
axiom_use: None; only finite-dimensional path spaces and integer fusion multiplicities are used.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§§3.5–3.6, PDF pp. 14–18: Fibonacci fusion rules, F-moves, and vertex normalization."
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: "https://arxiv.org/pdf/0707.1889"
      locator: "§IV.B.a, equations (126)–(129) for the Fibonacci fusion rule and F-block; §IV.B.b, equations (132)–(133) for the R phases."
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§9.4 Remark 9.4.7 and §9.5 Proposition 9.5.1, printed pp. 283–285: source attribution for the established positive spherical structure; the finite Fibonacci construction is proved by the local pivotal supplier, not imported as an external premise."
verification:
  precheck: pass
---

## Example

Use the coherent Fibonacci category and pullback-R convention of [[ex-qc-tqc-fibonacci-data]], equipped with the canonical positive spherical pivotal structure constructed in [[lem-fibonacci-positive-spherical-pivotal-structure]]. Write $\phi=(1+\sqrt5)/2$, $u=\phi^{-1}$, and $v=\phi^{-1/2}$. The simple fusion rule is $\tau\otimes\tau=\mathbf1\oplus\tau$, and its positive pivotal dimensions are $d_{\mathbf1}=1$, $d_\tau=\phi$. Let $w:\mathbf1\to\tau\otimes\tau$ be the unit isometric vacuum inclusion. The normalized self-duality maps are $\operatorname{coev}_\tau=\sqrt\phi\,w$ and $\operatorname{ev}_\tau=\sqrt\phi\,w^\dagger$; their zig-zags have scalar $\phi u=1$, so the normalized FS datum has $\kappa_\tau=+1$. For three tensor inputs $\tau,\tau,\tau$, comprising the incoming boundary $b=\tau$ and two sites ($n=2$), with output $c=\tau$, the path space $H_{\tau,2;\tau,\tau}$ has ordered basis $(\mathbf1,\tau)$ according to the intermediate charge. The supplied associator block is

$$F^{\tau\tau\tau}_{\tau}=\begin{pmatrix}u&v\\v&-u\end{pmatrix}.$$

On these three tensor inputs the two adjacent vacuum-channel projectors are $P_1=\operatorname{diag}(1,0)$ and $P_2=F^{-1}P_1F$; the first pair includes the incoming boundary charge. For the literal three-site problem $n=3$, still with $b=c=\tau$, the four tensor inputs give a three-dimensional space with path basis $(x_1,x_2)=(\mathbf1,\tau),(\tau,\mathbf1),(\tau,\tau)$. The two adjacent pairs among the three sites have projectors

$$Q_1=\begin{pmatrix}u^2&0&uv\\0&0&0\\uv&0&v^2\end{pmatrix},\qquad Q_2=\begin{pmatrix}0&0&0\\0&u^2&uv\\0&uv&v^2\end{pmatrix}.$$

Both are rank-one orthogonal projections and $Q_1Q_2Q_1=\phi^{-2}Q_1$; hence $\phi Q_i$ obey the adjacent Temperley–Lieb relation. Thus the two-site $2\times2$ block and the three-site $3\times3$ problem are both retained with their correct domains. The object $\tau$ is not tensor-invertible even though its fusion-ring class is a unit. The identity on this two-dimensional path space is an invertible operator; the local rank-one channel projection is not.

## Facts & Assumptions

**Given:** The coherent Fibonacci category with its canonical positive spherical pivotal structure and normalized self-duality data from the Example, its displayed F block, the two-site two-dimensional path space, and the three-site three-dimensional path space.

[F1] [[ex-qc-tqc-fibonacci-data]]: the two simple objects are $\mathbf1,\tau$, $\tau\otimes\tau=\mathbf1\oplus\tau$, and the stated F block is unitary with the supplied pullback R phases.

[F2] [[def-anyonic-fusion-path-space]] and [[lem-anyonic-fusion-path-basis]]: $H_{\tau,2;\tau,\tau}=\operatorname{Hom}(\tau,(\tau\otimes\tau)\otimes\tau)$ has a basis indexed by the two intermediate labels $\mathbf1,\tau$.

[F3] [[def-anyonic-local-channel-projector]]: the second adjacent channel projector is $P_2=F^{-1}P_1F$ in the fixed tree basis.

[F4] [[lem-anyonic-vacuum-f-symbol-frobenius-schur-normalization]]: in the normalized gauge, $F_{\mathbf1,\mathbf1}=\kappa_\tau/d_\tau$ and $\delta_\tau=\kappa_\tau d_\tau$.

[F5] [[prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb]]: with signed loop value $\delta_\tau$, the normalized vacuum projectors obey the Temperley–Lieb relations.

[F6] [[prop-fibonacci-fusion-ring-unit-is-not-tensor-invertible]]: $[\tau]$ is a fusion-ring unit, but $\tau$ has no tensor-inverse object.

[F7] [[def-categorical-object-and-operator-invertibility]]: operator invertibility is tested for a specified linear map on a specified vector space.

[F8] [[lem-fibonacci-positive-spherical-pivotal-structure]]: in this explicit Fibonacci category the chosen cups/caps give the unique pivotal structure $j=\operatorname{id}$, both traces are $\operatorname{Tr}(f_{\mathbf1})+\phi\operatorname{Tr}(f_\tau)$, and the positive spherical dimensions are $d_{\mathbf1}=1$, $d_\tau=\phi$.

## Verification

1.1 The fusion rule gives two intermediate channels for $H_{\tau,2;\tau,\tau}$: the first pair may fuse to $\mathbf1$ or $\tau$, and each channel then fuses with the last $\tau$ to total $\tau$. Thus the ordered basis is exactly $(\mathbf1,\tau)$ by [F2]. [F1, F2, given, algebra]

1.2 The matrix $F$ is real symmetric and satisfies $u^2+v^2=1$; its off-diagonal entries in $F^2$ cancel because $uv-vu=0$, so $F^\dagger F=F^2=I$. Multiplication gives $P_2=F^{-1}\begin{pmatrix}1&0\\0&0\end{pmatrix}F=\begin{pmatrix}u^2&uv\\uv&v^2\end{pmatrix}=ww^\mathsf T$ for $w=(u,v)^\mathsf T$. Since $w^\mathsf T w=1$, $P_2^2=w(w^\mathsf T w)w^\mathsf T=P_2$; also $\det(P_2)=u^2v^2-(uv)^2=0$ and $P_2\ne0$, so its rank is one and it is not invertible. [F1, F3, given, algebra]

2.1 The corner matrix product is $P_1P_2P_1=u^2P_1=\phi^{-2}P_1$. The finite pivotal and trace construction [F8] gives the canonical spherical dimension $d_\tau=\phi$, and $F_{\mathbf1,\mathbf1}=u=1/\phi$, so [F4] gives $\kappa_\tau=d_\tau F_{\mathbf1,\mathbf1}=+1$ and $\delta_\tau=\phi$. Thus $U_i=\phi P_i$ satisfies $U_1U_2U_1=\phi^3u^2P_1=\phi P_1=U_1$; this explicit block computation agrees with the general relation [F5]. The positive sign is the sign computed in this gauge. [F1, F4, F5, F8, step 1.2, algebra]

2.2 By [F6], $[\tau]([\tau]-[\mathbf1])=[\mathbf1]$ but no object supplies the signed inverse. The identity map $I_H$ is nevertheless invertible on $H$, while $P_2$ is not by step 1.2. These are statements about distinct domains of invertibility under [F7]; no line-operator or physical Hamiltonian representation is asserted. [F6, F7, step 1.2, algebra]

2.3 For three sites, use [F2]'s basis recursion once more. From $x_0=\tau$ to $x_3=\tau$, the allowed intermediate pairs are exactly $(\mathbf1,\tau)$, $(\tau,\mathbf1)$ and $(\tau,\tau)$: the branch $x_1=\mathbf1$ forces $x_2=\tau$, whereas $x_1=\tau$ allows both $x_2=\mathbf1,\tau$. Thus the literal three-site space has dimension three. To group site1 with site2, reassociate the first three inputs, holding $x_2$ fixed. The total-$\tau$ block mixes basis coordinates one and three by $F$, and the total-unit block fixes coordinate two. Hence its coordinate matrix is $A=\begin{pmatrix}u&0&v\\0&1&0\\v&0&-u\end{pmatrix}$. The vacuum channel in that pair-first tree is coordinate one. To group site2 with site3, reassociate $((x_1\otimes\tau)\otimes\tau)$, holding $x_1$ fixed. The unit $x_1=\mathbf1$ case fixes coordinate one, while $x_1=\tau$ mixes coordinates two and three by $F$. Its matrix is $B=\begin{pmatrix}1&0&0\\0&u&v\\0&v&-u\end{pmatrix}$, and the vacuum channel there is coordinate two. Unit-gauge associators are identities by [F1]. [F1, F2, F3, step 1.1, construct]

3.1 The pullback R phases in [F1] are complex unit scalars: $|e^{-4\pi i/5}|=|e^{3\pi i/5}|=1$, and their complex conjugates are their inverses. They are exchange phases and do not change the real vacuum F coefficient used in step 2.1. [F1, algebra]

4.1 Both $A$ and $B$ are real orthogonal because $F$ is. Applying [F3] gives $Q_1=A^{-1}\operatorname{diag}(1,0,0)A$ and $Q_2=B^{-1}\operatorname{diag}(0,1,0)B$, exactly the matrices in the Example. They are outer products of the unit vectors $r=(u,0,v)^\mathsf T$ and $s=(0,u,v)^\mathsf T$. Their overlap is $r^\mathsf T s=v^2=u$, so $Q_1Q_2Q_1=u^2Q_1=\phi^{-2}Q_1$ and likewise with indices exchanged. The positive loop sign is the one already computed in step 2.1. This proves all stated projectors and Temperley–Lieb relations on the actual three-site space without conflating it with the two-dimensional block. [F3, F4, F5, step 1.2, step 2.1, step 2.3, algebra] ∎
