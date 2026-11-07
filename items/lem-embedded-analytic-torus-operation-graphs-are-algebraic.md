---
id: lem-embedded-analytic-torus-operation-graphs-are-algebraic
kind: lemma
title: "Operation graphs of projectively embedded analytic tori are algebraic"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [thm-projectively-embedded-complex-torus-has-an-abelian-variety-model, thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic, lem-compact-complex-projective-submanifolds-have-algebraic-underlying-set, cor-segre-veronese-embedding, cor-quasi-finite-locus-open-finite-type-algebra, thm-proper-quasi-finite-is-finite, thm-primitive-element-theorem-for-finite-separable-extensions, lem-finite-birational-to-normal-is-isomorphism, thm-nakayama-lemma, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Complex Multiplication, version 0.10"
      url: "https://www.jmilne.org/math/CourseNotes/CM.pdf"
      locator: "Chapter II section 6, Proposition 6.1 and the Chow/full-faithfulness footnote, printed pages 46–47; the actual projective graph argument is reconstructed below."
verification: {}
---

## Statement

Assume AC. Let $T$ be a compact complex torus and let $i:T\hookrightarrow\mathbb P^N(\mathbb C)$ be a holomorphic embedding. Then the image $i(T)$ is the analytification of a smooth projective algebraic subvariety carrying a complex abelian-variety structure for which $i$ is a holomorphic group isomorphism.

For every $r\ge0$ and holomorphic group homomorphism $f:T^r\to T$, the image of its graph under $i^{r+1}$ is the analytification of a closed algebraic subvariety of $(\mathbb P^N)^{r+1}$. This includes addition, inversion, and every holomorphic group endomorphism. The one-point torus and $r=0$ are included.

## Facts & Assumptions

**Given:** AC, the compact complex torus, its projective embedding and the homomorphism in the Statement.

[F1] A projectively embedded complex torus admits a biholomorphic group identification with the analytification of an abelian variety, and holomorphic group homomorphisms of complex abelian varieties are algebraic ([[thm-projectively-embedded-complex-torus-has-an-abelian-variety-model]], [[thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic]]).

[F2] The reduced Zariski closure of a compact connected holomorphically embedded projective manifold is integral, has the same dimension and has exactly its underlying complex points; products of projective spaces have Segre embeddings ([[lem-compact-complex-projective-submanifolds-have-algebraic-underlying-set]], [[cor-segre-veronese-embedding]]).

[F3] The quasi-finite locus is open, a proper quasi-finite map is finite, and finite separable extensions are simple ([[cor-quasi-finite-locus-open-finite-type-algebra]], [[thm-proper-quasi-finite-is-finite]], [[thm-primitive-element-theorem-for-finite-separable-extensions]]).

[F4] A finite birational morphism to an integral normal scheme is an isomorphism; a finite module over a local ring vanishes if it equals the maximal ideal times itself ([[lem-finite-birational-to-normal-is-isomorphism]], [[thm-nakayama-lemma]]).

## Proof

**Proof technique:** algebraize the graph of the given projective embedding over an already constructed abelian model.

1.1 By [F1], choose a complex abelian variety $A$ and a biholomorphic group isomorphism $\phi:A^{\mathrm{an}}\to T$. Choose an algebraic projective embedding $A\hookrightarrow\mathbb P^M$. The graph of $i\circ\phi$ is a holomorphic embedding of the compact connected manifold $A^{\mathrm{an}}$ into $\mathbb P^M\times\mathbb P^N$, and by the Segre embedding in [F2] it is projectively embedded. Let $G$ be its reduced Zariski closure. By [F2], $G$ is integral of dimension $\dim A$ and its complex points are precisely that graph. It lies algebraically in $A\times\mathbb P^N$, since the equations of $A$ vanish on a dense set of $G$. The first projection $p:G\to A$ is proper and bijective on complex points. [F1, F2, given, choose, construct, algebra]

2.1 Every closed fibre of $p$ consists of one point and is zero-dimensional, so all closed points of $G$ lie in the quasi-finite locus. This locus is open by [F3], and its complement is a closed subset of a finite-type complex scheme with no closed points; it is empty. Hence $p$ is proper and quasi-finite, and therefore finite by [F3]. Its function-field extension is separable in characteristic zero. If its degree were $d>1$, [F3] gives a primitive element; after shrinking an affine open and inverting its discriminant, every complex fibre over that open would contain $d$ distinct points. This contradicts bijectivity on complex points, so the degree is one and $p$ is birational. The abelian variety $A$ is smooth and integral, hence normal; [F4] makes $p$ an isomorphism. The second projection of $G$ is therefore an algebraic map $a:A\to\mathbb P^N$ whose analytification is $i\circ\phi$. [F3, F4, given, step 1.1, construct, algebra]

3.1 The map $a$ is proper and injective on complex points, so the quasi-finite-locus argument of step 2.1 makes it finite. At a complex point $z$ of its image, write $R=\mathcal O_{\mathbb P^N,z}$ and $B=(a_*\mathcal O_A)_z$. This is a finite $R$-algebra with exactly one maximal ideal $\mathfrak n$ and residue field $\mathbb C$, because the finite fibre contains one complex point. Its analytic differential is injective since $i\circ\phi$ is an immersion; algebraic coordinate functions have the same derivatives, so the induced map on cotangent spaces is surjective. Hence $\mathfrak n=\mathfrak m_RB+\mathfrak n^2$, and Nakayama in [F4] gives $\mathfrak n=\mathfrak m_RB$. The residue map then shows $B=R+\mathfrak m_RB$, so the finite $R$-module cokernel of $R\to B$ is zero by [F4]. Outside the image the same map is trivially surjective. Its cokernel is coherent and vanishes at every closed point, hence vanishes everywhere. A finite morphism with $\mathcal O_{\mathbb P^N}\twoheadrightarrow a_*\mathcal O_A$ is a closed immersion. [F3, F4, given, step 2.1, construct, algebra]

4.1 Transport $f:T^r\to T$ through $\phi$ to a holomorphic group homomorphism $(A^r)^{\mathrm{an}}\to A^{\mathrm{an}}$. By [F1] it is the analytification of an algebraic group homomorphism $F:A^r\to A$. Its algebraic graph is closed because $A$ is separated. The product of the algebraic closed immersions from step 3.1 is a closed immersion into $(\mathbb P^N)^{r+1}$, so the image of that graph is a closed algebraic subvariety. Its analytification is exactly the graph of $f$ under $i^{r+1}$. Transporting the group law along the closed immersion identifies $i(T)$ with a smooth projective abelian variety. If $T$ is a point or $r=0$, the same argument reduces to the corresponding point graph. This proves the Statement. [F1, given, step 3.1, construct, algebra] ∎
