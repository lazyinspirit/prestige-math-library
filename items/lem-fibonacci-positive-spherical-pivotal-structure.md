---
id: lem-fibonacci-positive-spherical-pivotal-structure
kind: lemma
title: "The explicit Fibonacci model has a positive spherical pivotal structure"
status: draft
origin: session
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [ ex-qc-tqc-fibonacci-data, def-the-dual-of-a-morphism, def-pivotal-structure, def-spherical-structure, def-the-dimension-of-an-object-relative-to-a-pivotal-structure, def-the-categorical-trace-of-a-morphism-into-the-double-dual, def-twist-and-ribbon-structure, thm-a-braided-rigid-category-has-a-drinfeld-morphism, thm-a-twist-on-a-braided-rigid-category-is-the-same-thing-as-a-pivotal-structure-of-drinfeld-type ]
justified_by: []
proof_strategy: direct
axiom_use: None; the construction uses two simple labels and finite block matrices.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Chetan Nayak et al., Non-Abelian Anyons and Topological Quantum Computation, arXiv:0707.1889v2"
      url: "https://arxiv.org/pdf/0707.1889v2"
      locator: "§IV.B, PDF pp. 53–55: the established Fibonacci model, positive dimension phi, Eq. (129) F block and displayed Eqs. (132)–(133) R phases."
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.10, Eq. (8.35) and following sentence, printed pp. 217–218; §9.4 Remark 9.4.7 and §9.5 Proposition 9.5.1, printed pp. 283–285: source attribution for the established positive spherical structure; the proof here supplies its finite construction locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

In the explicit skeletal Fibonacci category of [[ex-qc-tqc-fibonacci-data]], take the chosen left duals $\mathbf1^\vee=\mathbf1$ and $\tau^\vee=\tau$, with unit cup and cap for $\mathbf1$ and

$$h_\tau=\sqrt\phi\,w:\mathbf1\to\tau\otimes\tau,\qquad e_\tau=\sqrt\phi\,w^\dagger:\tau\otimes\tau\to\mathbf1,$$

where $w$ is its isometric vacuum inclusion and $\phi=(1+\sqrt5)/2$. Extend these duals by the diagonal cup and cap on each finite direct sum. With the resulting double-dual identification, $j_A=\operatorname{id}_A:A\to A^{\vee\vee}$ is a pivotal structure. For every $A=\mathbf1^{\oplus m_1}\oplus\tau^{\oplus m_\tau}$ and every endomorphism $f=f_1\oplus f_\tau$,

$$\operatorname{Tr}_L(j_Af)=\operatorname{Tr}_R(fj_A^{-1})=\operatorname{Tr}(f_1)+\phi\operatorname{Tr}(f_\tau).$$

Thus $j$ is spherical, with positive simple dimensions $d_{\mathbf1}=1$, $d_\tau=\phi$. It is the unique pivotal structure for these chosen duals, so the positive spherical structure here is canonical without invoking a general existence theorem for unitary fusion categories. In the supplied pullback-R convention put $x=e^{-4\pi i/5}$ and $y=e^{3\pi i/5}$. The corresponding ribbon twist is $\theta_{\mathbf1}=1$, $\theta_\tau=x$; these are inverse to the source's opposite object-braiding orientation.

## Facts & Assumptions

**Given:** The explicit finite direct-sum category, its coherent unitary F/R blocks and chosen simple cup/cap maps from the Fibonacci model.

[F1] [[ex-qc-tqc-fibonacci-data]] supplies the actual coherent braided unitary category, $u=\phi^{-1}$, $v=\phi^{-1/2}$, $F^{-1}=F=\begin{pmatrix}u&v\\v&-u\end{pmatrix}$, $x=y^2$, object-braiding eigenvalues $x^{-1},y^{-1}$, and both simple duality snakes with scalar $\phi u=1$.

[F2] [[thm-a-braided-rigid-category-has-a-drinfeld-morphism]] supplies the natural isomorphism $\mathfrak u_A:A\to A^{\vee\vee}$ given by a right cup, inverse reassociation, braiding the first pair, and its cap; its double-dual tensor comparison $d_{A,B}$ satisfies $d_{A,B}(\mathfrak u_A\otimes\mathfrak u_B)=\mathfrak u_{A\otimes B}c_{B,A}c_{A,B}$.

[F3] [[def-twist-and-ribbon-structure]] gives the twist tensor law and dual compatibility; [[thm-a-twist-on-a-braided-rigid-category-is-the-same-thing-as-a-pivotal-structure-of-drinfeld-type]] proves that $\mathfrak u\theta$ is a pivotal structure exactly when $\theta$ is a twist. Pivotal means monoidal natural, as in [[def-pivotal-structure]].

[F4] [[def-the-dual-of-a-morphism]] defines dual maps as evaluation mates. [[def-the-categorical-trace-of-a-morphism-into-the-double-dual]] defines the two typed closures; [[def-the-dimension-of-an-object-relative-to-a-pivotal-structure]] defines $\dim_j(A)=\operatorname{Tr}_L(j_A)$, and [[def-spherical-structure]] requires $\dim_j(A)=\dim_j(A^\vee)$.

## Proof

**Proof technique:** exhaust the simple braiding channels, compute the Drinfeld comparison in the vacuum F coordinate, and evaluate both traces on all finite matrix blocks.

