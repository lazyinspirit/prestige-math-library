---
id: ex-a-normalised-mean-zero-hone-atom
kind: example
title: "A normalised mean-zero $H^1$ atom"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps: [def-hp-atom-with-moment-order, lem-an-hp-atom-has-uniform-hp-quasinorm, def-real-hardy-space-by-a-radial-maximal-function, def-countable-choice, def-multidimensional-rectangle-and-volume, thm-lebesgue-measure-of-a-box-of-every-kind]
justified_by: []
aliases: []
landmark: false
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Stefano Meda, Peter Sjogren, Maria Vallarino, Atomic decompositions and operators on Hardy spaces, Revista de la Union Matematica Argentina 50 (2009), no. 2, 15-22"
      url: "https://inmabb.criba.edu.ar/revuma/pdf/v50n2/v50n2a02.pdf"
      locator: "section 1, p. 16: the split-ball example $g=\\mathbf 1_{B^+}-\\mathbf 1_{B^-}$ as 'a multiple of an atom'"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Definition 7.34, printed p. 40: cube-supported $L^2$ atoms with $\\|A\\|_2\\le|Q|^{-1/2}$ and $\\int A=0$"
verification:
  precheck: pass
---

## Example

Assume Countable Choice. Fix an admissible kernel $\varphi$ defining $H^1$ and an admissible grand-maximal order $N$ as in [[lem-an-hp-atom-has-uniform-hp-quasinorm]]. Let $Q\subseteq\mathbb R^n$ be a nondegenerate closed axis-parallel cube with centre
$c_Q$, and let $Q^+,Q^-$ be the two halves of $Q$ cut by a coordinate
hyperplane through $c_Q$, so that
$|Q^+|=|Q^-|=|Q|/2$. Then
$$a=|Q|^{-1}\bigl(\mathbf 1_{Q^+}-\mathbf 1_{Q^-}\bigr)$$
is a $(1,\infty,0)$-atom: it is supported in $Q$, it satisfies
$|a|\le|Q|^{-1}$ everywhere, and $\int a=0$. For the fixed $H^1_\varphi$ norm, its size satisfies
$\|a\|_{H^1}\le C_1(n,1,0,N,\varphi)$ by
[[lem-an-hp-atom-has-uniform-hp-quasinorm]]. This bound is independent of $Q$
and of the position of the halving hyperplane; it records the kernel and
grand-maximal-order dependence explicitly.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, the fixed admissible kernel $\varphi$ and order $N$, a nondegenerate closed axis-parallel cube $Q$ with volume $|Q|$ and centre $c_Q$, the halving hyperplane $\{x_0=c_{Q,0}\}$, and the sets $Q^+=Q\cap\{x_0>c_{Q,0}\}$, $Q^-=Q\cap\{x_0<c_{Q,0}\}$.

[L1] A $(1,\infty,0)$-atom is a measurable $a$ with $\operatorname{supp}a\subseteq Q$, $|a|\le|Q|^{-1}$ a.e. and $\int a=0$ ([[def-hp-atom-with-moment-order]]).

[F1] Under Countable Choice, $Q^\pm$ are measurable axis-parallel boxes of measure $|Q|/2$, so $\int_{Q^\pm}\mathbf 1=|Q|/2$; $|Q|>0$ ([[def-countable-choice]], [[def-multidimensional-rectangle-and-volume]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F2] For the fixed kernel $\varphi$, $\|a\|_{H^p}:=\|M^0_\varphi a\|_{L^p}$ ([[def-real-hardy-space-by-a-radial-maximal-function]]); under Countable Choice and for an admissible order $N$, every $(p,\infty,s)$-atom satisfies $\|M_Na\|_{L^p}\le C_0(n,p,s)$ and $\|a\|_{H^p}\le C_1(n,p,s,N,\varphi)$, uniformly in its supporting cube ([[lem-an-hp-atom-has-uniform-hp-quasinorm]]).



**Proof technique:** direct verification of the three defining properties, then the uniform atom bound.

## Verification

**Proof technique:** direct.

1.1 **The three atom properties hold.** Since $\mathbf 1_{Q^\pm}$ vanish off $Q$, $\operatorname{supp}a\subseteq Q$. Pointwise $|a|=|Q|^{-1}$ on $Q^+\cup Q^-$ and $a=0$ elsewhere, so $|a|\le|Q|^{-1}$ everywhere. Finally, by [F1], $\int_{\mathbb R^n}a=|Q|^{-1}\bigl(\int\mathbf 1_{Q^+}-\int\mathbf 1_{Q^-}\bigr)=|Q|^{-1}(|Q|/2-|Q|/2)=0$. Hence $a$ is a $(1,\infty,0)$-atom. [L1, F1, algebra]

2.1 **The $H^1$ estimate.** Apply [F2] with $p=1$ and $s=0$: since $a$ is a $(1,\infty,0)$-atom, $\|a\|_{H^1}\le C_1(n,1,0,N,\varphi)$. This bound is uniform over the supporting cube and the position of the halving hyperplane, with the fixed kernel and order dependence shown. [step 1.1, F2]

3.1 **Conclusion.** The half-cube difference is a legitimate $(1,\infty,0)$-atom, and its fixed-kernel $H^1$ norm has the uniform bound stated above. [step 1.1, step 2.1] ∎
