## Representation Learning and Generative Models

Completed visual review of **141 items across 34 pages**, with **260 image tiles**. Findings: 1 confirmed. Evidence: [manifest](math-library-rendering-audit-2026-10-23/representation-learning-and-generative-models/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/representation-learning-and-generative-models/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/representation-learning-and-generative-models/category-review-receipt.json).

### Confirmed rendering defects

#### representation-learning-and-generative-models / confirmed 001: `alg-masked-autoencoder-pretraining`

- Location: **Definition**; source lines 50, 51, 52, 53, 54, 55, 56, 57, 58.
- Pages: `reconstruction-and-masked-autoencoders`.
- Visible defect: The rendered boxes and labels for the input, mask sampling, encoder, token restoration, decoder, and predictions visibly run into neighboring nodes, making the data-flow sequence hard to read.
- Future repair: Increase the horizontal center spacing to exceed each adjacent pair’s rendered half-widths, or use a wider layout / smaller node text while preserving the arrow order and distinct loss branch.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/representation-learning-and-generative-models/screenshots/alg-masked-autoencoder-pretraining--01.png); [frozen source](math-library-rendering-audit-2026-10-23/representation-learning-and-generative-models/snapshots/alg-masked-autoencoder-pretraining.md).

Exact frozen source lines:

```text
50: \begin{tikzpicture}[>=stealth,scale=0.78,transform shape]
51:   \node[draw,rounded corners,align=center,minimum width=2.1cm,minimum height=0.8cm] (input) at (0,0) {Input patch\\sequence};
52:   \node[draw,rounded corners,align=center,minimum width=2.1cm,minimum height=0.8cm] (mask) at (2.7,0) {Uniformly sample\\visible positions};
53:   \node[draw,rounded corners,align=center,minimum width=2.1cm,minimum height=0.8cm] (enc) at (5.4,0) {Encoder sees\\visible patches only};
54:   \node[draw,rounded corners,align=center,minimum width=2.4cm,minimum height=0.8cm] (restore) at (8.3,0) {Insert learned tokens\\at missing positions};
55:   \node[draw,rounded corners,align=center,minimum width=2.1cm,minimum height=0.8cm] (dec) at (11.2,0) {Decoder};
56:   \node[draw,rounded corners,align=center,minimum width=2.3cm,minimum height=0.8cm] (pred) at (14,0) {Predictions at\\all positions};
57:   \node[draw,rounded corners,align=center,minimum width=3.0cm,minimum height=0.8cm] (loss) at (8.3,-1.7) {Masked-patch MSE\\only};
58:   \node[draw,rounded corners,align=center,minimum width=2.8cm,minimum height=0.8cm] (target) at (3.4,-1.7) {Clean targets at\\missing positions};
```