1.1 For a finite direct sum $A=\bigoplus_{s,p}s$, let $I_{s,p}:s\to A$ be its fixed copy inclusions. Set $A^\vee=A$ and $h_A=\sum_{s,p}(I_{s,p}\otimes I_{s,p})h_s$, $e_A=h_A^\dagger$, where $h_{\mathbf1}=e_{\mathbf1}=\operatorname{id}_{\mathbf1}$. Each cross-copy term in a snake vanishes, and each diagonal term is the simple snake from [F1], so these are duality maps on every finite sum. In the evaluation mate identity, the coefficient for copies $p,q$ of simple $s$ is $\sqrt{d_s}(f_s)_{pq}$ on one side and $\sqrt{d_s}(f_s^\vee)_{qp}$ on the other, where $d_{\mathbf1}=1$ and $d_\tau=\phi$ denote the cup/cap normalization constants at this stage. Thus $f_s^\vee=f_s^{\mathsf T}$, without complex conjugation, by uniqueness of mates. The double dual is therefore literally the identity on objects and morphisms. This alone does not yet establish its tensor comparison. The empty sum uses the unique zero maps and satisfies the same identities. [F1, F4, given, construct, algebra]

2.1 Define $\theta_A$ to be the identity on every unit copy and $x\operatorname{id}_\tau$ on every $\tau$ copy. These central scalar blocks are natural for arbitrary morphism matrices. Of the four ordered simple pairs, the three containing a unit satisfy the twist law by the strict unit gauge. On $\tau\otimes\tau=\mathbf1\oplus\tau$ its two channel equations are $$x^2(x^{-1})^2=1,\qquad x^2(y^{-1})^2=x,$$ the latter because $x=y^2$. Tensoring copy inclusions and then inserting the simple channel inclusions exhausts every finite direct sum, so these equations prove the twist law on all objects, including zero. Also $\theta_{\mathbf1}=1$. Duality is block transpose by step 1.1, so $\theta_A^\vee=\theta_{A^\vee}$; hence this twist is ribbon. [F1, F3, step 1.1, construct, algebra]

2.2 In [F2]'s typed formula for $\mathfrak u_\tau$, the map $\operatorname{id}_\tau\otimes h_\tau$ starts in the right tree $\tau\otimes(\tau\otimes\tau)$, with its last pair in the vacuum channel. Apply $\alpha^{-1}$ to reach $(\tau\otimes\tau)\otimes\tau$, then $c_{\tau,\tau}\otimes\operatorname{id}_\tau$, and finally $e_\tau\otimes\operatorname{id}_\tau$. Let $R_{\mathbf1}=\operatorname{id}_\tau\otimes w$ be the right-vacuum inclusion, and let $L_{\mathbf1}=w\otimes\operatorname{id}_\tau,L_\tau$ be the orthonormal left-tree inclusions. The object block is $F^{-1}=F$, so $\alpha^{-1}R_{\mathbf1}=uL_{\mathbf1}+vL_\tau$. The middle braiding gives $ux^{-1}L_{\mathbf1}+vy^{-1}L_\tau$. The final cap is on this same first pair: $L_{\mathbf1}^\dagger L_{\mathbf1}=1$ and $L_{\mathbf1}^\dagger L_\tau=0$. With $e_0=(1,0)^{\mathsf T}$, the complete two-channel compression is therefore $$\mathfrak u_\tau=\phi e_0^{\mathsf T}\operatorname{diag}(x^{-1},y^{-1})F e_0\operatorname{id}_\tau=\phi(ux^{-1}+0\cdot vy^{-1})\operatorname{id}_\tau=x^{-1}\operatorname{id}_\tau,\qquad \mathfrak u_{\mathbf1}=\operatorname{id}_{\mathbf1}.$$ Naturality at all copy inclusions gives precisely these scalar blocks on every finite sum. No dagger conjugation of $x$ or extra F move is inserted. [F1, F2, step 1.1, algebra]

3.1 By steps 2.1–2.2 and [F3], $j=\mathfrak u\theta$ is a monoidal natural isomorphism, and its blocks are all identity. To check the tensor comparison explicitly, the three unit-input cases in [F2]'s relation give $d_{a,b}=1$. In the two $\tau\tau$ channels that relation gives $$d_{\tau,\tau}|_{\mathbf1}=\frac{1\cdot x^{-2}}{x^{-2}}=1,\qquad d_{\tau,\tau}|_\tau=\frac{x^{-1}y^{-2}}{x^{-2}}=xy^{-2}=1.$$ Thus the four ordered simple pairs, including both nonunit root channels, have identity comparison. Naturality at all tensor products of copy inclusions extends this to every finite sum; the unit comparison is identity in the strict unit gauge. This proves the required pivotal monoidality rather than merely objectwise double-dual isomorphisms. [F1, F2, F3, step 1.1, step 2.1, step 2.2, algebra]

4.1 Since $A^\vee=A$ and $j_A=1$, the left closure is $e_A(f\otimes1)h_A$ and the right closure is $e_A(1\otimes f)h_A$. Orthogonal copy inclusions kill all off-diagonal terms; the diagonal term for a copy of $s$ is $d_s(f_s)_{pp}$ on either side. Summing proves both displayed trace formulas. In particular $\dim_j(A)=m_1+\phi m_\tau=\dim_j(A^\vee)$, so [F4] makes $j$ spherical with simple dimensions $1,\phi>0$. For $f=g^\dagger g$, the formula is a sum of these positive weights times squared absolute matrix entries, and vanishes only for $g=0$. The zero object has trace and dimension zero. [F1, F4, step 1.1, step 3.1, algebra]

5.1 If $j'$ is another pivotal structure, $\gamma=j^{-1}j'$ is a monoidal natural automorphism of the identity. Naturality at copy inclusions makes it scalar $1$ on unit copies and $t\ne0$ on $\tau$ copies. Monoidality on the unit and $\tau$ summands of $\tau\otimes\tau$ gives respectively $t^2=1$ and $t^2=t$. Hence $t=1$, and all components of $\gamma$ are identity. This proves uniqueness and the asserted canonical positive spherical structure, with every trace and ribbon convention already established. [F1, F3, step 3.1, step 4.1, algebra] ∎
