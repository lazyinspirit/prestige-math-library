---
id: ex-reconstruction-objective-shortcut
kind: example
title: "A normalized-pixel objective with a constant representation"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-reconstruction-autoencoder
  - alg-masked-autoencoder-pretraining
  - def-feedforward-neural-network
  - def-expectation-on-a-finite-probability-space
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Kaiming He, Xinlei Chen, Saining Xie, Yanghao Li, Piotr Dollár, and Ross Girshick, Masked Autoencoders Are Scalable Vision Learners, §3.3, §4/Table 1, and Appendix A.1/Tables 8–9"
      url: "https://arxiv.org/pdf/2111.06377"
    - title: "Ian Goodfellow, Yoshua Bengio, and Aaron Courville, Deep Learning, §14.5"
      url: "https://www.deeplearningbook.org/contents/autoencoders.html"
    - title: "Pascal Vincent, Hugo Larochelle, Yoshua Bengio, and Pierre-Antoine Manzagol, Extracting and Composing Robust Features with Denoising Autoencoders, §§2.2–2.3"
      url: "https://www.cs.toronto.edu/~larocheh/publications/icml-2008-denoising-autoencoders.pdf"
---

## Example

Let $M=2$, $q=2$, $p_0=(0,1/2)$, and $p_1=(1/2,1)$. Consider two equally weighted images $X^{(0)}=(p_0,p_0)$ and $X^{(1)}=(p_1,p_1)$ with downstream labels $0$ and $1$, respectively. Use one visible patch ($k=1$), the patchwise normalized-pixel target, a constant encoder with code $z_*$, and a decoder that predicts $(-1,1)$ at each patch position for every input and mask. This model has masked reconstruction objective zero, although its representation cannot distinguish the two labels.

As a separate empirical example, He et al. report an ImageNet-1K ViT-L/16 run with random 75% masking, an eight-block decoder of width 512, an unnormalized-pixel target, random resized crops, and 800 pretraining epochs. Their Table 1 reports 84.9% top-1 validation accuracy (the fraction of validation images whose highest-scoring predicted class is correct) after 50-epoch supervised fine-tuning, measured on a single $224\times224$ crop; their Appendix A.1 gives the pretraining optimizer settings (AdamW, base learning rate $1.5\times10^{-4}$ with the rule $\mathrm{lr}=\mathrm{base\_lr}\cdot\mathrm{batchsize}/256$, weight decay $0.05$, momentum $(0.9,0.95)$, batch size $4096$, cosine-decay schedule, and 40 warmup epochs). These are measurements for the reported data, architecture, and training protocol, not a theorem about other tasks or a semantic-sufficiency guarantee.

## Example references

[He et al., §3.3: normalized masked-patch target](https://arxiv.org/pdf/2111.06377)

[He et al., §4/Table 1: ViT-L/16 ImageNet-1K ablation, masking ratio, pretraining length, and reported validation accuracy](https://arxiv.org/pdf/2111.06377)

[He et al., Appendix A.1/Tables 8–9: pretraining and fine-tuning settings](https://arxiv.org/pdf/2111.06377)

[Goodfellow et al., §14.5: general corruption-conditioned denoising objective](https://www.deeplearningbook.org/contents/autoencoders.html)

[Vincent et al., §§2.2–2.3: finite reconstruction objective and corruption-conditioned clean target](https://www.cs.toronto.edu/~larocheh/publications/icml-2008-denoising-autoencoders.pdf)

## Facts & Assumptions

**Given:** The training law assigns weight $1/2$ to each of $X^{(0)}$ and $X^{(1)}$; independently choose the visible set uniformly from $\{\{1\},\{2\}\}$. The target is $T_{\rm norm}$, the encoder is the constant map $E(x,V)=z_*$, and the decoder returns $(-1,1)$ at both positions for every encoded sequence.

[F1] [[def-reconstruction-autoencoder]]: for a patch with positive standard deviation, $T_{\rm norm}(u)=(u-\bar u\mathbf 1)/s(u)$, and the masked-patch loss averages squared errors over positions in $[M]\setminus V$.

[F2] [[alg-masked-autoencoder-pretraining]]: the visible set is uniform among all size-$k$ subsets; the encoder sees only visible patches, while the decoder predicts every patch after mask tokens are inserted at missing positions.

[F3] [[def-expectation-on-a-finite-probability-space]]: expectation on a finite probability space is the weighted sum of the values over its outcomes.

[F4] [[def-feedforward-neural-network]]: each non-input vertex has a real bias, weights on its incoming edges, and an activation; in a layered MLP the output vertices use the identity activation.

## Verification

1.1 For $p_0$, the mean is $1/4$ and the standard deviation is $1/4$; for $p_1$, they are $3/4$ and $1/4$. Hence [F1] gives $T_{\rm norm}(p_0)=(-1,1)=T_{\rm norm}(p_1)$. [given, F1, algebra]

1.2 Both patches of either image have this same normalized target. By [F2], each mask leaves exactly one masked patch, and the decoder predicts $(-1,1)$ there. Its squared error is zero, so the per-example loss [F1] is zero for every image-mask outcome. The finite expectation [F3] is therefore zero. [given, F1, F2, F3, algebra]

2.1 The encoder returns $z_*$ for both differently labelled images. Any deterministic classifier applied only to this code has the same output on both images, so it cannot classify both labels correctly. The constant maps are permitted finite feedforward maps by [F4], taking zero incoming weights and fixed biases. [given, F4, algebra] ∎
