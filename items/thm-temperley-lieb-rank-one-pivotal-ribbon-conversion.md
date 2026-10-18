---
id: thm-temperley-lieb-rank-one-pivotal-ribbon-conversion
kind: theorem
title: "The rank-one tilting quotient matches the Temperley-Lieb ribbon convention"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - lem-temperley-lieb-root-fusion-paths-have-nonzero-pairings
  - thm-temperley-lieb-root-negligible-quotient-is-semisimple
  - thm-temperley-lieb-rank-one-tilting-quotient-fusion-category
  - def-temperley-lieb-rank-one-lusztig-tilting-category
  - lem-temperley-lieb-rank-one-tilting-character-and-dimension
  - lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness
  - thm-basic-properties-of-the-categorical-trace
  - thm-a-braided-rigid-category-has-a-drinfeld-morphism
  - thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor
  - lem-ribbon-trace-equals-the-framed-closure-evaluation
  - def-ribbon-evaluation-of-an-x-colored-closed-braid
  - def-countable-choice
  - lem-temperley-lieb-rank-one-weyl-and-dual-weyl-filtrations
  - lem-temperley-lieb-rank-one-ribbon-structure-from-the-finite-r-series
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "Assume AC_omega only for the cited framed-tangle evaluator; no global choice principle is used in the local parameter and channel calculations."
sources:
  references:
    - title: "Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity"
      url: "https://arxiv.org/pdf/math/0308281"
      locator: "§§1–4, printed pp. 2–22; Theorem 5, printed pp. 25–26: weight-lattice ribbon convention and semisimple quotient."
    - title: "Henning Haahr Andersen and Daniel Tubbenhauer, Diagram Categories for Uq-Tilting Modules at Roots of Unity"
      url: "https://arxiv.org/pdf/1409.2799"
      locator: "§4.4, PDF pp. 41–46: diagram and tilting category comparison."
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§§8.9–8.10, printed pp. 214–218: Drinfeld morphism, ribbon trace, and framed-tangle convention."
verification:
  precheck: escalated
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Use all $\ell\ge3$, $q=e^{\pi i/\ell}$, $s=e^{\pi i/(2\ell)}$, $\delta=q+q^{-1}$ and the full tilting category of [[def-temperley-lieb-rank-one-lusztig-tilting-category]]. Put $V=\Delta(1)$ and let $P_0$ be its trivial-channel projector in $V\otimes V=\Delta(2)\oplus\Delta(0)$. The maps

$$\rho_n:\mathrm{TL}_n(\mathbb C,\delta)\longrightarrow\operatorname{End}_{\mathcal T_\ell}(V^{\otimes n}),\qquad U_i\longmapsto\delta P_{0,i,i+1}$$

are well defined. Their composite with the negligible quotient has kernel exactly the embedded boundary ideal $I_n=(p_{\ell-1})$ and induces

$$\mathrm{TL}_n(\mathbb C,\delta)/I_n\ \cong\ \operatorname{End}_{\mathcal T_\ell/\mathcal N_\ell}(V^{\otimes n}).$$

Equivalently the target is the full centralizer on a chosen sum of the retained tilting summands. The unreduced map does **not** kill $p_{\ell-1}$: its image is the nonzero simple $\Delta(\ell-1)$.

The precise categorical comparison is with the additive Karoubi negligible quotient of $\mathrm{TL}(-\delta)$, equipped with its ordinary diagram braiding $c=s1+s^{-1}e$ and with planar pivotal structure multiplied by tensor parity $(-1)^n$. This is ribbon-equivalent to $\mathcal T_\ell/\mathcal N_\ell$. Its endomorphism algebras are identified with positive-loop TL algebras by $U_i=-e_i$. Its pivotal dimensions are $[a+1]_q$, and its twists on retained labels are $s^{a(a+2)}$. The quantum self-duality cup/cap have loop $-\delta$ and Frobenius–Schur sign $-1$, whereas the parity-corrected pivotal closure has value $+\delta$ on $V$. Thus no equivalence of the unmodified positive-loop unoriented **pivotal** TL category is asserted.

