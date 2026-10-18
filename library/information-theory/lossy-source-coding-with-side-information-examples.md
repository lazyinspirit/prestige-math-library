---
page: lossy-source-coding-with-side-information-examples
title: "Lossy Source Coding with Side Information — Examples"
status: published
requires:
  - lossy-source-coding-with-side-information
items: []
examples:
  - ex-it-wyner-ziv-with-no-side-information
  - ex-it-wyner-ziv-lossless-slepian-wolf-endpoint
  - ex-it-berger-tung-lossless-slepian-wolf-special-case
---

The first example compares decoder-only side information with the no-side-information rate-distortion limit. At the model level, decoder-only access uses an encoder $f_n:\mathcal X^n\to[M]$ and decoder $g_n:[M]\times\mathcal Y^n\to\widehat{\mathcal X}^n$, whereas side information available at both terminals permits an encoder $f_n:\mathcal X^n\times\mathcal Y^n\to[M]$ and the same decoder inputs $(m,y^n)$. The Wyner-Ziv theorem on the A page covers only the $X^n$-only encoder model; this page makes no claim that encoder access to $Y^n$ leaves the rate unchanged. The examples also compute the lossless conditional-entropy endpoint and verify the Slepian-Wolf special case inside the Berger-Tung inner bound. All logarithms and rates are in nats. The multiterminal examples state exactness only for the lossless specialization proved by the Slepian-Wolf theorem.
