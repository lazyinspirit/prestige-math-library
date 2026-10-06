---
id: "cex-coercive-form-need-not-be-symmetric"
kind: "counterexample"
title: "A coercive form need not be symmetric"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 7
deps:
  - "def-countable-choice"
  - "cor-symmetric-lax-milgram-is-energy-minimisation"
  - "def-bounded-coercive-and-symmetric-sesquilinear-forms"
  - "def-complex-conjugate-real-imaginary-part-and-modulus"
  - "def-hilbert-space"
  - "def-real-and-complex-inner-product-space"
  - "rem-nonsymmetric-lax-milgram-is-not-a-scalar-minimisation-principle"
  - "thm-cauchy-schwarz-and-the-euclidean-norm"
  - "thm-lax-milgram"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§5.3, the Lax–Milgram theorem covers continuous coercive forms without assuming symmetry, printed pp. 139–140"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§4.4, `Lax–Milgram and nonsymmetric sesquilinear forms`, printed pp. 98–100"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§10.2, the remark that $a$ is no longer symmetric unless $b\\equiv0$, printed p. 233"
---

## Statement refuted

Assume Countable Choice for the Lax--Milgram conclusion. On $H=\mathbb C^2$ with the standard inner product define $$a(u,v):=u_1\overline{v_1}+u_2\overline{v_2}+iu_1\overline{v_2}.$$ Then $a$ is sesquilinear in the convention of [[def-bounded-coercive-and-symmetric-sesquilinear-forms]], bounded with $|a(u,v)|\le2\|u\|\|v\|$ and coercive with $\operatorname{Re}a(u,u)\ge\tfrac12\|u\|^2$, so $\alpha=\tfrac12$. It is not symmetric: with $e_1=(1,0)$, $e_2=(0,1)$ one has $a(e_1,e_2)=i$ while $\overline{a(e_2,e_1)}=0$. Hence the Lax--Milgram theorem [[thm-lax-milgram]] applies to this nonsymmetric form, and symmetry is not needed for existence and uniqueness; the energy-minimisation corollary [[cor-symmetric-lax-milgram-is-energy-minimisation]] is the part that genuinely uses symmetry. The example is consistent with the abstract forcing remark [[rem-nonsymmetric-lax-milgram-is-not-a-scalar-minimisation-principle]].

## Facts & Assumptions

**Given:** Countable Choice; the Hilbert space $H=\mathbb C^2$ with the standard inner product $\|u\|^2=|u_1|^2+|u_2|^2$; the form $a(u,v)=u_1\overline{v_1}+u_2\overline{v_2}+iu_1\overline{v_2}$; and the vectors $e_1=(1,0)$, $e_2=(0,1)$.

[F1] Sesquilinearity in the convention linear in the first argument and conjugate-linear in the second, with boundedness and coercivity as in [[def-bounded-coercive-and-symmetric-sesquilinear-forms]] ([[def-real-and-complex-inner-product-space]], [[def-hilbert-space]]).

[F2] Scalar facts: $|z\overline w|=|z||w|$, $\overline{i}=-i$, $i^2=-1$; and for vectors in $\mathbb C^2$, $|z_1w_1|+|z_2w_2|\le(|z_1|^2+|z_2|^2)^{1/2}(|w_1|^2+|w_2|^2)^{1/2}$ by Cauchy--Schwarz ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F3] Lax--Milgram applies to bounded coercive forms and does not assume symmetry; the energy-minimisation corollary does assume it ([[thm-lax-milgram]], [[cor-symmetric-lax-milgram-is-energy-minimisation]], [[rem-nonsymmetric-lax-milgram-is-not-a-scalar-minimisation-principle]]).



## Proof

1.1 Sesquilinearity, boundedness and coercivity: for scalars $\lambda$, $a(\lambda u,v)=\lambda a(u,v)$ and $a(u,\lambda v)=\overline\lambda a(u,v)$ directly from the definition, so $a$ is sesquilinear in the stated convention. Moreover $|a(u,v)|\le|u_1||v_1|+|u_2||v_2|+|u_1||v_2|$, and Cauchy--Schwarz applied to the pairs $(|u_1|,|u_2|)$, $(|v_1|,|v_2|)$ gives $|a(u,v)|\le(|u_1|+|u_2|)(|v_1|+|v_2|)\le2\|u\|\,\|v\|$; and $a(u,u)=|u_1|^2+|u_2|^2+iu_1\overline{u_2}$ has real part at least $\|u\|^2-|u_1||u_2|\ge\tfrac12\|u\|^2$, using $2|u_1||u_2|\le |u_1|^2+|u_2|^2$. Thus $a$ is coercive with constant $\alpha=\tfrac12$. [F1, F2]

1.2 Nonsymmetry: for the standard basis vectors, $a(e_1,e_2)=i$ while $\overline{a(e_2,e_1)}=\overline{0}=0$, so $a(e_1,e_2)\ne\overline{a(e_2,e_1)}$ and $a$ is not symmetric. [F1, F2]

2.1 Consequences: $a$ is bounded and coercive but not symmetric, so Lax--Milgram applies and gives existence and uniqueness of solutions for every bounded conjugate-linear datum, while the energy-minimisation characterisation, which requires symmetry, does not apply. Thus symmetry is not needed for solvability but is genuinely used by the variational principle. [F1, F3, step 1.1, step 1.2] ∎ 