On the highest-weight-$2$ and trivial prequotient channels, the quantum crossing eigenvalues are $s,-s^{-3}$; the Hecke element $T_i=qU_i-1=-s c_i^{-1}$ has eigenvalues $-1,q^2$. The highest-weight-$2$ channel is retained only when $\ell\ge4$. Pivotal traces, twists and all framed ribbon closures agree under the stated corrected comparison. Assume countable choice only when invoking the cited free framed-tangle evaluation theorem; the local matrix and path arguments use no choice axiom.

## Facts & Assumptions

**Given:** The exact full-weight category, both loop conventions and the specified square root.

[F1] [[def-temperley-lieb-rank-one-lusztig-tilting-category]] and [[lem-temperley-lieb-rank-one-ribbon-structure-from-the-finite-r-series]] give the actual Hopf convention, full finite $R$, invariant cup $w$, cap $b$, $U=-wb$, negative Frobenius–Schur sign, positive pivotal dimension, channel eigenvalues, twists and tensor identities.

[F2] [[lem-temperley-lieb-root-fusion-paths-have-nonzero-pairings]] gives complete retained path matrix units. [[thm-temperley-lieb-root-negligible-quotient-is-semisimple]] identifies their exact embedded kernel and trace radical.

[F3] [[lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness]] gives JW recursion, turnback annihilation, partial trace and nonzero identity coefficient.

[F4] [[lem-temperley-lieb-rank-one-weyl-and-dual-weyl-filtrations]] generates all tiltings from $V$. [[lem-temperley-lieb-rank-one-tilting-character-and-dimension]] and [[thm-temperley-lieb-rank-one-tilting-quotient-fusion-category]] identify retained simples and negligible outside summands.

[F5] [[thm-basic-properties-of-the-categorical-trace]], [[thm-a-braided-rigid-category-has-a-drinfeld-morphism]], [[lem-ribbon-trace-equals-the-framed-closure-evaluation]] and [[def-ribbon-evaluation-of-an-x-colored-closed-braid]] give the trace, Drinfeld and closure interfaces.

[A1] [[def-countable-choice]] is retained solely for [[thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor]].

## Proof

1.1 By [F1], the genuine full-algebra intertwiners $w,b$ satisfy both snakes, $b(w)=-\delta$ and $KB^t=-B$ for their bilinear form. Thus the self-duality sign is $-1$, independently of rescaling. Put $e=wb$ and $U=-e=\delta P_0$. The snakes give $U_i^2=\delta U_i$, $U_iU_{i+1}U_i=U_i$ and distant commutation, so they give every $\rho_n$. The two channels and their twists/crossings are exactly [F1]. In particular $T=qU-1=-s c^{-1}$, so $q^2$ belongs to the trivial channel, not to the highest-weight-$2$ channel. [F1, given, algebra]

2.1 The rigid tensor functor from $\mathrm{TL}(-\delta)$ sends cup to $w$, cap to $b$, and $e_i$ to $w_ib_i$. The two snakes and negative loop verify its defining matching relations. The algebra identification $U_i\mapsto-e_i$ preserves the JW projectors: the recursion quantum integers for loop $-\delta$ are $(-1)^{j-1}[j]$, and these signs cancel against the generator sign in each recursive correction. Thus the evaluated projector $p_a$ is annihilated by the matrices $U_i$. For $a\le\ell-1$, their common kernel in each weight space is one-dimensional: $U_i$ imposes that the coefficient of $-+$ is $q$ times that of $+-$, so adjacent swaps determine every coefficient from one word. The vectors $F^{(j)}v_+^{\otimes a}$, $0\le j\le a$, belong to this kernel and are nonzero: the divided coproduct has one Laurent-monomial coefficient for every specified subset of $j$ changed positions. The projector acts as identity on its common kernel, since its nonidentity generator words kill that kernel. Its image is therefore precisely this $(a+1)$-dimensional highest-weight string, equal to $\Delta(a)$ by [F4]. In particular $p_{\ell-1}$ has a nonzero image of zero pivotal dimension, and cannot lie in the kernel of the unreduced map. [F1, F3, F4, step 1.1, algebra]

