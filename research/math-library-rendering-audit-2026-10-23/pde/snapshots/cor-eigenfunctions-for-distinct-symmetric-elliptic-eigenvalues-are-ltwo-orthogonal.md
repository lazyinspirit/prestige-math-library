---
id: cor-eigenfunctions-for-distinct-symmetric-elliptic-eigenvalues-are-ltwo-orthogonal
kind: corollary
title: "Eigenfunctions for distinct symmetric elliptic eigenvalues are $L^2$-orthogonal"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
deps: [def-bounded-coercive-and-symmetric-sesquilinear-forms, def-complex-conjugate-real-imaginary-part-and-modulus, def-countable-choice, def-ltwo-operator-associated-with-a-symmetric-elliptic-form, def-symmetric-elliptic-weak-eigenpair, lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)'
      url: 'https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf'
      locator: 'Chapter 4, Remark 4.3 (orthogonality of eigenvectors for distinct eigenvalues), printed p. 86 (read in full)'
    - title: 'John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page notes)'
      url: 'https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf'
      locator: 'Section 4.10, orthogonality of eigenfunctions of the self-adjoint operator, printed p. 108 (read in full)'
    - title: 'Richard S. Laugesen, Spectral Theory of Partial Differential Equations (University of Illinois lecture notes, arXiv:1203.2344, complete 120 pages)'
      url: 'https://arxiv.org/pdf/1203.2344'
      locator: 'Chapter 4, orthogonality of eigenvectors, printed p. 30 (read in full)'
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. In the symmetric case of [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]], let $(\lambda,u)$ and $(\mu,v)$ be weak eigenpairs as in [[def-symmetric-elliptic-weak-eigenpair]] with $\lambda\ne\mu$. Then $(u,v)_{L^2}=0$. If the scalar field is $\mathbb C$ and the coefficients are real, conjugation preserves weak eigenpairs at the same eigenvalue; each nonzero real or imaginary part of an eigenfunction is then a real-valued weak eigenfunction, so an eigenfunction can be chosen real.

## Facts & Assumptions

**Given:** Countable Choice; the symmetric divergence-form case of [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]]; weak eigenpairs $(\lambda,u)$ and $(\mu,v)$ with $\lambda\ne\mu$ and $u,v\ne0$.

[F1] Weak eigenpair equations: $a(u,w)=\lambda(u,w)_{L^2}$ and $a(v,w)=\mu(v,w)_{L^2}$ for every $w\in H^1_0(\Omega)$, with real $\lambda,\mu$ ([[def-symmetric-elliptic-weak-eigenpair]]).

[F2] Symmetry: $a(u,v)=\overline{a(v,u)}$ for all arguments, and $a(w,w)$ is real ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]], [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]]).

[F3] Conjugation: for real coefficients the form satisfies $a(\overline u,\overline v)=\overline{a(u,v)}$. With the inner product linear in its first argument, $(\overline u,w)_{L^2}=\overline{(u,\overline w)_{L^2}}$; conjugation also preserves $H^1_0(\Omega)$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]], [[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Test the eigenequation of $(\lambda,u)$ at $w=v$ and that of $(\mu,v)$ at $w=u$: [F1] gives $\lambda(u,v)_{L^2}=a(u,v)$ and $\mu(v,u)_{L^2}=a(v,u)$. Conjugating the second identity and using symmetry [F2], $\mu\overline{(v,u)_{L^2}}=\overline{a(v,u)}=a(u,v)$; since $\overline{(v,u)_{L^2}}=(u,v)_{L^2}$ and $\lambda,\mu$ are real, comparison gives $\lambda(u,v)_{L^2}=\mu(u,v)_{L^2}$, that is $(\lambda-\mu)(u,v)_{L^2}=0$. As $\lambda\ne\mu$ and the scalar field is $\mathbb R$ or $\mathbb C$, $(u,v)_{L^2}=0$. [F1, F2, given, algebra]

2.1 Real coefficients. Suppose the scalar field is $\mathbb C$ and the coefficients $a^{ij},c$ are real (with $b=0$). For $w\in H^1_0(\Omega)$, [F3] gives $a(\overline u,w)=\overline{a(u,\overline w)}=\overline{\lambda(u,\overline w)_{L^2}}=\lambda(\overline u,w)_{L^2}$, so $\overline u$ is a weak eigenfunction with eigenvalue $\lambda$. By linearity, each nonzero one of $\operatorname{Re}u=\tfrac12(u+\overline u)$ and $\operatorname{Im}u=\tfrac1{2i}(u-\overline u)$ is a real-valued weak eigenfunction at $\lambda$; since $u\ne0$, at least one is nonzero, so an eigenfunction can be chosen real. The orthogonality conclusion of step 1.1 is independent of this representative remark. [F1, F3, step 1.1, given, algebra] ∎