3.1 In the quantum negligible quotient the boundary image is zero by [F4]. Transport [F2]'s path splits to the negative-loop category. Its down normalization is $-\lambda_a$ rather than $\lambda_a=[a+1]/[a]$; replacing its down cap map by its negative yields exactly the positive-algebra normalization for $U=-e$. The transported path units therefore have the same multiplication and positive-$K$ trace weights $[a+1]$. They decompose $V^{\otimes n}$ into all retained $\Delta(a)$ copies. Hom orthogonality in [F4] shows their rectangular blocks are the **entire** quantum quotient Hom spaces, not a proper subalgebra. Their positive trace weights show independence, while [F2] identifies the diagram kernel as exactly $I_n$. This proves the displayed centralizer isomorphism. On a chosen retained sum $R_n$, composites through discarded negligible summands are zero because its weighted matrix-trace pairing is nondegenerate. Thus projecting to $R_n$ realizes the same algebra as $\operatorname{End}_U(R_n)$; the quotient formulation is independent of that choice. [F1, F2, F3, F4, step 2.1, algebra]

4.1 The same path decomposition on both ends gives fullness and faithfulness for Hom spaces between unequal tensor degrees as well. Every tilting is a sum of summands of powers of $V$ by [F4]. Consequently the functor extends from the additive Karoubi boundary quotient of $\mathrm{TL}(-\delta)$ to a tensor equivalence with the whole tilting negligible quotient. In the source let $j_0$ be its planar pivotal structure. Its dimension at $p_a$ is $(-1)^a[a+1]$. The parity map $\epsilon_n=(-1)^n1_n$ is a monoidal natural automorphism: Hom spaces between different parities are zero. It descends to summands with $\epsilon_{p_a}=(-1)^a$ and commutes with duality. Thus $j=\epsilon j_0$ has the positive dimensions $[a+1]$. More precisely, the equality $KB^t=-B$ in step 1.1 says the functor's transported planar pivotal map on $V$ is $-K$; multiplying it by $\epsilon_V=-1$ gives exactly $K$. Monoidality, direct sums and summands prove equality of pivotal structures on every object, not merely equality of dimensions. [F1, F2, F4, F5, step 1.1, step 3.1, algebra]

5.1 The source crossing $c=s1+s^{-1}e$ is precisely the actual finite-$R$ crossing by [F1]. Its inverse and adjacent triple relations hold by the TL relations. Naturality with cups/caps can also be read directly: for $W_1=w\otimes1$, $W_2=1\otimes w$, the snakes give $e_1W_1=-\delta W_1$, $e_2W_1=W_2$, $e_1W_2=W_1$, so $c_1c_2W_1=(s^2-\delta+s^{-2})W_1+W_2=W_2$; the reflected and reversed identities give the other three slides. Thus the functor preserves the full braiding. With $j_0$, the generator curl is $s(-s^2-s^{-2})+s^{-1}=-s^3$. Since $\theta=u^{-1}j$, changing $j_0$ to $\epsilon j_0$ changes this to $+s^3$. It gives $\theta_{p_a}=s^{a(a+2)}$ by balancing on the highest tensor component, as already proved in [F1]. Parity commutes with duality, so the twist remains dual-compatible. The pivotal tensor equivalence therefore preserves braiding and twist globally, hence is a ribbon equivalence. At $\ell=3$, the removed $a=2$ channel is treated exactly as [F1] specifies. [F1, F4, F5, step 4.1, algebra]

6.1 The scalar composite of the fixed self-dual cup and cap is still $-\delta$; re-pivotalization changes the pivotal closing map, not that composite. Its corrected ribbon unknot closure is instead $\operatorname{tr}(K|_V)=+\delta$, and one framing twist acts by $s^3$. Because the equivalence preserves evaluation, coevaluation, braiding and twist, it preserves every composite framed colored tangle and its closure, not just two channel scalars. The evaluation and ribbon-trace suppliers [F5,A1] apply with their stated countable-choice hypothesis only at this last universality step. The preceding steps establish all algebra, kernel, sign and ribbon assertions independently of that axiom and finish the proof. [F1, F5, A1, step 1.1, step 3.1, step 4.1, step 5.1, algebra] ∎
